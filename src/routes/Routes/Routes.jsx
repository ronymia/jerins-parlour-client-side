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
import BookingList, { loader as bookingsLoader } from "../../pages/Dashboard/BookingList/BookingList";
import Review, { action as reviewAction } from "../../pages/Dashboard/Review/Review";
import History from "../../pages/Dashboard/History/History";
import OrderList, { loader as orderLoader } from "../../pages/Dashboard/OrderList/OrderList";
import AddService from "../../pages/Dashboard/AddService/AddService";
import MakeAdmin, { loader as userLoader } from "../../pages/Dashboard/MakeAdmin/MakeAdmin";






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
                    element: <PrivateRoute>
                         <Dashboard />
                    </PrivateRoute>,
                    children: [
                         {
                              path: "/dashboard/bookingList",
                              loader: bookingsLoader(queryClient),
                              element: <Suspense fallback={<DnaLoader />}>
                                   <BookingList />
                              </Suspense>
                         },
                         {
                              path: "/dashboard/review",
                              action: reviewAction,
                              element: <Review />
                         },
                         {
                              path: "/dashboard/history",
                              element: <History />
                         },
                         {
                              path: "/dashboard/orderList",
                              loader: orderLoader(queryClient),
                              element: <OrderList />
                         },
                         {
                              path: "/dashboard/addService",
                              element: <AddService />
                         },
                         {
                              path: "/dashboard/makeAdmin",
                              loader: userLoader(queryClient),
                              element: <MakeAdmin />
                         },
                    ]
               },
          ]
     }
]);