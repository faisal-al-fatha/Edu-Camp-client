import { Outlet } from "react-router-dom";
import Footer from "../Pages/SharedComponent/Footer";
import Nav from "../Pages/SharedComponent/Nav";
const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;