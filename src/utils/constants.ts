export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

export enum ECookies {
  ACCESS_TOKEN = "Access-Token",
}

export enum EHeaders {
  ACCEPT = "Accept",
  AUTHORIZATION = "Authorization",
  CONTENT_TYPE = "Content-Type",
}
