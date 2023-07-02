import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Outlet, RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import { AnimatePresence } from "framer-motion";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <AnimatePresence exitBeforeEnter>
        <Outlet />
      </AnimatePresence>
    </RouterProvider>
  </React.StrictMode>
);
