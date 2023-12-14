import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./components/Router";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from "./App.jsx";
// import Profile from "./components/Profile.jsx";
// import ErrorPage from "./components/ErrorPage.jsx";
// import Spinach from "./components/Spinach.jsx";
// import Popeye from "./components/Popeye.jsx";
// import DefaultProfile from "./components/DefaultProfile.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "profile/:name",
//     element: <Profile />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
