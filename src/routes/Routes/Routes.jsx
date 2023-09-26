import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../../layouts/MainLayouts";

export const router = createBrowserRouter([
     {
          path: "/",
          element: <MainLayouts />
     }
]);