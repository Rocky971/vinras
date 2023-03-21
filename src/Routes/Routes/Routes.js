import Main from "../../Layout/Main";
import AboutUs from "../../Pages/AboutUs/AboutUs/AboutUs";
import AboutUsTwo from "../../Pages/AboutUsTwo/AboutUsTwo/AboutUsTwo";
import Home from "../../Pages/Home/Home/Home";
import HomeTwo from "../../Pages/HomeTwo/HomeTwo/HomeTwo";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails/ServiceDetails";
import Services from "../../Pages/Services/Services/Services";
import ServicesTwo from "../../Pages/ServicesTwo/ServicesTwo/ServicesTwo";

const { createBrowserRouter } = require("react-router-dom");


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/hometwo',
                element: <HomeTwo />
            },
            {
                path: '/about',
                element: <AboutUs />
            },
            {
                path: '/abouttwo',
                element: <AboutUsTwo />
            },
            {
                path: '/services',
                element: <Services />
            },
            {
                path: '/servicestwo',
                element: <ServicesTwo />
            },
            {
                path: '/servicedetails',
                element: <ServiceDetails />
            },
        ]
    }
])

export default router;