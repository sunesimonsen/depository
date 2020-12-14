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
  compute: ({ filter, todos }) =>
    (todos || []).filter(createVisibilityFilter(filter)).sort((a, b) => {
      if (a.createdAt < b.createdAt) return -1;
      if (a.createdAt > b.createdAt) return 1;
      return 0;
    }),
};

export const todoById = (id) => `entities.todo.${id}`;

export const activeTodoCount = {
  inputs: {
    completed: "entities.todo.*.completed",
  },
  compute: ({ completed }) => completed.filter((c) => !c).length,
};

let ids = 0;

export const createTodo = ({ id = ids++, text, createdAt = new Date() }) => ({
  payload: {
    id: String(id),
    text,
    completed: false,
    createdAt,
    editing: false,
  },
  apply: (cache, { payload }) => {
    cache.set(`entities.todo.${payload.id}`, payload);
  },
});

export const updateTodo = ({ id, ...values }) => ({
  payload: { ...values, id, editing: false },
  apply: (cache, { payload }) => {
    cache.update(`entities.todo.${payload.id}`, (todo) => ({
      ...todo,
      ...payload,
    }));
  },
});

export const toggleTodo = ({ id }) => ({
  payload: { id },
  apply: (cache, { payload }) => {
    cache.update(
      `entities.todo.${payload.id}.completed`,
      (completed) => !completed
    );
  },
});

export const startEditingTodo = ({ id }) => ({
  payload: { id },
  apply: (cache, { payload }) => {
    cache.set(`entities.todo.${payload.id}.editing`, true);
  },
});

export const stopEditingTodo = ({ id }) => ({
  payload: { id },
  apply: (cache, { payload }) => {
    cache.set(`entities.todo.${payload.id}.editing`, false);
  },
});

export const toggleAllTodos = () => ({
  apply: (cache) => {
    const count = cache.get(activeTodoCount);

    cache.set(`entities.todo.*.completed`, count !== 0);
  },
});

export const removeTodo = ({ id }) => ({
  payload: { id },
  apply: (cache, { payload }) => {
    cache.remove(`entities.todo.${payload.id}`);
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
