import Appname from "./components/Appname";
import AddTodo from "./components/AddTodo";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/Todoitem2";
import "bootstrap/dist/css/bootstrap.min.css"
import "./Hero.css";

function App() {
  return (
    <center className="Todo-container">
      <Appname />
      <AddTodo />
      <div className="todo-items">
      <TodoItem1 />
      <TodoItem2 />
      </div>
      
    </center>
  );
}

export default App;
