import axios from "axios";

const usersUrl = "https://todo-be.vercel.app/api/users";

function setAccessToken(access_token){
  localStorage.setItem("access-token", access_token);
  axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`
}

export const addNewUser = async (payloadBody) => {
  try {
    const response = await axios.post(usersUrl, payloadBody);
    const access_token = response.data.token;
    setAccessToken(access_token);
    return response.data;
  } catch (error) {
    console.log("Add New User error", error);
    return error.response.data;
  }
};

export async function  loginUser(payloadBody) {
  try {
    const response = await axios.post(`${usersUrl}/login`, payloadBody);
    const access_token = response.data.token;
    setAccessToken(access_token);
    return response.data;
  } catch (error) {
    console.log("Login User error", error);
    return error.response.data;
  }

};
