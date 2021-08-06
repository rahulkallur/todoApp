import logo from "./logo.svg";
import "./App.css";
import { Component } from "react/cjs/react.production.min";
import TodoList from "./components/TodoList";

class App extends Component {
  render() {
    return <div className="App">
      <TodoList/>
    </div>;
  }
}

export default App;
