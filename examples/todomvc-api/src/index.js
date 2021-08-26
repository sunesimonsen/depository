/* global localStorage:false */

export const loadTodos = () =>
  Object.entries(localStorage)
    .filter(([key]) => key.startsWith("depository.todo.entities"))
    .map(([key, value]) => JSON.parse(value));

export const updateTodo = (todo) => {
  localStorage.setItem(
    `depository.todo.entities.${todo.id}`,
    JSON.stringify(todo)
  );
  return todo;
};

export const createTodo = (todo) => {
  let nextId = parseInt(localStorage.getItem("depository.todo.nextId"));

  if (isNaN(nextId)) {
    nextId = 0;
  } else {
    nextId++;
  }

  localStorage.setItem("depository.todo.nextId", nextId);

  return updateTodo({ id: String(nextId), ...todo });
};

export const removeTodos = ({ ids }) => {
  for (const id of ids) {
    localStorage.removeItem(`depository.todo.entities.${id}`);
  }
  return { ids };
};
