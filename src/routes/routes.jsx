import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Principal from "../pages/Principal";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Delivery from "../pages/Delivery";
import Solidos from "../pages/Solidos";
import Liquidos from "../pages/Liquidos";
import FAQ from "../Components/Faq";
import Merch from "../pages/Merch";
import Register from "../pages/Register";


export const router = createBrowserRouter([
{
    path: '/',
    element: <App />
},
{
    path: '/inicio',
    element: <Principal/>
},
{
    path: '/productos',
    element: <Products/>
},
{
    path: '/contactanos',
    element: <Contact/>
},
{
    path: '/delivery',
    element: <Delivery/>
},
{
    path: '/login',
    element: <Login/>
},
{
    path: '/solidos',
    element: <Solidos/>
},
{
    path: '/liquidos',
    element: <Liquidos/>
},
{
    path: '/faq',
    element: <FAQ/>
},
{
    path: '/merch',
    element: <Merch/>
},
{
    path: '/registrate',
    element: <Register/>
}
   
])