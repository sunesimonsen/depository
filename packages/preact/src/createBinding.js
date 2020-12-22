let nextId = 0;

export const createBinding = ({ h, Component, createContext }) => {
  const StoreContext = createContext(`depository`);

  const connect = (ChildComponent, functionbindings) => {
    class Connected extends Component {
      constructor(props) {
        super(props);

        const instanceId = nextId++;
        this.instanceId = instanceId;

        const store = props.store;

        const dispatch = (action) => {
          return store.dispatch({ instanceId, ...action });
        };

        this.state = { instanceId, dispatch };

        const bindings =
          typeof functionbindings === "function"
            ? functionbindings({ ...this.state, ...props })
            : functionbindings;

        this.observers = {};

        Object.keys(bindings || {}).forEach((name) => {
          const binding = bindings[name];
          if (typeof binding === "function") {
            this.state[name] = binding;
          } else {
            const observer = store.observe(binding);
            this.observers[name] = observer;
            this.state[name] = observer.value;
          }
        });
      }

      componentDidMount() {
        this.subscriptions = [];

        Object.entries(this.observers).forEach(([name, observer]) => {
          this.subscriptions.push(
            observer.subscribe((value) => {
              this.setState({
                [name]: value,
              });
            })
          );
        });
      }

      componentWillUnmount() {
        this.subscriptions.forEach((subscription) => {
          subscription.unsubscribe();
        });

        this.subscriptions = [];
      }

      render({ children, store, ...other }) {
        return h(ChildComponent, { ...this.state, ...other }, children);
      }
    }

    const StoreInjector = ({ children, ...other }) =>
      h(StoreContext.Consumer, null, (store) =>
        h(Connected, { store, ...other }, children)
      );

    return StoreInjector;
  };

  const StoreProvider = StoreContext.Provider;

  return { connect, StoreProvider };
};
