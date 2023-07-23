import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../Dashboard/Dashboard";
import Login from "./../pages/auth/Login/Login";
import PrivateRoutes from "./PrivateRoutes";
import AddLeadEntry from "../pages/LeadEntry/AddLeadEntry/AddLeadEntry";

/* All of Routers */
const routers = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/dashboard",
        element: <MainLayout />,
        children: [
            {
                path: "/dashboard/",
                element: (
                    <PrivateRoutes>
                        <Dashboard />
                    </PrivateRoutes>
                ),
            },
            {
                path: "/dashboard/lead-entry",
                element: (
                    <PrivateRoutes>
                        <AddLeadEntry />
                    </PrivateRoutes>
                ),
            },
            {
                path: "/dashboard/add-lead-entry",
                element: (
                    <PrivateRoutes>
                        <AddLeadEntry />
                    </PrivateRoutes>
                ),
            },
        ],
    },
]);

export default routers;
