import { Heart, Minus, Plus } from "lucide-react";
import type { Item } from "../../app/models/cart"
import { useAddCartItemMutation, useRemoveCartItemMutation } from "./cartApi";
import { currencyFormat } from "../../lib/util";
import { Link } from "react-router-dom";

type Props = {
    item: Item;
}

export default function CartItem({ item }: Props) {
    const [addCartItem] = useAddCartItemMutation();
    const [removeCartItem] = useRemoveCartItemMutation();

    return (
        <div className="w-full h-auto py-8
                flex flex-row items-center gap-10
                border-b border-gray-200"
        >
            <div className="w-auto h-full flex flex-row gap-5">
                <Link
                    to={`/catalog/${item.productId}`}
                    className="w-35 h-35"
                >
                    <img className="rounded-lg object-contain" src={item.pictureUrl} />
                </Link>

                <div className="w-75 h-auto
                        flex flex-col justify-center gap-3"
                >
                    <Link
                        to={`/catalog/${item.productId}`}
                        className="w-auto h-auto font-bold text-gray-700 hover:text-red-700 transition duration-300"
                    >
                        {item.name}
                    </Link>
                    <Heart className="text-red-500 hover:fill-red-500 cursor-pointer" size={25}></Heart>
                </div>
            </div>

            <div className="w-30 h-auto flex flex-col items-center justify-center gap-3">
                <span className="w-full text-gray-600 text-xs">Quantity</span>

                <div className="w-full h-15 rounded-lg outline outline-gray-300 flex flex-row items-center justify-center gap-2 overflow-hidden">
                    <button
                        type="button"
                        onClick={() => removeCartItem({ productId: item.productId, quantity: 1 })}
                        className="h-full flex-1 flex items-center justify-center transition duration-200
                                    hover:bg-gray-100 cursor-pointer"
                    >
                        <Minus size={20}></Minus>
                    </button>

                    <span className="h-full flex-1 flex items-center justify-center text-lg text-gray-700 font-semibold text-center select-none">
                        {item.quantity}
                    </span>

                    <button
                        type="button"
                        onClick={() => addCartItem({ product: item, quantity: 1 })}
                        className="h-full flex-1 flex items-center justify-center hover:bg-gray-100 cursor-pointer transition duration-200"
                    >
                        <Plus size={20}></Plus>
                    </button>

                </div>
            </div>

            <div className="w-auto h-full flex flex-col gap-3">
                <span className="w-auto h-full text-right text-gray-700 font-bold">{currencyFormat(item.price * item.quantity)}</span>
                <button
                    onClick={() => removeCartItem({ productId: item.productId, quantity: item.quantity })}
                    className="w-auto h-full text-red-600 font-bold cursor-pointer
                        underline underline-offset-4 decoration-2 decoration-red-500">
                    Remove
                </button>
            </div>
        </div>
    )
}