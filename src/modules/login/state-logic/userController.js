import { useSelector, useDispatch } from "react-redux";
import userActionConstants from "./userConstants";

const UserController = () => {
  const dispatch = useDispatch();

  const registerNewUser = (newUserData) => {
    dispatch({
      type: userActionConstants.REGISTER_NEW_USER,
      payload: newUserData,
    });
  };

  const loggedInUserData = useSelector((state) => state.user.loggedInUser);

  return {
    registerNewUser,
    loggedInUserData,
  };
};

export default UserController;
