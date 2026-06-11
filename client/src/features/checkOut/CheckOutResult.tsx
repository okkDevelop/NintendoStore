import { CircleCheck, CircleX } from "lucide-react";
import { useLocation } from "react-router-dom";

export default function CheckOutResult() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const success = queryParams.get("status") === "succeeded";

    return (
        <div className="w-full h-auto flex items-center justify-center">
            <div className="w-full max-w-295 h-auto py-10 px-5
                flex flex-col items-center justify-between gap-5
                border-b border-gray-200"
            >
                {success ? 
                    <div className="w-full h-auto flex flex-col items-center justify-center gap-5">
                        <CircleCheck className="text-green-500" size={50}></CircleCheck>
                        <span className="font-semibold text-gray-600">Payment has made successful, please wait for the delivery</span>
                    </div> :
                    <div className="w-full h-auto flex flex-col items-center justify-center gap-5">
                        <CircleX className="text-green-500" size={50}></CircleX>
                        <span className="font-semibold text-gray-600">Payment has made successful, please wait for the delivery</span>
                    </div>
                }
            </div>
        </div>
    )
}
