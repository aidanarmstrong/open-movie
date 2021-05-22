import './App.css';
import Root from "./navigation/root.navigation";
import {Provider} from "react-redux";
import store from "./store/store.store";

function App() {
  return (
      <Provider store={store}>
        <Root/>
      </Provider>
    )
}

export default App;
