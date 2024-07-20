import axios from "axios";

interface UserRegister {
  name: string;
  email: string;
  password: string;
}

function register(user: UserRegister) {
  return axios.post("http://localhost:5588/api/users/", user);
}

export default {
  register,
};
