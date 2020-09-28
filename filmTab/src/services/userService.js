import httpService from "./httpService";
import { apiEnpoint } from "../config.json";

const endpoint = apiEnpoint + "users";

export function register(user) {
  return httpService.post(endpoint, {
    email: user.username,
    password: user.password,
    name: user.name,
  });
}
