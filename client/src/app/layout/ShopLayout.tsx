import { Outlet } from "react-router-dom";
import ShopNotificationBar from "./ShopNotificationBar";

export default function ShopLayout() {
    return (
        <div>
            <ShopNotificationBar />
            <Outlet />
        </div>
    );
}