import api, { API_KEY } from "./axios_api";

const SIGN_UP_ENDPOINT = "accounts:signUp";
const LOGIN_ENDPOINT = "accounts:signInWithPassword";

async function authenticate(mode, email, password) {
  const response = await api.post(mode + API_KEY, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  return response.data.idToken;
}

export async function createUser(email, password) {
  return await authenticate(SIGN_UP_ENDPOINT, email, password);
}

export async function login(email, password) {
  return await authenticate(LOGIN_ENDPOINT, email, password);
}
