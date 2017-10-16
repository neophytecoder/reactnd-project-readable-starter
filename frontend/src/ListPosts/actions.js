export const SET_POSTS = "SET_POSTS";
export const SORT_POSTS = "SORT_POSTS";

export const SORT_POST_BY_VOTE = "SORT_POST_BY_VOTE";
export const SORT_POST_BY_TIME = "SORT_POST_BY_TIME";

export const setPosts = (posts = []) => ({
    type: SET_POSTS,
    posts,
})

export const sortPosts = ({sortBy=SORT_POST_BY_VOTE}) => ({
    type: SORT_POSTS,
    sortBy,
})
