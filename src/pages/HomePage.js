import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addPost, deletePost, initPost } from "../actions/post";

const HomePage = () => {
  const posts = useSelector((state) => state.post.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((res) => {
        dispatch(initPost(res.data));
      });
  }, []);

  const renderPost = () => {
    return posts.map((item) => {
      return (
        <tr key={item.id}>
          <th>{item.id}</th>
          <td>{item.title}</td>
          <td>{item.body}</td>
          <td className="p-5">
              <div className="row">
                  <button className="btn btn-primary mb-2" onClick={()=>delPost(item.id)}>Delete</button>
                  <button className="btn btn-warning">Edit</button>
              </div>
          </td>
        </tr>
      );
    });
  };
  const random = ()=>{
      return Math.round(Math.random()*10000);
  }
  const add = () => {
      let id = random();
      let newPost = {
          id,
          title:"Title" + id,
          body: "Body" + id

      }
      dispatch(addPost(newPost))
  };
  const delPost = (id)=>{
    dispatch(deletePost(id));
  }
  return (
    <>
      <button className="btn btn-primary mb-2" onClick={add}>
        Add new
      </button>
      <table className="table table-bordered border-primary">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>{renderPost()}</tbody>
      </table>
    </>
  );
};

export default HomePage;
