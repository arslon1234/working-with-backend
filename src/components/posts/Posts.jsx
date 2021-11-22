import "./posts.scss";
import axios from "axios";
import { useState, useEffect } from "react";
export default function Posts() {
  const [post, setPost] = useState([]);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  function filter(page) {
    return data.filter(
      (item, index) => index >= (page - 1) * 10 && index < page * 10
    );
  }
  function getPost() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setPost(res.data.filter((item, index) => index >= 0 && index < 10));
      setData(res.data);
    });
  }
  useEffect(() => {
    getPost();
  }, []);

  function onPrev() {
    if (page > 1) {
      setPage((prevState) => prevState - 1);
    } else {
      setPage(page);
    }
  }
  function onNext() {
    if (page < 10) {
      setPage((prevState) => prevState + 1);
    } else {
      setPage(page);
    }
  }
  useEffect(() => {
    const res = filter(page);
    setPost(res);
  }, [page]);
  return (
    <div className="posts" data-aos="fade-down">
      <p className="postTitle">Posts</p>
      <table className="table table-hover table-bordered postTable">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {post.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button className="paginationBtn" onClick={onPrev}>
          Prev
        </button>
        <p className="postPage">{page}</p>
        <button className="paginationBtn" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
}

//     const [todo, setTodo] = useState([ ])
//     const [data, setData] = useState([ ])
//     const [completed, setCompleted] = useState(false)
//     const [isFiltering, setIsFiltering] = useState(false)
//     const [currentUser, setCurrentUser] = useState(' ')
//     const [page, setPage] = useState(1)
//     function filter(userId, completed, page){
//         return data.filter((item, index)=> (item.userId==userId || !userId)
//          && (item.completed === completed || !isFiltering)
//          ).filter((item, index)=> index>=(page-1)*10 && index < page*10)
//     }
//     async function AddTodo(){
//         const b = await doGet('/todos')
//         setTodo(b.filter((item,index)=> index>=0 && index<10 ))
//         setData(b)
//     }

//     function onchangeUserSelect(userId){
//         const res = filter(userId, completed, page)
//         setTodo(res)
//         setCurrentUser(userId)
//     }
//     useEffect(() => {
//      AddTodo()
//     }, [ ])
//     function handleCheck(e){
//         let checked = e.target.checked
//         const res = filter(currentUser, checked, page)
//         setTodo(res)
//         setCompleted(checked)
//         setIsFiltering(true)
//         // const arr = data.filter(item=> item.completed === checked)
//         // setTodo(arr)
//     }
//     function reset(){
//         setTodo(data)
//         setCurrentUser(' ')
//         setCompleted(false)
//         setIsFiltering(false)
//     }
//     function onNext(){
//         setPage(prevState=>prevState+1)
//     }
//     function onPrev(){
//         setPage(prevState=>prevState-1)
//     }
//     useEffect(() => {
//       const res = filter(currentUser, page, completed)
//       setTodo(res)
//     }, [page])
//     return <div className={'container'}>
//     <div className="row">
//     <div className="col-md-1">
//             <button className={'btn btn-danger btn-block'} onClick={reset}>reset</button>
//         </div>
//         <div className="col-md-3">
//        <SelectUser onchangeUser={onchangeUserSelect}/>
//         </div>
//         <div className="col-md-3">
//             <label>
//                     Completed
//                 <input type="checkbox" className={'m-2'} onChange={handleCheck} style={checkboxStyle} defaultChecked
//                 ={completed} />
//             </label>
//         </div>

//     </div>
//     <br />
//     <br />
//     <br />
//         {
//             todo.map((item,index)=> <TodoAdd
//             key={index}
//             item={item}

//             />)
//         }
//         <div className="row">
//             <div className="col-md-2">
//                 <button className={'btn btn-dark my-4'} onClick={onPrev}> {'<<'} prev</button>
//             </div>
//             <div className="col-md-2">
//                 <h1 className={'mt-3'}>{page}</h1>
//             </div>
//             <div className="col-md-2">
//                 <button className={'btn btn-dark my-4'} onClick={onNext}>next {'>>'}</button>
//             </div>

//         </div>
//     </div>
// }
// export default Todos
