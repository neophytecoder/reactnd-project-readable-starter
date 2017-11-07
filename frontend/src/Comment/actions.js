import * as ForumAPI from '../utils/ForumAPI'

export const ADD_COMMENTS = "ADD_COMMENT";
export const EDIT_COMMENT = "EDIT_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";

export const addComments = (comments = []) => ({
  type: ADD_COMMENTS,
  comments
})

export const editComment = comment => ({
  type: EDIT_COMMENT,
  comment
})

export const deleteComment = comment => ({
  type: DELETE_COMMENT,
  comment
})

export const deleteCommentAsync = (comment) => (dispatch) => {
  ForumAPI.deleteComment(comment.id)
    .then((comment) => {
      console.log(comment);
      dispatch(deleteComment(comment));
    });
}

export const findCommentsAsync = (postId) => (dispatch) => {
  ForumAPI.getAllComments(postId)
    .then((comments) => {
      console.log(comments);
      dispatch(addComments(comments));
    });
}

const voteCommentAsync = (commentId, option) => dispatch => {
  console.log("voteCommentAsync", option, commentId);
  ForumAPI.voteComment(commentId, option)
    .then(comment => {
      console.log("voteCommentAsync", option, comment);
      dispatch(editComment(comment));
      return comment;
    });
}

export const upvoteCommentAsync = commentId => dispatch => {
  voteCommentAsync(commentId, "upVote")(dispatch);
}

export const downvoteCommentAsync = commentId => dispatch => {
  voteCommentAsync(commentId, "downVote")(dispatch);
}
