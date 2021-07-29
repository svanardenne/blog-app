import { API } from "../../config";

export const fetchQuote = () => {
  return fetch("https://api.quotable.io/random", { method: "GET" })
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
};
