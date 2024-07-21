import axios from "axios";
import { UserRegister } from "@types";
import { auth } from "@services";

async function register(user: UserRegister) {
  const { headers } = await axios.post(
    "http://localhost:5588/api/users/",
    user
  );
  const token = headers["x-auth-token"];
  auth.loginWithJwt(token);
}

export default {
  register,
};
