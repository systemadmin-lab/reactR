import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./Contact.jsx";
import ErrorPage from "./Error.jsx";
import "./index.css";
import Root from "./Root.jsx";
import { getContactLoader, getContactsLoader } from "./loaders/contactsLoader.js";
import { createContactAction, deleteContactAction, editContactAction } from "./actions/contactsActions.js";
import EditContact from "./EditContact.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader:getContactLoader,
    action:createContactAction,
    children: [
      {
        path: "/contacts/:contacId",
        element: <Contact />,
        loader:getContactsLoader,
      },
       {
        path: "/contacts/:contacId/edit",
        element: <EditContact/>,
        loader:getContactsLoader,
        action:editContactAction,
      },
       {
        path: "/contacts/:contacId/destroy",
        action:deleteContactAction,
        errorElement:<>ops there was an error joy Bangla</>
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
