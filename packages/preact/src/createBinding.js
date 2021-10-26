export const createBinding = ({ h, Component, StoreContext }) => {
  const connect = (bindingOrFunction, ChildComponent) => {
    if (!ChildComponent) {
      ChildComponent = bindingOrFunction;
      bindingOrFunction = null;
    }

    const isFunctionBindings = typeof bindingOrFunction === "function";

    class Connected extends Component {
      constructor(props) {
        super(props);

        const bindings = isFunctionBindings
          ? bindingOrFunction(props)
          : bindingOrFunction;

        const store = props.store;

        this.dispatch = (action) => {
          return store.dispatch(action);
        };

        this._observable = bindings && store.observe(bindings);

        this.state = this._observable ? this._observable.value : {};
      }

      _subscribe() {
        this._subscription =
          this._observable &&
          this._observable.subscribe((data) => {
            this.setState(data);
          });
      }

      componentDidMount() {
        this._subscribe();
      }

      componentWillUnmount() {
        this._subscription && this._subscription.unsubscribe();
      }

      componentDidUpdate() {
        if (this._observable && isFunctionBindings) {
          const bindings = bindingOrFunction(this.props);
          const _observable = this.props.store.observe(bindings);
          if (this._observable !== _observable) {
            this._subscription.unsubscribe();
            this._observable = _observable;
            this._subscribe();
            this.setState(this._observable.value);
          }
        }
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
