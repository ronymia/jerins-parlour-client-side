import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { QueryClient } from "@tanstack/react-query";
import MainLayouts from "../../layouts/MainLayouts";
// import Home from "../../pages/Home/Home/Home";
import { Login, Register } from "../../pages/Auth";
import DnaLoader from "../../pages/Shared/Loader/DNALoader/DNALoader";
import Booking, { loader as bookingLoader } from "../../pages/Home/Booking/Booking";
import { loader as servicesLoader } from "../../pages/Home/Services/Services";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
// import Booking from "../../pages/UserDashboard/Booking/Booking";
// import DashboardLayout from "../../layouts/DashboardLayout";

const Home = lazy(() => import("../../pages/Home/Home/Home"));
const DashboardLayout = lazy(() => import("../../layouts/DashboardLayout"));


const queryClient = new QueryClient();

export const router = createBrowserRouter([
     {
          path: "/",
          element: <MainLayouts />,
          children: [
               {
                    index: true,
                    loader: servicesLoader(queryClient),
                    element: <Suspense fallback={<DnaLoader />}>
                         <Home />
                    </Suspense>
               },
               {
                    path: "/auth/login",
                    element: <Login />
               },
               {
                    path: "/auth/register",
                    element: <Register />
               },
               {
                    path: "/booking/:serviceId",
                    loader: bookingLoader(queryClient),
                    element: <Suspense fallback={<DnaLoader />}>
                         <PrivateRoute> <Booking /></PrivateRoute>
                    </Suspense>
               }
          ]
     },
     {
          path: "dashboard",
          element: <Suspense fallback={<DnaLoader />}>
               <DashboardLayout />
          </Suspense>
     }
]);