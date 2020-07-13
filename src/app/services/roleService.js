import axios from "axios";

export function getRoles() {
  return axios("http://127.0.0.1:8080/api/roles");
}
