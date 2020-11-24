const createVisibilityFilter = (filter) => {
  switch (filter) {
    case "active":
      return ({ completed }) => !completed;
    case "completed":
      return ({ completed }) => completed;
    default:
      return () => true;
  }
};

export const visibilityFilter = "global.visibilityFilter";

export const allTodos = {
  inputs: {
    filter: visibilityFilter,
    todos: "entities.todo.*.{*}",
  },
  apply: ({ filter, todos }) =>
    (todos || []).filter(createVisibilityFilter(filter)).sort((a, b) => {
      if (a.createdAt < b.createdAt) return -1;
      if (a.createdAt > b.createdAt) return 1;
      return 0;
    }),
};

export const todoById = (id) => `entities.todo.${id}`;

export const todoCount = {
  inputs: {
    completed: "entities.todo.*.completed",
  },
  apply: ({ completed }) => completed.filter(Boolean).length,
};

export const activeTodoCount = {
  inputs: {
    completed: "entities.todo.*.completed",
  },
  apply: ({ completed }) => completed.filter((c) => !c).length,
};

export const hasCompletedTodos = {
  inputs: {
    completed: "entities.todo.*.completed",
  },
  apply: ({ completed }) => completed.some(Boolean),
};

export const createTodo = ({ id, text, createdAt = new Date() }) => ({
  payload: { id, text, completed: false, createdAt },
  apply: (cache, { payload }) => {
    cache.set(`entities.todo.${payload.id}`, payload);
  },
});

export const completeTodo = ({ id }) => ({
  payload: { id },
  apply: (cache, { payload }) => {
    if (cache.has(`entities.todo.${payload.id}`)) {
      cache.set(`entities.todo.${payload.id}.completed`, true);
    }
  },
});

export const completeAllTodos = () => ({
  apply: (cache) => {
    cache.set(`entities.todo.*.completed`, true);
  },
});

export const clearCompleteTodos = () => ({
  apply: (cache) => {
    const todos = cache.get(`entities.todo.*`);
    const completed = todos.filter(({ completed }) => completed);
    for (const { id } of completed) {
      cache.remove(`entities.todo.${id}`);
    }
  },
});

export const setVisibilityFilter = (filter) => ({
  payload: { filter },
  apply: (cache, { payload }) => {
    cache.set(visibilityFilter, filter);
  },
});
