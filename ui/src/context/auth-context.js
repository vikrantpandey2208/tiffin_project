import { createContext } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  userId: null,
  token: null,
  setUserId: () => {
    this.state.first = "X";
  },
  logout: () => {},
});
