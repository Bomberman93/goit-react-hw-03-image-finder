import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api";

const setParams = ({ q, page }) =>
  (axios.defaults.params = {
    q,
    page,
    key: "25286831 - c1746f19640ae946dcd0d7543",
    image_type: "photo",
    orientation: "horizontal",
    per_page: 12,
  });

export const getImages = (q = 'cat', page = 1) => {
  setParams({ q, page });
  return axios
    .get("/?")
    .then((res) => res.data.hits)
    .catch((err) => {
      throw err;
    });
};
