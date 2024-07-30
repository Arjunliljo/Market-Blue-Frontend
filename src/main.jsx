import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "typeface-poppins";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./App/Main/Home/Home.jsx";
import Portfolio from "./App/Main/Portfolio/Portfolio.jsx";
import Service from "./App/Main/Service/Service.jsx";
import { AnimationProvider } from "./App/Context/AnimationContext.jsx";
import store from "./Global/store.js";
import { Provider } from "react-redux";
import VideoPlayer from "./App/Utility/VideoPlayer/VideoPlayer.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "services",
        element: <Service />,
      },
      {
        path: "player",
        element: <VideoPlayer />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <AnimationProvider>
        <RouterProvider router={router} />
      </AnimationProvider>
    </Provider>
  </React.StrictMode>
);
