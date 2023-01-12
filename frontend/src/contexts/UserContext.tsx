// Packages
import React, { createContext, useState, useEffect } from "react";

// Types
import { UserType } from "../types/UserType";

export const UserContext = createContext<{
  user: UserType | null;
  setUser: React.Dispatch<React.SetStateAction<UserType | null>> | any;
}>({ user: null, setUser: null });

interface ProviderProps {
  children: React.ReactNode;
}
export const UserProvider: React.FC<ProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    const userData = sessionStorage.getItem("userData");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
