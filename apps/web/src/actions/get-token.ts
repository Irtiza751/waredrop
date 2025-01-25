"use server";

import { cookies } from "next/headers";

export async function getToken() {
  const res = cookies().get("sessionid")?.value;
  return res;
}
