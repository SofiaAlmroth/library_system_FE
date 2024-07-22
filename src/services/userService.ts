import axios from "axios";
import { UserRegister } from "@types";
import { auth } from "@services";
import { BASE_URL } from "@constants";

const API_BASEURL = `${BASE_URL}/api/users/`;

async function register(user: UserRegister) {
  const { headers, data } = await axios.post(API_BASEURL, user);
  const token = headers["x-auth-token"];
  auth.loginWithJwt(token);
  return data;
}

export default {
  register,
};
