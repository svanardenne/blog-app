import { API } from "../../config";

// gets post data based on order, sort, and limit
export const getPosts = (order = "desc", sortBy = "createdAt", limit = "6") => {
  return fetch(`${API}/posts?order=${order}&sortBy=${sortBy}&limit=${limit}`, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
};

// fetches post by slug
export const postBySlug = (slug) => {
  return fetch(`${API}/posts/${slug}`, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
};

// gets images and caption data for the doodles component
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
