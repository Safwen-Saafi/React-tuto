// Import necessary dependencies
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import { LoginForm } from "../src/Components/Conditional Rendering/LoginForm.jsx";
import LocationComponent from "./Components/Use Navigate & Use Location/UseLocation.jsx";

// Create router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/form",
        element: <LoginForm />,
      },
    ],
  },
  {
    path: "/location",
    element: <LocationComponent />,
  },
]);

// The actual rendering process with routing:
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
