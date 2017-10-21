import { ADD_COMMENTS } from './actions'
import { COMMENTS } from '../stateConstants'

export const commentReducers = (state = [], action) => {
  switch (action.type) {
    case ADD_COMMENTS:
      return {
        ...state,
        [COMMENTS]: state[COMMENTS].concat(action.comments.filter((comment) => {
          state[COMMENTS].filter((commentState) => (commentState.id === comment.id) ).length === 0
        }))
      }
    default:
      return state;
  }
}
