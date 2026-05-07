import { Outlet } from "react-router-dom";
import ShopNotificationBar from "./shopNotificationBar";

export default function ShopLayout() {
    return (
        <div>
            <ShopNotificationBar />
            <Outlet />
        </div>
    );
}