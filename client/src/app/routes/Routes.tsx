import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import Catalog from "../../features/catalog/Catalog";
import AboutPage from "../../features/about/AboutPage";
import Privacy from "../../features/privacy/Privacy";
import Orders from "../../features/orders/Orders";
import Shop from "../../features/shop/Shop";
import Contact from "../../features/contact/Contact";
import Feedback from "../../features/contact/Feedback";
import Term from "../../features/contact/Term";
//import WhatNews from "../../features/whatnews/WhatNews";
import ProductDetails from "../../features/catalog/ProductDetails";
import ShopLayout from "../layout/ShopLayout";
//import NewsDetails from "../../features/whatnews/newsDetails";
import ServerError from "../errors/ServerError";
import NotFound from "../errors/NotFound";
import CartPage from "../../features/cart/cartPage";
import CheckOutPage from "../../features/checkOut/CheckOutPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <HomePage /> },
            { path: '/about', element: <AboutPage /> },
            { path: '/privacy', element: <Privacy /> },
            { path: '/orders', element: <Orders /> },
            { path: '/shop', element: <Shop /> },
            { path: '/contact', element: <Contact /> },
            { path: '/cart', element: <CartPage /> },
            { path: '/feedback', element: <Feedback /> },
            { path: '/term-of-use', element: <Term /> },
            //{ path: '/whatnews', element: <WhatNews /> },
            //{ path: '/news/:id', element: <NewsDetails /> },
            { path: '/server-error', element: <ServerError /> },
            { path: '/not-found', element: <NotFound /> },
            { path: '/checkout', element: <CheckOutPage /> },
            { path: '*', element: <Navigate replace to='/not-found'/> },

            {
                element: <ShopLayout />,
                children: [
                    { path: '/catalog', element: <Catalog /> },
                    { path: '/catalog/:id', element: <ProductDetails /> },
                ]
            }
        ]
    }
])