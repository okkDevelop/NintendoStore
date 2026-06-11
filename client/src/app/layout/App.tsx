import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import B_NavBar from "./B_NavBar";
import ScrollToTop from "../shared/ScrollToTop";

function App() {

    return (
        <div>
            <ScrollToTop />
            <NavBar />
            <Outlet />
            <B_NavBar />
        </div>
    )
}

export default App
