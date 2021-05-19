const initState = {
  posts: [],
  loading: true,
  error: null,
};

const postReducer = (state = initState, action) => {
  console.log({ action });
  switch (action.type) {
    case "INIT_POSTS":
      let initPosts = action.payload;
      state.posts = [...initPosts];
      return { ...state };
    case "LOADING":
      return { ...state, loading: false };
    case "ERROR":
      return { ...state, error: true };
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
