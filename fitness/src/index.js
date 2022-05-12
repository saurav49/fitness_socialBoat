import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UserQueryProvider } from "./Context/UserQueryContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserQueryProvider>
      <App />
    </UserQueryProvider>
  </React.StrictMode>
);
