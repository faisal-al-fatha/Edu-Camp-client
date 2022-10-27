import { createContext, useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../Pages/SharedComponent/Footer";
import Nav from "../Pages/SharedComponent/Nav";

export const AuthContext = createContext([]);

const Main = () => {
    const courses = useLoaderData();
    const [user, setUser]= useState('')
    
    const authInfo = { courses, user, setUser}
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