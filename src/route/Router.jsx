import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/services',
                element:<Services></Services>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            }
        ]

    }
])
export default router;