import "./todos.scss";
import axios from "axios";
import { useState, useEffect } from "react";
export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [todosData, setTodosData] = useState([]);
  const [todosPage, setTodosPage] = useState(1);
  function filter(todosPage) {
    return todosData.filter(
      (item, index) => index >= (todosPage - 1) * 15 && index < todosPage * 15
    );
  }
  function getTodos() {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setTodos(res.data.filter((item, index) => index >= 0 && index < 15));
      setTodosData(res.data);
    });
  }
  useEffect(() => {
    getTodos();
  }, []);

  function onNext() {
    if (todosPage < 14) {
      setTodosPage((prevState) => prevState + 1);
    } else {
      setTodosPage(todosPage);
    }
  }
  function onPrev() {
    if (todosPage > 1) {
      setTodosPage((prevState) => prevState - 1);
    } else {
      setTodosPage(todosPage);
    }
  }
  useEffect(() => {
    const res = filter(todosPage);
    setTodos(res);
  }, [todosPage]);
  return (
    <div className="todos" data-aos="fade-right">
      <p className="todosTitle">Todos</p>
      <table className="table tab-content table-bordered todosTable">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((item) => (
            <tr key={item.id}>
              <td className="todoId">{item.id}</td>
              <td className="todotitle">{item.title}</td>
              <td>
                <input
                  type="checkbox"
                  className="todoCheck"
                  checked={item.completed}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="todosPagination">
        <button className="todosBtn" onClick={onPrev}>
          Prev
        </button>
        <p className="todosPage">{todosPage}</p>
        <button className="todosBtn" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
}
