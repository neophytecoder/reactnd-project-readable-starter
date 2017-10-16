import {SET_CATEGORIES} from "./actions";

export const categoryReducers = (state = [], action) => {
  switch (action.type) {
    case SET_CATEGORIES:
        return action.categories;
    default:
      return state;
  }
};
