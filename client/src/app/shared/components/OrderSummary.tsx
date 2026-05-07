import { useFetchCartQuery } from "../../../features/cart/cartApi";
import { currencyFormat } from "../../../lib/util";
import type { Item } from "../../models/cart";
import { Link } from 'react-router-dom';

export default function OrderSummary() {
    const { data: cart } = useFetchCartQuery();
    const subtotal = cart?.items.reduce((sum: number, item: Item) => sum + item.price * item.quantity, 0) ?? 0;
    const estimatedTax = subtotal * 6 / 100;

    return (
        <div className="w-100 h-100 flex flex-col items-center justify-between bg-gray-200 rounded-xl p-2">
            <div className="w-full h-10 text-2xl text-gray-700 font-bold items-center justify-between">
                <p>Order summary</p>
            </div>

            <div className="w-full h-10 text-2xl text-gray-700 font-bold items-center justify-between">
                <p>Promotional code</p>
            </div>

            <div className="w-full h-10 text-2xl text-gray-700 font-bold flex flex-row items-center justify-between">
                <p>Item(s) subtotal</p>
                <p>{currencyFormat(subtotal)}</p>
            </div>

            <div className="w-full h-10 text-2xl text-gray-700 font-bold flex flex-row items-center justify-between">
                <p>Estimated tax</p>
                <p>{currencyFormat(estimatedTax)}</p>
            </div>

            <div className="w-full h-10 text-2xl text-gray-700 font-bold flex flex-row items-center justify-between">
                <p>Estimated total</p>
                <p>{currencyFormat(subtotal + estimatedTax)}</p>
            </div>

            <Link
                to="/checkout"
                className="w-full h-20 text-2xl text-white bg-red-600 font-bold flex flex-row items-center justify-between cursor-pointer">
                To secure Check out
            </Link>
        </div>
    )
}