import httpService from "./httpService";
import { apiEnpoint } from "../config.json";

export function getGenres() {
  return httpService.get(apiEnpoint + "genres");
}
