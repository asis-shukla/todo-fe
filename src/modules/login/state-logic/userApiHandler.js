import axios from "axios";

const usersUrl = "https://todo-be.vercel.app/api/users";

export const addNewUser = async (payloadBody) => {
  try {
    const response = await axios.post(usersUrl, payloadBody);
    return response.data;
  } catch (error) {
    console.log("post api error is", error);
  }
};
