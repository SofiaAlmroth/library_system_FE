import axios from "axios";
import { UserLogin } from "../types";

const API_BASEURL = "http://localhost:5588/api/auth/";

export function login(user: UserLogin) {
  return axios.post(API_BASEURL, user);
}

export default {
  login,
};
