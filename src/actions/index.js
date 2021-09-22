import { types } from "./types";
import axios from "axios";

export const fetchPosts = () => async (dispatch) => {
  await axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((resp) => {
      console.log(resp);
      dispatch({
        type: types.GET_POSTS,
        payload: resp.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
