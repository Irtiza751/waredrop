"use client";
import { waredropApi } from "@/api/waredrop.api";
import { User } from "@/interfaces/utils";
import useAuthStore from "@/store/auth-store";
import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect } from "react";
import { useAuthToken } from "./auth-provider";
import { clearSession } from "@/actions/clear-session";

const UserContext = React.createContext<User | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const token = useAuthToken();
  const setUserInGlobalStore = useAuthStore((store) => store.setUser);

  const { data: user, isError } = useQuery({
    queryKey: ["get-user"],
    queryFn: () => waredropApi.get<User>("/auth/me"),
    enabled: !!token, // if token is null or undefined don't fetch.
  });

  useEffect(() => {
    if (isError) {
      clearSession();
    }
  }, [isError]);

  useEffect(() => {
    if (user) {
      setUserInGlobalStore(user?.data);
    }
  }, [user, setUserInGlobalStore]);

  return (
    <UserContext.Provider value={user?.data}>{children}</UserContext.Provider>
  );
}

export function useUser() {
  const token = useContext(UserContext);
  return token;
}
