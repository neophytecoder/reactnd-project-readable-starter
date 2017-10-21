import { ADD_POST, EDIT_POST, DELETE_POST } from './actions'
import { POSTS } from "../stateConstants"
import * as Utils from "../utils"

export const postReducers = (state = [], action) => {

  switch (action.type) {
    case ADD_POST:
      const filteredSimilarPost = state.filter((post) => post.id === action.post.id);
      if (filteredSimilarPost.length !== 0) {
        return state;
      }
      return [...state, action.post];
    case EDIT_POST:
      const filteredDifferentPost = state.filter((post) => post.id !== action.post.id);
      return [...filteredDifferentPost, action.post];
    case DELETE_POST:
      return [ ...state, {...action.post, id: Utils.makeUniqueId(20)} ];
    default:
      return state;
  }
}
