import { createContext, useState } from "react";

export const UserQueryContext = createContext();

export const UserQueryProvider = ({ children }) => {
  const [textQuery, setTextQuery] = useState("");
  const [numQuery, setNumQuery] = useState(0);

  return (
    <UserQueryContext.Provider
      value={{ textQuery, setTextQuery, numQuery, setNumQuery }}
    >
      {children}
    </UserQueryContext.Provider>
  );
};
