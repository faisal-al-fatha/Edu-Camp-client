import { getAuth } from "firebase/auth";
import { createContext, useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import app from "../Firebase/firebase.config";
import Footer from "../Pages/SharedComponent/Footer";
import Nav from "../Pages/SharedComponent/Nav";

export const AuthContext = createContext();
const auth = getAuth(app)

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