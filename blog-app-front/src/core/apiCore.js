import { API } from "../config";

export const getPosts = (order = "desc", sortBy = "createdAt", limit = "6") => {
  return fetch(`${API}/posts?order=${order}&sortBy=${sortBy}&limit=${limit}`, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
};

export const postBySlug = (slug) => {
  return fetch(`${API}/posts/${slug}`, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
};

export const getImages = (
  order = "desc",
  sortBy = "createdAt",
  limit = "6"
) => {
  return fetch(`${API}/images?order=${order}&sortBy=${sortBy}&limit=${limit}`, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log.log(err));
};
