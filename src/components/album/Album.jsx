import "./album.scss";
import axios from "axios";
import { useState, useEffect } from "react";
export default function Album() {
  const [albums, setAlbums] = useState([]);
  const [albumData, setAlbumData] = useState([]);
  const [albumPage, setAlbumPage] = useState(1);
  function filter(albumPage) {
    return albumData.filter(
      (item, index) => index >= (albumPage - 1) * 10 && index < albumPage * 10
    );
  }
  function getAlbums() {
    axios.get("https://jsonplaceholder.typicode.com/albums").then((res) => {
      setAlbums(res.data.filter((item, index) => index >= 0 && index < 10));
      setAlbumData(res.data);
    });
  }
  useEffect(() => {
    getAlbums();
  }, []);
  function onNext() {
    if (albumPage < 10) {
      setAlbumPage((prevState) => prevState + 1);
    } else {
      setAlbumPage(albumPage);
    }
  }
  function onPrev() {
    if (albumPage > 1) {
      setAlbumPage((prevState) => prevState - 1);
    } else {
      setAlbumPage(albumPage);
    }
  }
  useEffect(() => {
    const res = filter(albumPage);
    setAlbums(res);
  }, [albumPage]);
  return (
    <div className="album" data-aos="zoom-in-up">
      <p className="AlbumTitle">Albums</p>
      <table className="table table-bordered mt-4 albumTable">
        <thead>
          <tr>
            <th>UserId</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {albums.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="albumPagination">
        <button className="albumBtn" onClick={onPrev}>
          Prev
        </button>
        <p className="albumpage">{albumPage}</p>
        <button className="albumBtn" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
}
