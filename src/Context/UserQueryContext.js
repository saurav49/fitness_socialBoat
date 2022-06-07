import { createContext, useState } from "react";

export const UserQueryContext = createContext();

export const UserQueryProvider = ({ children }) => {
  const [textQuery, setTextQuery] = useState("");
  const [numQuery, setNumQuery] = useState("");
  const [tags, setTags] = useState("");

  return (
    <UserQueryContext.Provider
      value={{ textQuery, setTextQuery, numQuery, setNumQuery, tags, setTags }}
    >
      {children}
    </UserQueryContext.Provider>
  );
};
