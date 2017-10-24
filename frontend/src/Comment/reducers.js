import { ADD_COMMENTS } from './actions'

export const commentReducers = (state = [], action) => {
  switch (action.type) {
    case ADD_COMMENTS:
      const newComments = action.comments.filter((comment) => {
              return state.filter((commentState) => (commentState.id === comment.id) ).length === 0
            });
      return [...state, ...newComments];
    default:
      return state;
  }
}
