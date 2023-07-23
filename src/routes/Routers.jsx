import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../Dashboard/Dashboard";
import Login from './../pages/auth/Login/Login';
import PrivateRoutes from './PrivateRoutes';


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
        ],
    },
]);

export default routers;
