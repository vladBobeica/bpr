import React, { useState } from "react";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const updateCredentials = (newUsername, newPassword) => {
    setUsername(newUsername);
    setPassword(newPassword);
  };

  const value = {
    username,
    password,
    updateCredentials,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
