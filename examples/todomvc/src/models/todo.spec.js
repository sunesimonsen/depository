import expect from "unexpected";

import {
  allTodos,
  createTodo,
  completeTodo,
  completeAllTodos,
  clearCompleteTodos,
  setVisibilityFilter,
} from "./todo";

import Store from "@depository/store";

describe("allTodes", () => {
  let store;

  describe("when the store is empty", () => {
    beforeEach(() => {
      store = new Store();
    });

    it("returns an empty list", () => {
      expect(store.get(allTodos), "to be empty");
    });
  });

  describe("when the store contains todos", () => {
    beforeEach(() => {
      store = new Store({
        global: {
          visibility: "all",
        },
        entities: {
          todo: {
            0: { id: "0", text: "foo", completed: false, createdAt: 0 },
            2: { id: "2", text: "baz", completed: true, createdAt: 2 },
            1: { id: "1", text: "bar", completed: false, createdAt: 1 },
          },
        },
      });
    });

    it("returns the todos in creation order", () => {
      expect(store.get(allTodos), "to equal", [
        { id: "0", text: "foo", completed: false, createdAt: 0 },
        { id: "1", text: "bar", completed: false, createdAt: 1 },
        { id: "2", text: "baz", completed: true, createdAt: 2 },
      ]);
    });

    describe("when the visibility filter is active", () => {
      beforeEach(() => {
        store.dispatch(setVisibilityFilter("active"));
      });

      it("returns todos that is not completed", () => {
        expect(store.get(allTodos), "to equal", [
          { id: "0", text: "foo", completed: false, createdAt: 0 },
          { id: "1", text: "bar", completed: false, createdAt: 1 },
        ]);
      });
    });

    describe("when the visibility filter is completed", () => {
      beforeEach(() => {
        store.dispatch(setVisibilityFilter("completed"));
      });

      it("returns todos that is completed", () => {
        expect(store.get(allTodos), "to equal", [
          { id: "2", text: "baz", completed: true, createdAt: 2 },
        ]);
      });
    });

    describe("when a new todo is created", () => {
      it("returns the new todo as part of the list", () => {
        store.dispatch(createTodo({ id: "3", text: "qux", createdAt: 3 }));

        expect(store.get(allTodos), "to equal", [
          { id: "0", text: "foo", completed: false, createdAt: 0 },
          { id: "1", text: "bar", completed: false, createdAt: 1 },
          { id: "2", text: "baz", completed: true, createdAt: 2 },
          { id: "3", text: "qux", completed: false, createdAt: 3 },
        ]);
      });
    });
  });
});

describe("createTodo", () => {
  it("adds a new todo to the state", () => {
    const store = new Store();
    store.dispatch(createTodo({ id: "0", text: "foo", createdAt: 0 }));
    expect(store.get("entities.todo.*"), "to equal", [
      { id: "0", text: "foo", completed: false, createdAt: 0 },
    ]);
  });
});

describe("completeTodo", () => {
  let store;
  beforeEach(() => {
    store = new Store({
      entities: {
        todo: { 0: { id: "0", text: "foo", completed: false, createdAt: 0 } },
      },
    });
  });

  it("completes a given todo", () => {
    store.dispatch(completeTodo({ id: "0" }));

    expect(store.get("entities.todo.*"), "to equal", [
      { id: "0", text: "foo", completed: true, createdAt: 0 },
    ]);
  });

  describe("when the todo doesn't exists", () => {
    it("doesn't alter the store", () => {
      store.dispatch(completeTodo({ id: "13" }));

      expect(store.get("entities.todo.*"), "to equal", [
        { id: "0", text: "foo", completed: false, createdAt: 0 },
      ]);
    });
  });
});

describe("completeTodo", () => {
  let store;
  beforeEach(() => {
    store = new Store({
      entities: {
        todo: {
          0: { id: "0", text: "foo", completed: false, createdAt: 0 },
          2: { id: "2", text: "baz", completed: true, createdAt: 2 },
          1: { id: "1", text: "bar", completed: false, createdAt: 1 },
        },
      },
    });
  });

  it("completes all todos", () => {
    store.dispatch(completeAllTodos());

    expect(store.get("entities.todo.*"), "to equal", [
      { id: "0", text: "foo", completed: true, createdAt: 0 },
      { id: "1", text: "bar", completed: true, createdAt: 1 },
      { id: "2", text: "baz", completed: true, createdAt: 2 },
    ]);
  });
});

describe("clearCompleteTodos", () => {
  let store;
  beforeEach(() => {
    store = new Store({
      entities: {
        todo: {
          0: { id: "0", text: "foo", completed: false, createdAt: 0 },
          2: { id: "2", text: "baz", completed: true, createdAt: 2 },
          1: { id: "1", text: "bar", completed: false, createdAt: 1 },
        },
      },
    });
  });

  it("removes all completed todos from the store", () => {
    store.dispatch(clearCompleteTodos());

    expect(store.get("entities.todo.*"), "to equal", [
      { id: "0", text: "foo", completed: false, createdAt: 0 },
      { id: "1", text: "bar", completed: false, createdAt: 1 },
    ]);
  });
});
