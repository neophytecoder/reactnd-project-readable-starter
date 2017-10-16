import { SET_POSTS, SORT_POSTS, SORT_POST_BY_VOTE,
  SORT_POST_BY_TIME } from './actions';
import { POSTS } from "../stateConstants";

export const postReducers = (state = [], action) => {
  switch (action.type) {
    case SET_POSTS:
      return action.posts.sort((post1, post2) => post2.voteScore - post1.voteScore);
    case SORT_POSTS:
      switch (action.sortBy) {
        case SORT_POST_BY_VOTE:
          return state[POSTS].sort((post1, post2) => post2.voteScore - post1.voteScore);
        case SORT_POST_BY_TIME:
          return state[POSTS].sort((post1, post2) => post2.timestamp - post1.timestamp);
        default:
          return state;
      }
    default:
      return state;
  }
}
