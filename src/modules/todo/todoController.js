import { useSelector, useDispatch } from "react-redux";
import { todoActionConstansts } from "./todoActionConstansts";

export const TodoController = () => {
  const dispatch = useDispatch();

  const fetchAllTodos = () => {
    dispatch({
      type: todoActionConstansts.TODO_FETCH_REQUESTED,
    });
  };

  const todoList = useSelector((state) => state.todo.todoList);

  const addNewTodo = (payload) => {
    dispatch({
      type: todoActionConstansts.ADD_NEW_TODO,
      payload: payload,
    });
  };

  const deleteAllTodos = () => {
    dispatch({
      type: todoActionConstansts.DELETE_ALL_TODOS,
    });
  };

  return {
    fetchAllTodos,
    todoList,
    addNewTodo,
    deleteAllTodos,
  };
};
