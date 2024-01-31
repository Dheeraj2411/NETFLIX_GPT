import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import appStore from "./utilities/appStore";

function App() {
  return (
    <div className="">
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
