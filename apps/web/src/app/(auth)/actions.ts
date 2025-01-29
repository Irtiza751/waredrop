"use server";

import { waredropApi } from "@/api/waredrop.api";
import { Signin } from "./sign-in/page";
import { SigninResponse } from "./interfaces/utils";
import { cookies } from "next/headers";

export async function signin(creds: Signin) {
  const { data } = await waredropApi.post<SigninResponse>("/auth/login", creds);
  // saving session data in the cookies
  cookies().set("sessionid", data.accessToken);
  cookies().set("refreshid", data.accessToken);
  cookies().set("sub", String(data.user.id));

  return data;
}
