// import * as React  from "react"
import { useRoutes } from "react-router-dom"
import Home from "./views/home"
import Inspirational from "./views/inspirational/Inspirational";
import Pricing from "./views/pricing";
import Blog from "./views/blog";
import WebsiteTips from "./views/blog/WebsiteTips";
import BusinessTips from "./views/blog/BusinessTips";
import InspirationTips from "./views/blog/InspirationTips";
import News from "./views/blog/News";
import Login from "./features/Login";
import SignUp from "./features/SignUp";


export function Routes() {
    let elements = useRoutes([
        {
            path: '/',
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: 'inspiration',
                    element: <Inspirational />
                },
                {
                    path: 'pricing',
                    element: <Pricing />
                },
                {
                    path: 'blog',
                   children: [
                    {
                        index: true,
                        element: <Blog />
                    },
                    {
                        path: 'websitetips',
                        element: <WebsiteTips />
                    },
                    {
                        path: 'businesstips',
                        element: <BusinessTips />
                    },
                    {
                        path: 'inspirationtips',
                        element: <InspirationTips />
                    },
                    {
                        path: 'news',
                        element: <News />
                    }
                   ]
                }
            ]
        },
        {
            path: 'login',
            element: <Login />
        },
        {
            path: 'signup',
            element: <SignUp />
        }
    ])

    return elements;
}