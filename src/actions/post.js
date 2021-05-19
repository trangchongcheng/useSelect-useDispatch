import axiosClient from "../api/axiosClient";
import axios from "axios";

const initPost = () => async (dispatch, getState) => {
  dispatch({
    type: "LOADING",
  });
  try {
    let res = await axios.get("https://jsonplaceholder.typicode.com/posts", {
      _limit: 10,
    });
    dispatch({
      type: "INIT_POSTS",
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: "ERROR",
      error
    });
  }
};

// const initPost = () => {
//   return async (dispatch, getState) => {
//     let res= await axios.get("https://jsonplaceholder.typicode.com/posts", { _limit: 10 });
//     console.log(res.data);
//     dispatch({
//       type: "INIT_POSTS",
//       payload: res.data,
//     });
//   };
// };

// const initPost = async () => {
//   let {data} = await  axiosClient.get('/post',{ _limit: 10 })
//   return {
//     type: "INIT_POSTS",
//     payload: data,
//   };
// };

const addPost = (post) => {
  return {
    type: "ADD_POST",
    payload: post,
  };
};
const updatePost = (post) => {
  return {
    type: "UPDATE_POST",
    payload: post,
  };
};
const deletePost = (id) => {
  return {
    type: "DELETE_POST",
    payload: id,
  };
};

export { initPost, addPost, updatePost, deletePost };
