import { ADD_COMMENTS, EDIT_COMMENT, DELETE_COMMENT } from './actions'

export const commentReducers = (state = [], action) => {
  let otherComments;
  switch (action.type) {
    case ADD_COMMENTS:
      const newComments = action.comments.filter((comment) => {
              return state.filter((commentState) => (commentState.id === comment.id) ).length === 0
            });
      return [...state, ...newComments];
    case EDIT_COMMENT:
      otherComments = state.filter(comment => comment.id !== action.comment.id);
      return [...otherComments, action.comment];
    case DELETE_COMMENT:
      otherComments = state.filter(comment => comment.id !== action.comment.id);
      return otherComments;
    default:
      return state;
  }
}
