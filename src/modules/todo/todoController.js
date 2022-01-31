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

  const isTodoListLoading = useSelector(
    (state) => state.todo.isTodoListLoading
  );

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

  const updateSingleTodo = (payload, id) => {
    dispatch({
      type: todoActionConstansts.UPDATE_SINGLE_TODO,
      payload: payload,
      id: id,
    });
  };

  const deleteOneTodo = (id) => {
    dispatch({
      type: todoActionConstansts.DELETE_ONE_TODO,
      id: id,
    });
  };

  return {
    fetchAllTodos,
    todoList,
    addNewTodo,
    deleteAllTodos,
    updateSingleTodo,
    isTodoListLoading,
    deleteOneTodo,
  };
};
