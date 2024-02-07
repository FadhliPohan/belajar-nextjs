import { useQueries } from "@/hooks/useQueries";
import Cookies from "js-cookie";
import React, { createContext } from "react";

export const UserContect = createContext();

export function UserContextProvider({ children, ...props }) {
  const { data: userData } = useQueries({
    prefixUrl: "https://paace-f178cafcae7b.nevacloud.io/api/user/me",
    headers: {
      Authorization: `Bearer ${Cookies.get("user_token")}`,
    },
  });
  return (
    <UserContect.Provider value={userData?.data || null} {...props}>
      {children}
    </UserContect.Provider>
  );
}
