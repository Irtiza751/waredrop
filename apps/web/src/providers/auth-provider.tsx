"use client";
import { getToken } from "@/actions/get-token";
import { waredropApi } from "@/api/waredrop.api";
import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect } from "react";

const AuthContext = React.createContext<string>("");

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { data: token } = useQuery({
    queryKey: ["get-token"],
    queryFn: () => getToken(),
  });

  useEffect(() => {
    if (token) {
      waredropApi.defaults.headers.Authorization = `Bearer ${token}`;
    }
  }, [token]);

  return (
    <AuthContext.Provider value={token ?? ""}>{children}</AuthContext.Provider>
  );
}

export function useAuthToken() {
  const token = useContext(AuthContext);
  return token;
}
