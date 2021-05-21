import './App.css';
import Root from "./components/navigation/root.navigation";
import {Provider} from "react-redux";
import store from "./components/store/store.store";

function App() {
  return (
      <Provider store={store}>
        <Root/>
      </Provider>
    )
}

export default App;
