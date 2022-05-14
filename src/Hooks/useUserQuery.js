import { useContext } from "react";
import { UserQueryContext } from "../Context/UserQueryContext";

export const useUserQuery = () => useContext(UserQueryContext);
