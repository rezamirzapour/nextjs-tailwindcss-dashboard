import { cookies } from "next/headers";
import { NextRequest } from "next/server";
import { ECookies, EHeaders } from "@/utils/constants";

export function POST(request: NextRequest) {
  const token = request.headers.get(EHeaders.AUTHORIZATION);
  if (token) {
    cookies().set(ECookies.ACCESS_TOKEN, token);
  }
  return Response.json({
    message: "توکن با موفقیت در کوکی ذخیره شد",
  });
}
