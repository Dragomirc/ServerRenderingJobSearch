import React from "react";
import App from "./components/common/App";
import HomePage from "./components/homePage/HomePage";
import NotFoundPage from "./components/notFoundPage/NotFoundPage";

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: "/",
        exact: true
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
