import { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../Pages/SharedComponent/Footer";
import Nav from "../Pages/SharedComponent/Nav";

export const AuthContext = createContext([]);

const Main = () => {
    const courses = useLoaderData();
    
    const authInfo = { courses,}
    return (
        <div>
            <AuthContext.Provider value = {authInfo}>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
            </AuthContext.Provider>
        </div>
    );
};

export default Main;