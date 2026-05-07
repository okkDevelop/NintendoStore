import OrderSummary from "../../app/shared/components/OrderSummary"
import CartItem from "./CartItem"
import { useFetchCartQuery } from "./cartApi"

export default function CartPage() {
    const { data, isLoading } = useFetchCartQuery()

    if (isLoading)
        return <div>Loading Cart...</div>

    if (!data || data.items.length === 0)
        return <div>Cart is empty</div>

    return (
        <div className="h-full w-full flex flex-col lg:w-300 mx-auto flex flex-col gap-8 px-3 py-10">
            <h2 className="w-full h-10 text-3xl text-gray-700 font-bold items-left justify-center">Shoppping Cart</h2>
            <div className="w-full h-10 text-md text-gray-700 items-left justify-center">Home-My Nintendo Store-Shopping cart</div>
            <div className="w-full flex flex-row items-center justify-between">
                <div>
                    {data.items.map(item => (
                        <CartItem item={item} key={item.productId} />
                    ))}
                </div>
                <OrderSummary />
            </div>
        </div>
    )
}