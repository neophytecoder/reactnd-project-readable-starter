import * as ForumAPI from '../utils/ForumAPI'

export const ADD_COMMENTS = "ADD_COMMENT";

export const addComments = (comments = []) => ({
  type: ADD_COMMENTS,
  comments
})

export const findCommentsAsync = (postId) => (dispatch) => {
  ForumAPI.getAllComments(postId)
    .then((comments) => {
      console.log(comments);
      dispatch(addComments(comments));
    });
}
