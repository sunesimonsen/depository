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

export const allTodos = "entities.todo.*";

const sortedTodos = {
  inputs: { allTodos },
  compute: ({ allTodos }) =>
    (allTodos || []).sort((a, b) => {
      const aCreatedAt = new Date(a.createdAt);
      const bCreatedAt = new Date(b.createdAt);
      if (aCreatedAt < bCreatedAt) return -1;
      if (aCreatedAt > bCreatedAt) return 1;
      return 0;
    }),
};

export const filteredTodos = {
  inputs: {
    filter: visibilityFilter,
    sortedTodos,
  },
  compute: ({ filter, sortedTodos }) =>
    sortedTodos.filter(visibilityFilters[filter]),
};

const completedTodos = {
  inputs: { allTodos },
  compute: ({ allTodos }) => allTodos.filter(({ completed }) => completed),
};

export const todoById = (id) => `entities.todo.${id}`;

export const activeTodoCount = {
  inputs: {
    completed: "entities.todo.*.completed",
  },
  compute: ({ completed }) => completed.filter((c) => !c).length,
};

const initialized = "global.initialized";

export const loadTodos = () => ({
  name: "loadTodos",
  inputs: { initialized },
  payload: async ({ initialized }, api) => {
    if (initialized) return null;

    const response = await api.loadTodos();

    const todosById = response.reduce(
      (result, todo) => ({ ...result, [todo.id]: todo }),
      {}
    );

    return {
      [initialized]: true,
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
    allTodos,
  },
  payload: async ({ count, allTodos }, api) => {
    const response = await Promise.all(
      allTodos.map((todo) =>
        api.updateTodo({ ...todo, completed: count !== 0 })
      )
    );

    const update = {};
    for (const todo of response) {
      update[todoById(todo.id)] = todo;
    }
    return update;
  },
});

const editingById = (id) => `${todoById(id)}.editing`;

export const startEditingTodo = ({ id }) => ({
  name: "startEditingTodo",
  payload: {
    [editingById(id)]: true,
  },
});

export const stopEditingTodo = ({ id }) => ({
  name: "stopEditingTodo",
  payload: {
    [editingById(id)]: false,
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
