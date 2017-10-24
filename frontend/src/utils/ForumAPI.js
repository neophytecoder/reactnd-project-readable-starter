const api="http://localhost:3001";

let token = localStorage.token;
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  'Accept': 'application/json',
  'Authorization': token,
  'content-type': 'application/json'
};

export const getAllCategories = () => {
  return fetch(`${api}/categories`, {headers})
    .then(res => res.json())
    .then(data => data["categories"])
};

export const getAllPosts = () => {
  return fetch(`${api}/posts`, {headers})
    .then(res => res.json())
};

export const getAllPostsWithCategory = (category) => {
  return fetch(`${api}/${category}/posts`, {headers})
    .then(res => res.json())
};

export const getPost = (id) => {
  return fetch(`${api}/posts/${id}`, {headers})
    .then(res => res.json())
};

export const getAllComments = (id) => {
  return fetch(`${api}/posts/${id}/comments`, {headers})
    .then(res => res.json())
};

export const post = (post) => {
  const body = JSON.stringify(post);
  return fetch(`${api}/posts`, {
        method:"POST",
        headers,
        body
      })
      .then(res => res.json());
}

export const vote = (post, option) => {
  const body = JSON.stringify({option});
  return fetch(`${api}/posts/${post.id}`, {
        method:"POST",
        headers,
        body})
    .then(res => res.json());
}

export const editPost = (post) => {
  const body = JSON.stringify(post);
  return fetch(`${api}/posts`, {
        method:"PUT",
        headers,
        body
      });
}
