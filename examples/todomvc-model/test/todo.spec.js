import expect from "unexpected";
import { promiseMiddleware } from "@depository/promise-middleware";
import { Store } from "@depository/store";

import {
  INITIAL_STATE,
  allTodos,
  clearCompleteTodos,
  createTodo,
  loadTodos,
  removeTodo,
  setVisibilityFilter,
  startEditingTodo,
  stopEditingTodo,
  toggleAllTodos,
  toggleTodo,
  updateTodo,
  visibilityFilter,
} from "../src/index.js";

class FakeApi {
  constructor({ nextId = 0 } = {}) {
    this.nextId = nextId;
  }

  loadTodos() {
    return [
      {
        id: String(this.nextId++),
        text: "foo",
        editing: false,
        completed: false,
        createdAt: 0,
      },
      {
        id: String(this.nextId++),
        text: "bar",
        editing: false,
        completed: false,
        createdAt: 1,
      },
    ];
  }

  createTodo(todo) {
    return { id: String(this.nextId++), ...todo };
  }

  updateTodo(todo) {
    return todo;
  }

  removeTodos({ ids }) {
    return { ids };
  }
}

describe("allTodes", () => {
  let store;

  describe("when the store is empty", () => {
    beforeEach(() => {
      store = new Store(INITIAL_STATE);
    });

    it("returns an empty list", () => {
      expect(store.get(allTodos), "to be empty");
    });
  });

  describe("when the store contains todos", () => {
    beforeEach(() => {
      store = new Store({
        global: {
          visibilityFilter: "all",
        },
        entities: {
          todo: {
            0: {
              id: "0",
              text: "foo",
              editing: false,
              completed: false,
              createdAt: 0,
            },
            2: {
              id: "2",
              text: "baz",
              editing: false,
              completed: true,
              createdAt: 2,
            },
            1: {
              id: "1",
              text: "bar",
              editing: false,
              completed: false,
              createdAt: 1,
            },
          },
        },
      });

      store.useMiddleware(promiseMiddleware(new FakeApi({ nextId: 3 })));
    });

    it("returns the todos in creation order", () => {
      expect(store.get(allTodos), "to equal", [
        {
          id: "0",
          text: "foo",
          editing: false,
          completed: false,
          createdAt: 0,
        },
        {
          id: "1",
          text: "bar",
          editing: false,
          completed: false,
          createdAt: 1,
        },
        { id: "2", text: "baz", editing: false, completed: true, createdAt: 2 },
      ]);
    });

    describe("when the visibility filter is active", () => {
      beforeEach(async () => {
        await store.dispatch(setVisibilityFilter("active"));
      });

      it("updates the visibilty setting", () => {
        expect(store.get(visibilityFilter), "to equal", "active");
      });

      it("returns todos that is not completed", () => {
        expect(store.get(allTodos), "to equal", [
          {
            id: "0",
            text: "foo",
            editing: false,
            completed: false,
            createdAt: 0,
          },
          {
            id: "1",
            text: "bar",
            editing: false,
            completed: false,
            createdAt: 1,
          },
        ]);
      });
    });

    describe("when the visibility filter is completed", () => {
      beforeEach(async () => {
        await store.dispatch(setVisibilityFilter("completed"));
      });

      it("returns todos that is completed", () => {
        expect(store.get(allTodos), "to equal", [
          {
            id: "2",
            text: "baz",
            editing: false,
            completed: true,
            createdAt: 2,
          },
        ]);
      });
    });

    describe("when a new todo is created", () => {
      it("returns the new todo as part of the list", async () => {
        await store.dispatch(
          createTodo({ id: "3", text: "qux", createdAt: 3 })
        );

        expect(store.get(allTodos), "to equal", [
          {
            id: "0",
            text: "foo",
            editing: false,
            completed: false,
            createdAt: 0,
          },
          {
            id: "1",
            text: "bar",
            editing: false,
            completed: false,
            createdAt: 1,
          },
          {
            id: "2",
            text: "baz",
            editing: false,
            completed: true,
            createdAt: 2,
          },
          {
            id: "3",
            text: "qux",
            editing: false,
            completed: false,
            createdAt: 3,
          },
        ]);
      });
    });
  });
});

describe("createTodo", () => {
  it("adds a new todo to the state", async () => {
    const store = new Store(INITIAL_STATE);
    store.useMiddleware(promiseMiddleware(new FakeApi()));

    await store.dispatch(createTodo({ id: "0", text: "foo", createdAt: 0 }));

    expect(store.get("entities.todo.*"), "to equal", [
      {
        id: "0",
        text: "foo",
        editing: false,
        completed: false,
        createdAt: 0,
      },
    ]);
  });
});

describe("updateTodo", () => {
  it("updates the data of an existing todo", async () => {
    const store = new Store(INITIAL_STATE);
    store.useMiddleware(promiseMiddleware(new FakeApi()));

    await store.dispatch(createTodo({ id: "0", text: "foo", createdAt: 0 }));
    await store.dispatch(updateTodo({ id: "0", text: "bar" }));

    expect(store.get("entities.todo.*"), "to equal", [
      { id: "0", text: "bar", editing: false, completed: false, createdAt: 0 },
    ]);
  });
});

describe("startEditingTodo", () => {
  it("sets the given todo in editing mode", async () => {
    const store = new Store(INITIAL_STATE);
    store.useMiddleware(promiseMiddleware(new FakeApi()));

    await store.dispatch(createTodo({ id: "0", text: "foo", createdAt: 0 }));
    await store.dispatch(startEditingTodo({ id: "0" }));

    expect(store.get("entities.todo.*"), "to equal", [
      { id: "0", text: "foo", editing: true, completed: false, createdAt: 0 },
    ]);
  });
});

describe("stopEditingTodo", () => {
  it("sets the given todo in normal mode", async () => {
    const store = new Store(INITIAL_STATE);
    store.useMiddleware(promiseMiddleware(new FakeApi()));

    await store.dispatch(createTodo({ id: "0", text: "foo", createdAt: 0 }));
    await store.dispatch(startEditingTodo({ id: "0" }));
    await store.dispatch(stopEditingTodo({ id: "0" }));

    expect(store.get("entities.todo.*"), "to equal", [
      { id: "0", text: "foo", editing: false, completed: false, createdAt: 0 },
    ]);
  });
});

describe("removeTodo", () => {
  it("removes the todo from the store", async () => {
    const store = new Store(INITIAL_STATE);
    store.useMiddleware(promiseMiddleware(new FakeApi()));

    await store.dispatch(createTodo({ id: "0", text: "foo", createdAt: 0 }));
    await store.dispatch(removeTodo({ id: "0" }));

    expect(store.get("entities.todo.*"), "to be empty");
  });
});

describe("clearCompleteTodos", () => {
  let store;
  beforeEach(() => {
    store = new Store({
      entities: {
        todo: {
          0: {
            id: "0",
            text: "foo",
            editing: false,
            completed: false,
            createdAt: 0,
          },
          2: {
            id: "2",
            text: "baz",
            editing: false,
            completed: true,
            createdAt: 2,
          },
          1: {
            id: "1",
            text: "bar",
            editing: false,
            completed: false,
            createdAt: 1,
          },
        },
      },
    });
    store.useMiddleware(promiseMiddleware(new FakeApi()));
  });

  it("removes all completed todos from the store", async () => {
    await store.dispatch(clearCompleteTodos());

    expect(store.get("entities.todo.*"), "to equal", [
      { id: "0", text: "foo", editing: false, completed: false, createdAt: 0 },
      { id: "1", text: "bar", editing: false, completed: false, createdAt: 1 },
    ]);
  });
});

describe("toggleTodo", () => {
  it("toggles the completed state of the todo", async () => {
    const store = new Store(INITIAL_STATE);
    store.useMiddleware(promiseMiddleware(new FakeApi()));

    await store.dispatch(createTodo({ id: "0", text: "foo", createdAt: 0 }));
    expect(store.get("entities.todo.0"), "to equal", {
      id: "0",
      text: "foo",
      completed: false,
      createdAt: 0,
      editing: false,
    });

    await store.dispatch(toggleTodo({ id: "0" }));
    expect(store.get("entities.todo.0"), "to equal", {
      id: "0",
      text: "foo",
      completed: true,
      createdAt: 0,
      editing: false,
    });

    await store.dispatch(toggleTodo({ id: "0" }));
    expect(store.get("entities.todo.0"), "to equal", {
      id: "0",
      text: "foo",
      completed: false,
      createdAt: 0,
      editing: false,
    });
  });
});

describe("toggleAllTodos", () => {
  let store;

  beforeEach(async () => {
    store = new Store(INITIAL_STATE);
    store.useMiddleware(promiseMiddleware(new FakeApi()));

    await store.dispatch(createTodo({ text: "one" }));
    await store.dispatch(createTodo({ text: "two" }));
    await store.dispatch(createTodo({ text: "three" }));
    await store.dispatch(toggleTodo({ id: 1 }));
  });

  describe("when there are active todos", () => {
    beforeEach(async () => {
      await store.dispatch(toggleAllTodos());
    });

    it("sets the all todos to completed", () => {
      expect(store.get("entities.todo.*"), "to satisfy", [
        { id: "0", text: "one", completed: true },
        { id: "1", text: "two", completed: true },
        { id: "2", text: "three", completed: true },
      ]);
    });
  });

  describe("when all todos is completed", () => {
    beforeEach(async () => {
      await store.dispatch(toggleAllTodos());
      await store.dispatch(toggleAllTodos());
    });

    it("sets all todos to active", () => {
      expect(store.get("entities.todo.*"), "to satisfy", [
        { id: "0", text: "one", completed: false },
        { id: "1", text: "two", completed: false },
        { id: "2", text: "three", completed: false },
      ]);
    });
  });
});

describe("loadTodos", () => {
  it("reads the todos from the api into the store", async () => {
    const store = new Store(INITIAL_STATE);
    store.useMiddleware(promiseMiddleware(new FakeApi()));

    await store.dispatch(loadTodos());

    expect(store.get("entities.todo"), "to equal", {
      0: {
        id: "0",
        text: "foo",
        editing: false,
        completed: false,
        createdAt: 0,
      },
      1: {
        id: "1",
        text: "bar",
        editing: false,
        completed: false,
        createdAt: 1,
      },
    });
  });
});
