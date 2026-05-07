import { Coins, Truck } from "lucide-react";

export default function ShopNotificationBar() {
    return (
        <div className="flex items-center justify-center h-15 w-full">
            <div className="flex items-center justify-center-safe gap-5">
                <div className="flex items-center justify-center gap-2">
                    <Truck className="text-red-600" size={24} />
                    <p>
                        <span className="font-bold">Free shipping</span> on orders $50 or more. <span className="font-bold underline">Restrictions apply</span>.
                    </p>
                </div>

                <div className="flex items-center justify-center gap-2">
                    <Coins className="text-red-600" size={24} />
                    <p>
                        Redeem your for <span className="font-bold"> My Nintendo Platinum Points</span>. <span className="font-bold underline">fun rewards</span>.
                    </p>
                </div>
            </div>
        </div>
    )
}