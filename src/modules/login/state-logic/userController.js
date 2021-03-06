import { useSelector, useDispatch } from "react-redux";
import userActionConstants from "./userConstants";
import { setAddNewUserStatus, setLoggedInUser } from "./userSlice";

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

  const setUserLoginData = (userData) => {
    dispatch(setLoggedInUser(userData));
  };

  const addNewUserStatus = useSelector((state) => state.user.addNewUserStatus);

  const loggedInUserData = useSelector((state) => state.user.loggedInUser);

  const isUserLoginLoading = useSelector(
    (state) => state.user.isUserLoginLoading
  );

  const isUserRegisterLoading = useSelector(
    (state) => state.user.isUserRegisterLoading
  );

  return {
    registerNewUser,
    makeUserlogin,
    loggedInUserData,
    addNewUserStatus,
    resetAddNewUserStatus,
    setUserLoginData,
    isUserLoginLoading,
    isUserRegisterLoading,
  };
};

export default UserController;
