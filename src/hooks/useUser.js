import { useEffect, useState } from "react";
import { auth } from "../firebase.config";

export const useUser = () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    return auth.onAuthStateChanged(setToken);
  }, []);

  useEffect(() => {
    if (token === null) {
      setUser(null);
      return;
    }
    setUser(auth.currentUser);
  }, [token]);

  return user;
};
