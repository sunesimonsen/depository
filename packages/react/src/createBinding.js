export const createBinding = ({ createElement, Component, StoreContext }) => {
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

        this.observer = bindings && store.observe(bindings);

        this.state = this.observer ? this.observer.value : {};
      }

      componentDidMount() {
        if (this.observer) {
          this.subscription = this.observer.subscribe((value) => {
            this.setState(value);
          });
        }
      }

      componentWillUnmount() {
        this.subscription && this.subscription.unsubscribe();
      }

      render() {
        const { children, store, ...other } = this.props;

        return createElement(
          ChildComponent,
          {
            dispatch: this.dispatch,
            ...this.state,
            ...other,
          },
          children
        );
      }
    }

    const StoreInjector = ({ children, ...other }) =>
      createElement(StoreContext.Consumer, null, (store) =>
        createElement(Connected, { store, ...other }, children)
      );

    return StoreInjector;
  };

  return connect;
};
