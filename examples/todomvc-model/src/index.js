export const getInitialState = () => ({
  global: {
    visibilityFilter: "all",
  },
  entities: {
    todo: {},
  },
});

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
      const aCreatedAt = new Date(a.createdAt);
      const bCreatedAt = new Date(b.createdAt);
      if (aCreatedAt < bCreatedAt) return -1;
      if (aCreatedAt > bCreatedAt) return 1;
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
  name: "loadTodos",
  payload: async (cache, api) => {
    if (cache.get("global.initialized")) return null;

    const response = await api.loadTodos();

    const todosById = response.reduce(
      (result, todo) => ({ ...result, [todo.id]: todo }),
      {}
    );

    return {
      "global.initialized": true,
      "entities.todo": todosById,
    };
  },
});

export const createTodo = ({ text, createdAt = new Date().toISOString() }) => ({
  name: "createTodo",
  payload: async (cache, api) => {
    const response = await api.createTodo({
      text,
      completed: false,
      createdAt,
      editing: false,
    });

    return { [todoById(response.id)]: response };
  },
});

export const updateTodo = ({ id, ...values }) => ({
  name: "updateTodo",
  payload: async (cache, api) => {
    const todo = cache.get(todoById(id));
    const response = api.updateTodo({ ...todo, ...values, id, editing: false });
    return { [todoById(id)]: response };
  },
});

export const toggleTodo = ({ id }) => ({
  name: "toggleTodo",
  payload: async (cache, api) => {
    const todo = cache.get(todoById(id));
    const response = await api.updateTodo({
      ...todo,
      completed: !todo.completed,
    });
    return { [todoById(id)]: response };
  },
});

export const toggleAllTodos = () => ({
  name: "toggleAllTodos",
  payload: async (cache, api) => {
    const count = cache.get(activeTodoCount);

    const response = await Promise.all(
      cache
        .get(`entities.todo.*`)
        .map((todo) => api.updateTodo({ ...todo, completed: count !== 0 }))
    );

    const update = {};
    for (const todo of response) {
      update[todoById(todo.id)] = todo;
    }
    return update;
  },
});

export const startEditingTodo = ({ id }) => ({
  name: "startEditingTodo",
  payload: {
    [`entities.todo.${id}.editing`]: true,
  },
});

export const stopEditingTodo = ({ id }) => ({
  name: "stopEditingTodo",
  payload: {
    [`entities.todo.${id}.editing`]: false,
  },
});

export const removeTodo = ({ id }) => ({
  name: "removeTodo",
  payload: async (cache, api) => {
    await api.removeTodos({ ids: [id] });
    return { [todoById(id)]: null };
  },
});

export const clearCompleteTodos = () => ({
  name: "clearCompleteTodos",
  payload: async (cache, api) => {
    const completed = cache.get(completedTodos);
    const ids = completed.map(({ id }) => id);
    const response = await api.removeTodos({ ids });

    const update = {};
    for (const id of response.ids) {
      update[todoById(id)] = null;
    }
    return update;
  },
});

export const setVisibilityFilter = (filter) => ({
  name: "setVisibilityFilter",
  payload: { [visibilityFilter]: filter },
});
