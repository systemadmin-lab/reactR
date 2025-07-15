import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./Contact.jsx";
import ErrorPage from "./Error.jsx";
import "./index.css";
import Root from "./Root.jsx";
import { getContactLoader } from "./loaders/contactsLoader.js";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader:getContactLoader,
    children: [
      {
        path: "/contacts/:contacId",
        element: <Contact />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
