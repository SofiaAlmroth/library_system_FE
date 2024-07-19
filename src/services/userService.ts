import axios from "axios";

interface User {
  name: string;
  email: string;
  password: string;
}

function register(user: User) {
  return axios.post("http://localhost:5588/api/users/", user);
}

export default {
  register,
};
