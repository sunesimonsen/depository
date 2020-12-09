import { StoreContext } from "./StoreContext";

export const createWithStore = ({ h, Component }) => (
  ChildComponent,
  bindings
) => {
  class WithStore extends Component {
    constructor(props) {
      super(props);

      const store = props.store;
      this.state = {
        dispatch: store.dispatch.bind(store),
      };
      this.observers = {};
      Object.keys(bindings).forEach((name) => {
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

  return ({ children, ...other }) =>
    h(StoreContext.Consumer, null, (store) =>
      h(WithStore, { store, ...other }, children)
    );
};
