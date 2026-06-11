import { useFetchCartQuery } from "../../../features/cart/cartApi";
import { useCreatePaymentIntentMutation } from "../../../features/checkOut/checkoutApi";
import { currencyFormat } from "../../../lib/util";
import type { Item } from "../../models/cart";
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function OrderSummary() {
    const { data: cart } = useFetchCartQuery();
    const subtotal = cart?.items.reduce((sum: number, item: Item) => sum + item.price * item.quantity, 0) ?? 0;
    const estimatedTax = subtotal * 6 / 100;

    const location = useLocation();

    const [createPaymentIntent, { isLoading }] = useCreatePaymentIntentMutation();
    const navigate = useNavigate();

    return (
        <div
            className="w-full h-auto flex flex-col items-center justify-center bg-gray-100 rounded-xl px-5 pb-3"
        >
            <div className="w-full h-auto py-4
                    flex items-center justify-between
                    text-2xl text-gray-700 font-bold
                    border-b border-gray-300"
            >
                Order summary
            </div>

            <div className="w-full h-auto py-2
                    text-lg text-gray-700 font-semibold
                    border-b border-gray-300"
            >
                Promotional code
            </div>

            <div className="w-full h-auto py-2
                    flex items-center justify-between
                    text-lg text-gray-700 font-semibold
                    border-b border-gray-300"
            >
                <p>Item(s) subtotal</p>
                <p>{currencyFormat(subtotal)}</p>
            </div>

            <div className="w-full h-auto py-2
                    flex items-center justify-between
                    text-lg text-gray-700 font-semibold
                    border-b border-gray-300"
            >
                <p>Estimated tax</p>
                <p>{currencyFormat(estimatedTax)}</p>
            </div>

            <div className="w-full h-auto py-4
                    flex items-center justify-between
                    text-2xl text-gray-700 font-bold">
                <p>Estimated total</p>
                <p>{currencyFormat(subtotal + estimatedTax)}</p>
            </div>

            {!location.pathname.includes('checkout') &&
                //<Link
                //    to="/checkout"
                //    disa={isLoading}
                //    className="w-full h-12 bg-red-600 rounded-lg
                //        flex flex-row items-center justify-center 
                //        text-lg text-center text-white font-bold cursor-pointer">
                //    To secure check out
                //</Link>
                <button
                    type="button"
                    onClick={async () => {
                        try {
                            await createPaymentIntent().unwrap();

                            navigate("/checkout");
                        }
                        catch (error) {
                            console.error("Failed to create payment intent:", error);
                        }
                    }}
                    disabled={isLoading}
                    className="w-full h-12 bg-red-600 rounded-lg flex flex-row items-center justify-center text-lg text-white font-bold cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                    {isLoading ? "Loading..." : "To secure check out"}
                </button>
            }
        </div>
    )
}