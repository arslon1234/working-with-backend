import React, { useState } from "react";
import Menu from "./components/menu/Menu";
import SideBar from "./components/sidebar/SideBar";
import "./app.scss";
import { useContext, useEffect } from "react";
import { ThemeContext } from "./context";
import { Switch, Route, Link } from "react-router-dom";
import Users from "./components/users/Users";
import Todos from "./components/todos/Todos";
import Posts from "./components/posts/Posts";
import Comment from "./components/comments/Comment";
import Photo from "./components/photo/Photo";
import Album from "./components/album/Album";
import "aos/dist/aos.css";
import "aos/dist/aos";
import AOS from "aos";
export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const [openSidebar, setOpenSidebar] = useState(true);
  const theme = useContext(ThemeContext);
  return (
    <div
      className="app"
      style={{
        background: theme.state.darkMode
          ? "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 61%, rgba(252,176,69,1) 100%)"
          : "",
      }}
    >
      <div className={openSidebar ? "leftactive" : "left"}>
        <SideBar />
      </div>
      <div className={openSidebar ? "right" : "rightactive"}>
        <Menu openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />

        <div className="showApi">
          <Switch>
            <Route exact path={"/users"} component={Users} />
            <Route exact path={"/todos"} component={Todos} />
            <Route exact path={"/posts"} component={Posts} />
            <Route exact path={"/comments"} component={Comment} />
            <Route path={"/photo"} component={Photo} />
            <Route path={"/album"} component={Album} />
          </Switch>
        </div>
      </div>
    </div>
  );
}
