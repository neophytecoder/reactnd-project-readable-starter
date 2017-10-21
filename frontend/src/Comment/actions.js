export const ADD_COMMENTS = "ADD_COMMENT";

export const addComments = (comments = []) => ({
  type: ADD_COMMENTS,
  comments
})
