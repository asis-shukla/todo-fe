import axios from "axios";

export function fetchToDoData() {
  return axios
    .get("https://todo-be.vercel.app/api/todos")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
}
