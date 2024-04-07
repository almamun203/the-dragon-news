import { createBrowserRouter } from "react-router-dom";
import Root from "./Components/Root/Root";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import About from "./Pages/About/About";
import Career from "./Pages/Career/Career";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement:<ErrorPage/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/login',
            element:<Login/>
        },
        {
            path:'/register',
            element:<Register/>
        },
        {
            path:'/about',
            element:<About/>
        },
        {
            path:'/career',
            element:<Career/>
        }
      ]
    },
  ]);