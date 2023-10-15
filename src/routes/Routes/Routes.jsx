import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { QueryClient } from "@tanstack/react-query";
import MainLayouts from "../../layouts/MainLayouts";
import Home from "../../pages/Home/Home/Home";
import { Login, Register } from "../../pages/Auth";
import Service, {
     loader as serviceLoader
} from "../../pages/Home/Service/Service";
import { loader as allServicesLoader } from "../../pages/Home/Services/Services";
import DnaLoader from "../../pages/Shared/Loader/DNALoader/DNALoader";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Dashboard from "../../pages/Dashboard/Dhashboard/Dashboard";
import BookingList from "../../pages/Dashboard/BookingList/BookingList";
import Review from "../../pages/Dashboard/Review/Review";
import History from "../../pages/Dashboard/History/History";






const queryClient = new QueryClient();



export const router = createBrowserRouter([
     {
          path: "/",
          element: <MainLayouts />,
          children: [
               {
                    index: true,
                    loader: allServicesLoader(queryClient),
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
                    path: "/service/:serviceId",
                    loader: serviceLoader(queryClient),
                    element: <Suspense fallback={<DnaLoader />}>
                         <PrivateRoute> <Service /></PrivateRoute>
                    </Suspense>
               },
               {
                    path: "/dashboard",
                    element: <Dashboard />,
                    children: [
                         {
                              path: "/dashboard/bookingList",
                              element: <BookingList />
                         },
                         {
                              path: "/dashboard/review",
                              element: <Review />
                         },
                         {
                              path: "/dashboard/history",
                              element: <History />
                         },
                    ]
               },
          ]
     }
]);