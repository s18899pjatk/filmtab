import httpService from "./httpService";
import { apiEnpoint } from "../config.json";

const endpoint = apiEnpoint + "auth";

export function login(email, password) {
  return httpService.post(endpoint, {
    email,
    password,
  });
}
