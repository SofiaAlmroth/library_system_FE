import axios from "axios";

interface UserLogin {
  email: string;
  password: string;
}

export function login(user: UserLogin) {
  return axios.post("http://localhost:5588/api/auth/", user);
}

export default {
  login,
};
