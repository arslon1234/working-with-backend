import "./photo.scss";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Photo() {
  const [photo, setPhoto] = useState([]);
  const [photoData, setPhotoData] = useState([]);
  function getPhoto() {
    axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {
      setPhoto(res.data.filter((item, index) => index >= 0 && index < 20));
      setPhotoData(res.data);
    });
  }
  useEffect(() => {
    getPhoto();
  }, []);
  return (
    <div className="photo" data-aos="fade-down-left">
      {photo.map((item) => (
        <div className="photoItem" key={item.id}>
          <div className="imgContainer">
            <img src={item.thumbnailUrl} alt="" />
          </div>
          <div className="photoTitle">
            <p>{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
