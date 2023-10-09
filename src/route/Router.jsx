import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ServiceDetails from "../Components/ServiceCard/ServiceDetails";
import Private from './../Private/Private';
import Blogs from './../pages/Blogs';
import Booking from './../pages/Booking';
import Error from './../pages/Error';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/service.json"),
        
      },
      {
        path: "/about",
        element: <About></About>,
      },

      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/blogs",
        element: (
          <Private>
            <Blogs></Blogs>
          </Private>
        ),
        loader: () => fetch("/blogs.json"),
      },
      {
        path: "/booking",
        element: (
          <Private>
            <Booking></Booking>
          </Private>
        ),
      },
      {
        path: "/service/:id",
        element: (
          <Private>
            <ServiceDetails></ServiceDetails>
          </Private>
        ),
        loader: () => fetch("/service.json"),
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
export default router;