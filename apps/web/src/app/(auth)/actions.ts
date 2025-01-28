"use server";

import { waredropApi } from "@/api/waredrop.api";
import { Signin } from "./sign-in/page";
import { SigninResponse } from "./interfaces/utils";
import { cookies } from "next/headers";

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
};

export async function signin(creds: Signin) {
  const { data } = await waredropApi.post<SigninResponse>("/auth/login", creds);
  // saving session data in the cookies
  cookies().set("sessionid", data.accessToken, {
    ...cookieOptions,
    maxAge: 60 * 60 * 24,
  });
  cookies().set("refreshid", data.accessToken, {
    ...cookieOptions,
    maxAge: 60 * 60 * 24 * 7,
  });
  cookies().set("sub", String(data.user.id), {
    ...cookieOptions,
    maxAge: 60 * 60 * 24 * 7,
  });

  return data;
}
