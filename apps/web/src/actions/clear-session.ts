"use server";
import { cookies } from "next/headers";

export async function clearSession() {
  cookies().delete("sessionid");
  cookies().delete("refreshid");
  cookies().delete("sub");
}
