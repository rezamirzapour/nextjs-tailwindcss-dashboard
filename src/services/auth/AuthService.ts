import { API_BASE_URL, EHeaders } from "@/utils/constants";
import type { SignupDto, VerifyDto } from "./AuthService.type";

export default class AuthService {
  async signup(body: SignupDto) {
    return fetch(`${API_BASE_URL}/auth/signup`, {
      body: JSON.stringify(body),
      method: "POST",
      headers: {
        [EHeaders.ACCEPT]: "application/json",
        [EHeaders.CONTENT_TYPE]: "application/json",
      },
    }).then((res) => res.json());
  }

  async signin(body: SignupDto) {
    return fetch(`${API_BASE_URL}/auth/signin/${body.phone}`, {
      method: "GET",
      headers: {
        [EHeaders.ACCEPT]: "application/json",
        [EHeaders.CONTENT_TYPE]: "application/json",
      },
    }).then((res) => res.json());
  }

  async verify(body: VerifyDto) {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/verify`, {
        body: JSON.stringify(body),
        method: "POST",
        headers: {
          [EHeaders.ACCEPT]: "application/json",
          [EHeaders.CONTENT_TYPE]: "application/json",
        },
      });
      if (response.status >= 200 && response.status < 400) {
        const result = await response.json();
        return result;
      }
      throw new Error(result);
    } catch (error) {
      throw error;
    }
  }

  async setCookie(token: string) {
    return fetch(`/api/auth`, {
      method: "POST",
      headers: {
        [EHeaders.ACCEPT]: "application/json",
        [EHeaders.AUTHORIZATION]: token,
      },
    }).then((res) => res.json());
  }
}
