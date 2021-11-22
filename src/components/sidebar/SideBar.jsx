import "./sidebar.scss";
import { useContext } from "react";
import { ThemeContext } from "../../context";
import { Link } from "react-router-dom";
export default function SideBar() {
  const theme = useContext(ThemeContext);

  function handleClick() {
    theme.dispatch({ type: "TOGGLE" });
  }
  return (
    <div
      className="sidebar"
      style={{
        background: theme.state.darkMode
          ? "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 61%, rgba(252,176,69,1) 100%)"
          : "",
      }}
    >
      <div className="sidebarheader">
        <div className="sidebartitle">
          <span>API Change</span>
        </div>
        <div
          className="checkbox"
          style={{
            backgroundColor: theme.state.darkMode ? "#535beb" : "#88173b",
          }}
        >
          <div
            className="circle"
            onClick={handleClick}
            style={{
              left: theme.state.darkMode ? 0 : 30,
              backgroundColor: theme.state.darkMode ? "#88173b" : "#535beb",
            }}
          ></div>
        </div>
      </div>
      <div className="sidebarBody">
        <Link to={"/users"} style={{ textDecoration: "none" }}>
          <div className="item">
            <span className="icon">
              <i class="fa-solid fa-user-group"></i>
            </span>
            <span className="api">Users</span>
          </div>
        </Link>
        <Link to={"/posts"} style={{ textDecoration: "none" }}>
          <div className="item">
            <span className="icon">
              <i class="fa-solid fa-address-card"></i>
            </span>
            <span className="api">Posts</span>
          </div>
        </Link>
        <Link to={"/comments"} style={{ textDecoration: "none" }}>
          <div className="item">
            <span className="icon">
              <i class="fa-solid fa-comments"></i>
            </span>
            <span className="api">Comments</span>
          </div>
        </Link>
        <Link to={"/album"} style={{ textDecoration: "none" }}>
          <div className="item">
            <span className="icon">
              <i class="fa-solid fa-photo-film"></i>
            </span>
            <span className="api">Albums</span>
          </div>
        </Link>
        <Link to={"/todos"} style={{ textDecoration: "none" }}>
          <div className="item">
            <span className="icon">
              <i class="fa-solid fa-rectangle-list"></i>
            </span>
            <span className="api">Todos</span>
          </div>
        </Link>

        <Link to={"/photo"} style={{ textDecoration: "none" }}>
          <div className="item">
            <span className="icon">
              <i class="fa-solid fa-image"></i>
            </span>
            <span className="api">Photos</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
