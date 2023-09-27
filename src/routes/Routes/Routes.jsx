import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../../layouts/MainLayouts";
import Home from "../../pages/Home/Home/Home";
import { Login, Register } from "../../pages/Auth";

export const router = createBrowserRouter([
     {
          path: "/",
          element: <MainLayouts />,
          children: [
               {
                    index: true,
                    element: <Home />
               },
               {
                    path: "/auth/login",
                    element: <Login />
               },
               {
                    path: "/auth/register",
                    element: <Register />
               }
          ]
     }
]);