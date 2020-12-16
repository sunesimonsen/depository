export const createBinding = ({ h, Component, createContext }) => {
  const StoreContext = createContext(`depository`);

  const connect = (ChildComponent, functionbindings) => {
    class Connected extends Component {
      constructor(props) {
        super(props);

        const bindings =
          typeof functionbindings === "function"
            ? functionbindings(props)
            : functionbindings;

        const store = props.store;

        this.state = {
          dispatch: store.dispatch.bind(store),
        };

        this.observers = {};

        Object.keys(bindings || {}).forEach((name) => {
          const observer = store.observe(bindings[name]);
          this.observers[name] = observer;
          this.state[name] = observer.value;
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

      render({ children, ...other }) {
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
