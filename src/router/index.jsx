import { createBrowserRouter } from "react-router-dom";
import Helmet from "react-helmet";

import App from "../views/App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Helmet>
          <title>React Template</title>
        </Helmet>
        <App />
      </>
    ),
  },
]);
