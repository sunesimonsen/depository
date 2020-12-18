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
    todos: "entities.todo.*",
  },
  compute: ({ filter, todos }, cache) =>
    (todos || []).filter(createVisibilityFilter(filter)).sort((a, b) => {
      if (a.createdAt < b.createdAt) return -1;
      if (a.createdAt > b.createdAt) return 1;
      return 0;
    }),
};

const completedTodos = {
  inputs: { todos: "entities.todo.*" },
  compute: ({ todos }) => todos.filter(({ completed }) => completed),
};

export const todoById = (id) => `entities.todo.${id}`;

export const activeTodoCount = {
  inputs: {
    completed: "entities.todo.*.completed",
  },
  compute: ({ completed }) => completed.filter((c) => !c).length,
};

export const loadTodos = () => ({
  payload: (cache, api) => api.loadTodos(),
  apply: (cache, { payload }) => {
    const todosById = payload.reduce(
      (result, todo) => ({ ...result, [todo.id]: todo }),
      {}
    );
    cache.set("entities.todo", todosById);
  },
});

export const createTodo = ({ text, createdAt = new Date() }) => ({
  payload: (cache, api) =>
    api.createTodo({
      text,
      completed: false,
      createdAt,
      editing: false,
    }),
  apply: (cache, { payload }) => {
    cache.set(todoById(payload.id), payload);
  },
});

export const updateTodo = ({ id, ...values }) => ({
  payload: (cache, api) => api.updateTodo({ ...values, id, editing: false }),
  apply: (cache, { payload }) => {
    cache.update(todoById(id), (todo) => ({
      ...todo,
      ...payload,
    }));
  },
});

export const toggleTodo = ({ id }) => ({
  payload: (cache, api) => {
    const todo = cache.get(todoById(id));
    return api.updateTodo({ ...todo, completed: !todo.completed });
  },
  apply: (cache, { payload }) => {
    cache.set(todoById(id), payload);
  },
});

export const toggleAllTodos = () => ({
  payload: (cache, api) => {
    const count = cache.get(activeTodoCount);

    return Promise.all(
      cache
        .get(`entities.todo.*`)
        .map((todo) => api.updateTodo({ ...todo, completed: count !== 0 }))
    );
  },
  apply: (cache, { payload }) => {
    for (const todo of payload) {
      cache.set(todoById(todo.id), todo);
    }
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

export const removeTodo = ({ id }) => ({
  payload: (cache, api) => api.removeTodos({ ids: [id] }),
  apply: (cache, { payload }) => {
    for (const id of payload.ids) {
      cache.remove(todoById(id));
    }
  },
});

export const clearCompleteTodos = () => ({
  payload: (cache, api) => {
    const completed = cache.get(completedTodos);
    const ids = completed.map(({ id }) => id);
    return api.removeTodos({ ids });
  },
  apply: (cache, { payload }) => {
    for (const id of payload.ids) {
      cache.remove(todoById(id));
    }
  },
});

export const setVisibilityFilter = (filter) => ({
  payload: { filter },
  apply: (cache, { payload }) => {
    cache.set(visibilityFilter, filter);
  },
});
