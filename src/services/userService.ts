import axios from "axios";
import { UserRegister } from "../types";

function register(user: UserRegister) {
  return axios.post("http://localhost:5588/api/users/", user);
}

export default {
  register,
};
