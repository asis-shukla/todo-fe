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

  const resetAddNewUserStatus = () => {
    dispatch(setAddNewUserStatus(null));
  };
  
  const addNewUserStatus = useSelector((state) => state.user.addNewUserStatus);

  const loggedInUserData = useSelector((state) => state.user.loggedInUser);

  return {
    registerNewUser,
    loggedInUserData,
    addNewUserStatus,
    resetAddNewUserStatus,
  };
};

export default UserController;
