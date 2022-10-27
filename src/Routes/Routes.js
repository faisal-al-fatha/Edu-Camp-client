import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blogs from "../Pages/Blog/Blogs";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Course from "../Pages/Course/Course";
import Courses from "../Pages/Courses/Courses";
import ErrorPage from "../Pages/ErrorPage";
import FAQ from "../Pages/FAQ/FAQ";
import Home from "../Pages/Home/Home";
import Login from "../Pages/login/Login";
import SignUp from "../Pages/SignUp/SignUp";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    loader:() => fetch('https://educamp-server-side.vercel.app/courses'),
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <SignUp></SignUp>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/courses/:id",
        element: <Course></Course>,
        loader: ({params}) =>fetch(`https://educamp-server-side.vercel.app/courses/${params.id}`)
      },
      {
        path: "/checkout/:id",
        element: <CheckOut></CheckOut>,
        loader: ({params}) =>fetch(`https://educamp-server-side.vercel.app/courses/${params.id}`)
      },
    ],
  },
]);
