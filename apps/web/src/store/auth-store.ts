import { User } from "@/app/(auth)/interfaces/utils";
import { create } from "zustand";

interface AuthStore {
  user: User | null;
  setUser: (user: User) => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));

export default useAuthStore;
