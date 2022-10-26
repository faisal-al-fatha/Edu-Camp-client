import { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../Pages/SharedComponent/Footer";
import Nav from "../Pages/SharedComponent/Nav";

export const AuthContext = createContext([]);

const Main = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;