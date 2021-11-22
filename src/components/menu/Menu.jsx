import "./menu.scss";
import { useRef, useEffect } from "react";
import { init } from "ityped";
import { ThemeContext } from "../../context";
import { useContext } from "react";
export default function Menu({ openSidebar, setOpenSidebar }) {
  const text = useRef();
  const theme = useContext(ThemeContext);
  useEffect(() => {
    init(text.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["posts", "comments", "albums", "photos", "todos", "users"],
    });
  }, [text]);
  return (
    <div className="menu">
      <div className="header">
        <div className="icon" onClick={() => setOpenSidebar(!openSidebar)}>
          <i
            style={{
              color: theme.state.darkMode ? "white" : "",
            }}
            class="fa-solid fa-bars"
          ></i>
        </div>
        <div className="title">
          <span
            style={{
              color: theme.state.darkMode ? "white" : "",
            }}
            ref={text}
          ></span>
        </div>
      </div>
    </div>
  );
}
