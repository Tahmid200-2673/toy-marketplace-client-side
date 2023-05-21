import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import AddToy from "../pages/AddToy/AddToy";
import MyToys from "../pages/MyToys/MyToys";
import AllToys from "../pages/AllToys/AllToys";
import SingleToy from "../pages/SingleToy/SingleToy";
import PrivateRoute from "./PrivateRoute";
import UpdateToy from "../pages/UpdateToy/UpdateToy";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Blog from "../pages/Blog/Blog";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path: 'login',
          element: <Login></Login>,
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>,
        },
        {
          path: 'toys/:id',
          element: <PrivateRoute><SingleToy></SingleToy></PrivateRoute>,
          loader: ({params}) => fetch(`https://b7a11-toy-marketplace-server-side-one.vercel.app/toys/${params.id}`)

         
        },
        {
          path: 'updatetoy/:id',
          element: <UpdateToy></UpdateToy>,
          loader: ({params}) => fetch(`https://b7a11-toy-marketplace-server-side-one.vercel.app/toys/${params.id}`)

         
        },
        {
          path: "addtoy",
          element: <PrivateRoute><AddToy></AddToy></PrivateRoute>,
        },
        {
          path: "mytoys",
          element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
        {
          path: "alltoys",
          element: <AllToys></AllToys>
        },
        {
          path: "blog",
          element: <Blog></Blog>
        }
      ],
    },
    {
      path:'*',
      element: <ErrorPage></ErrorPage>
    }
    
  ]);
  export default router;