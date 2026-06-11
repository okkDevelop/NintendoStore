import { ShoppingCart } from "lucide-react"
import OrderSummary from "../../app/shared/components/OrderSummary"
import CartItem from "./CartItem"
import { useFetchCartQuery } from "./cartApi"

export default function CartPage() {
    const { data, isLoading } = useFetchCartQuery()

    if (isLoading)
        return <div>Loading Cart...</div>

    return (
        <div className="w-full h-auto flex items-center justify-center">
            <div className="w-full max-w-295 h-auto py-10 px-5
                flex flex-col items-center justify-between gap-5
                border-b border-gray-200"
            >
                <h2 className="w-full h-10 
                    text-3xl text-gray-700 font-bold"
                >
                    Shoppping Cart
                </h2>

                <div className="w-full h-10 text-xs text-gray-700">Home-My Nintendo Store-Shopping cart</div>

                <div className="w-full h-auto flex flex-row items-top justify-between gap-9">

                    {!data || data.items.length === 0 ?
                        <div className="w-full h-auto flex flex-col items-center justify-center gap-5">
                            <ShoppingCart size={50}></ShoppingCart>
                            <span className="text-2xl font-bold text-gray-700">Your cart looks lonly. Why not add <span className="text-red-500 underline underline-red-500 offset-y-3 decoration-3 cursor-pointer">something fun</span>?</span>
                            <span className="font-semibold text-gray-600">Unlock free shipping when you spend $50 or more!</span>
                        </div> :
                        <>
                            {/*the below is cart item list*/}
                            <div className="w-full h-auto">
                                {data.items.map(item => (
                                    <CartItem item={item} key={item.productId} />
                                ))}
                            </div>

                            <div className="w-90 sticky top-0 h-fit shrink-0">
                                <OrderSummary />
                            </div>
                        </>
                        }
                </div>
            </div>
        </div>
    )
}