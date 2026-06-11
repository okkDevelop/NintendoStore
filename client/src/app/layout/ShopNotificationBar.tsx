import { Coins, Truck } from "lucide-react";

export default function ShopNotificationBar() {
    return (
        <div className="w-full h-15 flex items-center justify-center bg-gray-100">
            <div className="flex items-center justify-center divide-x divide-gray-600">
                <div className="flex items-center justify-center gap-2 px-5">
                    <Truck className="text-red-600" size={24} />
                    <p>
                        <span className="font-bold">Free shipping</span> on orders $50 or more. <span className="font-bold underline hover:text-red-700 transition duration-400 cursor-pointer">Restrictions apply</span>.
                    </p>
                </div>

                <div className="flex items-center justify-center gap-2 px-5">
                    <Coins className="text-red-600" size={24} />
                    <p>
                        Redeem your for <span className="font-bold"> My Nintendo Platinum Points</span>. <span className="font-bold underline hover:text-red-700 transition duration-400 cursor-pointer">fun rewards</span>.
                    </p>
                </div>
            </div>
        </div>
    )
}