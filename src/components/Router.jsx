import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Profile from "./Profile";
import ErrorPage from "./ErrorPage";
import Guild from "./Guild";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "profile/:name",
      element: <Profile />,
    },
    {
      path: "guild",
      element: <Guild />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
