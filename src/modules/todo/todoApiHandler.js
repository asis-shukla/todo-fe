import axios from "axios";

const todoUrl = "https://todo-be.vercel.app/api/todos";

export function fetchToDoData() {
  return axios
    .get(todoUrl)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
}

export function addToDoData(payloadBody) {
  return axios
    .post(todoUrl, payloadBody)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
}

export function deleteAllToDos(params) {
  return axios
    .delete(todoUrl)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
}

export function updateTodoCall(payloadBody, id) {
  return axios
    .put(`${todoUrl}/${id}`, payloadBody)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
}
