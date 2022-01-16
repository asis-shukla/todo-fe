import { useSelector, useDispatch } from "react-redux";
import userActionConstants from "./userConstants";
import { setAddNewUserStatus } from "./userSlice";

const UserController = () => {
  const dispatch = useDispatch();

  const registerNewUser = (newUserData) => {
    dispatch({
      type: userActionConstants.REGISTER_NEW_USER,
      payload: newUserData,
    });
  };

  const makeUserlogin = (userData) => {
    dispatch({
      type: userActionConstants.GET_USER_LOGIN,
      payload: userData,
    });
  };

  const resetAddNewUserStatus = () => {
    dispatch(setAddNewUserStatus(null));
  };

  const addNewUserStatus = useSelector((state) => state.user.addNewUserStatus);

  const loggedInUserData = useSelector((state) => state.user.loggedInUser);

  return {
    registerNewUser,
    makeUserlogin,
    loggedInUserData,
    addNewUserStatus,
    resetAddNewUserStatus,
  };
};

export default UserController;
