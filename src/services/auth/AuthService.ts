import { API_BASE_URL } from "@/utils/constants";
import type { RegisterDto, VerifyDto } from "./AuthService.type";

export default class AuthService {
  async register(body: RegisterDto) {
    return fetch(`${API_BASE_URL}/register`, {
      body: JSON.stringify(body),
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  }

  async verify(body: VerifyDto) {
    return fetch(`${API_BASE_URL}/verify`, {
      body: JSON.stringify(body),
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  }
}
