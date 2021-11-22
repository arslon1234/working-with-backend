import "./comments.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { ThemeContext } from "../../context";
export default function Comment() {
  const [comments, setComments] = useState([]);
  const [commentData, setCommentData] = useState([]);
  const [commentPage, setCommentPage] = useState(1);
  const theme = useContext(ThemeContext);
  function filter(commentPage) {
    return commentData.filter(
      (item, index) =>
        index >= (commentPage - 1) * 14 && index < commentPage * 14
    );
  }
  function getComment() {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
      setComments(res.data.filter((item, index) => index >= 0 && index < 14));
      setCommentData(res.data);
    });
  }
  useEffect(() => {
    getComment();
  }, []);

  function onPrev() {
    if (commentPage > 1) {
      setCommentPage((prevState) => prevState - 1);
    } else {
      setCommentPage(commentPage);
    }
  }
  function onNext() {
    if (commentPage < 36) {
      setCommentPage((prevState) => prevState + 1);
    } else {
      setCommentPage(commentPage);
    }
  }
  useEffect(() => {
    const res = filter(commentPage);
    setComments(res);
  }, [commentPage]);
  return (
    <div className="comments" data-aos="fade-left">
      {comments.map((item) => (
        <div
          className="item"
          key={item.id}
          style={{
            background: theme.state.darkMode ? "lightyellow" : "",
          }}
        >
          <div
            className="icon"
            style={{
              background: theme.state.darkMode
                ? "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 61%, rgba(252,176,69,1) 100%)"
                : "",
            }}
          >
            <i class="fa-solid fa-user"></i>
          </div>
          <div className="commentDesc">
            <p className="commentName">
              {item.id}. {item.name}
            </p>
            <p className="commentEmail">{item.email}</p>
            <p className="commentBody">{item.body}</p>
            <p className="comment">comments</p>
          </div>
        </div>
      ))}
      <div className="commentPagination">
        <span className="prev">
          <i class="fa-solid fa-angle-left"></i>
          <span className="prev1" onClick={onPrev}>
            prev
          </span>
        </span>
        <span className="next">
          <span className="next1" onClick={onNext}>
            next
          </span>
          <i class="fa-solid fa-angle-right"></i>
        </span>
      </div>
    </div>
  );
}
