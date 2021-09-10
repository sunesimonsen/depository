export const INITIAL_STATE = {
  global: {
    visibilityFilter: "all",
  },
  entities: {
    todo: {},
  },
};

const visibilityFilters = {
  active: ({ completed }) => !completed,
  completed: ({ completed }) => completed,
  all: () => true,
};

export const visibilityFilter = "global.visibilityFilter";

export const isVisibilityFilterSelected = (filter) => ({
  inputs: {
    selectedFilter: visibilityFilter,
  },
  compute: ({ selectedFilter }) => filter === selectedFilter,
});

export const allTodos = {
  inputs: {
    filter: visibilityFilter,
    todos: "entities.todo.*",
  },
  compute: ({ filter, todos }) =>
    (todos || []).filter(visibilityFilters[filter]).sort((a, b) => {
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
  inputs: {
    initialized: "global.initialized",
  },
  payload: async ({ initialized }, api) => {
    if (initialized) return null;

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
  payload: async (api) => {
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
  inputs: { todo: todoById(id) },
  payload: async ({ todo }, api) => {
    const response = api.updateTodo({ ...todo, ...values, id, editing: false });
    return { [todoById(id)]: response };
  },
});

export const toggleTodo = ({ id }) => ({
  name: "toggleTodo",
  inputs: { todo: todoById(id) },
  payload: async ({ todo }, api) => {
    const response = await api.updateTodo({
      ...todo,
      completed: !todo.completed,
    });
    return { [todoById(id)]: response };
  },
});

export const toggleAllTodos = () => ({
  name: "toggleAllTodos",
  inputs: {
    count: activeTodoCount,
    todos: "entities.todo.*",
  },
  payload: async ({ count, todos }, api) => {
    const response = await Promise.all(
      todos.map((todo) => api.updateTodo({ ...todo, completed: count !== 0 }))
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
  payload: async (api) => {
    await api.removeTodos({ ids: [id] });
    return { [todoById(id)]: null };
  },
});

export const clearCompleteTodos = () => ({
  name: "clearCompleteTodos",
  inputs: { completedTodos },
  payload: async ({ completedTodos }, api) => {
    const ids = completedTodos.map(({ id }) => id);
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
