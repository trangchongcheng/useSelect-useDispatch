import { act } from "react-dom/test-utils";

const initState = {
  posts: [],
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case "INIT_POSTS":
      let initPosts = action.payload;
      state.posts = [...initPosts];
      return { ...state };
    case "ADD_POST":
      let post = action.payload;
      let postsClone = [...state.posts, post];
      return { ...state, posts: postsClone };
    case "UPDATE_POST":
      break;
    case "DELETE_POST":
      return {
        ...state,
        posts: state.posts.filter((item) => {
          return item.id !== action.payload;
        }),
      };
    default:
      return state;
  }
};

export { postReducer };
