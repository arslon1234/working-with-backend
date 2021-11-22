import "./users.scss";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../../context";
export default function Users() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  function getUser() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUsers(res.data);
    });
  }
  useEffect(() => {
    getUser();
  }, []);
  const theme = useContext(ThemeContext);
  return (
    <div className="users" data-aos="zoom-in-down">
      <input
        style={{
          background: theme.state.darkMode
            ? "linear-gradient(70deg, rgba(180,58,150,1) 0%, rgba(200,200,200,1) 40%, rgba(250,100,69,1) 100%)"
            : "",
          color: theme.state.darkMode ? "white" : "black",
        }}
        className="userInput"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Enter Your Name..."
      />
      <span
        style={{
          color: theme.state.darkMode ? "white" : "black",
        }}
        className="userTitle"
      >
        Users
      </span>
      <table className="table table-bordered table-striped table-hover user">
        <thead className="head">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {users
            .filter((item) => {
              if (search === "") {
                return item;
              } else if (item.name.includes(search)) {
                return item;
              }
            })
            .map((item) => (
              <tr className="body" key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.address.city}</td>
                <td>{item.phone}</td>
                <td>{item.website}</td>
                <td>{item.company.name}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
