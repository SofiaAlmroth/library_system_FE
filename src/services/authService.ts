import axios from "axios";
import { User, UserLogin } from "@types";
import { jwtDecode } from "jwt-decode";
import { BASE_URL } from "@constants";

const API_BASEURL = `${BASE_URL}/api/auth/`;
const TOKEN_KEY = "token";

async function login(user: UserLogin) {
  try {
    const { data: token } = await axios.post(API_BASEURL, user);
    localStorage.setItem(TOKEN_KEY, token);
  } catch (error: any) {
    console.error("Login failed:", error);
    throw error; // eller hantera det snyggare i din komponent
  }
}

function loginWithJwt(token: string) {
  localStorage.setItem(TOKEN_KEY, token);
}

function logout() {
  localStorage.removeItem(TOKEN_KEY);
}

function getCurrentUser() {
  const token = localStorage.getItem(TOKEN_KEY);

  if (!token) return null;

  try {
    const user = jwtDecode<User>(token);

    return user;
  } catch (error) {
    localStorage.removeItem(TOKEN_KEY);
    return null;
  }
}

export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
};
