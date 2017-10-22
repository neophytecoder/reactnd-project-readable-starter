import * as ForumAPI from '../utils/ForumAPI'

export const ADD_POST = "ADD_POST";
export const EDIT_POST = "EDIT_POST";
export const DELETE_POST = "DELETE_POST";

export const addPost = (post) => ({
  type: ADD_POST,
  post
})

export const editPost = (post) => ({
  type: EDIT_POST,
  post
})

export const deletePost = (post) => ({
  type: DELETE_POST,
  post
})

export const votePost = (post, option) => {
  return (dispatch) => {
    ForumAPI.vote(post, option)
      .then(post => {
        console.log("votePost", post);
        dispatch(editPost(post));
      })
  }
}
