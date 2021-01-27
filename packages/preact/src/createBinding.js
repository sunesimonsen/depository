export const createBinding = ({ h, Component, StoreContext }) => {
  const connect = (functionbindings, ChildComponent) => {
    if (!ChildComponent) {
      ChildComponent = functionbindings;
      functionbindings = null;
    }

    class Connected extends Component {
      constructor(props) {
        super(props);

        const bindings =
          typeof functionbindings === "function"
            ? functionbindings(props)
            : functionbindings;

        const store = props.store;

        this.dispatch = (action) => {
          return store.dispatch(action);
        };

        this.observer = store.observe(bindings);

        this.state = this.observer.value;
      }

      componentDidMount() {
        this.subscription = this.observer.subscribe((value) => {
          this.setState(value);
        });
      }

      componentWillUnmount() {
        this.subscription.unsubscribe();
      }

      render({ children, store, ...other }, state) {
        return h(
          ChildComponent,
          {
            dispatch: this.dispatch,
            ...state,
            ...other,
          },
          children
        );
      }
    }

    const StoreInjector = ({ children, ...other }) =>
      h(StoreContext.Consumer, null, (store) =>
        h(Connected, { store, ...other }, children)
      );

    return StoreInjector;
  };

  return connect;
};
