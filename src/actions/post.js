const initPost = (posts) => {
  return {
    type: "INIT_POSTS",
    payload: posts,
  };
};

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
