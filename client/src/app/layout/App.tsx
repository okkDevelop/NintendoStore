import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import B_NavBar from "./B_NavBar";

function App() {

    return (
        <div>
            <NavBar />
            <Outlet />
            <B_NavBar />
        </div>
    )
}

export default App
