import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import RootLayout from "../layouts/RootLayout/RootLayout";
import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";
import NotFound from "../pages/NotFound";
import RootErrorPage from "../pages/RootErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <RootErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "about",
            element: <About />,
          },

          {
            path: "*",
            element: <NotFound />,
          },
        ],
      },
    ],
  },
]);
