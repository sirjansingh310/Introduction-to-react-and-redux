const initState = {
  posts: []
}
const rootReducer = (state = initState,action) => {
  if(action.type === 'FILL_INIT'){
     return{
       ...state,
       posts: action.posts
     }
  }
  if(action.type === 'DELETE_POST'){
    let newPosts = state.posts.filter(post => post.id !== action.id)
  return {
    ...state,
    posts: newPosts
  }
  }
  return state;
}
export default rootReducer;
