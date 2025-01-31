"use client";
import { getToken } from "@/actions/get-token";
import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";

const AuthContext = React.createContext<string>("");

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { data: token } = useQuery({
    queryKey: ["get-token"],
    queryFn: () => getToken(),
  });
  return (
    <AuthContext.Provider value={token ?? ""}>{children}</AuthContext.Provider>
  );
}

export function useAuthToken() {
  const token = useContext(AuthContext);
  return token;
}
