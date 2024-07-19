import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./routes";
import "./App.css";
import "react-toastify/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer
      theme="colored"
      toastStyle={{ backgroundColor: "darkred" }}
    />
  </React.StrictMode>
);
