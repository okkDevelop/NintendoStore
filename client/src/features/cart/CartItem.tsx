import { Heart } from "lucide-react";
import type { Item } from "../../app/models/cart"
import { useAddCartItemMutation, useRemoveCartItemMutation } from "./cartApi";
import { currencyFormat } from "../../lib/util";

type Props = {
    item: Item;
}

export default function CartItem({ item }: Props) {
    const [addCartItem] = useAddCartItemMutation();
    const [removeCartItem] = useRemoveCartItemMutation();

    return (
        <div className="w-full h-30 flex flex-col">
            <div className="w-full h-30 flex flex-row">
                <img className="w-20 h-20 rounded-lg object-cover" src={item.pictureUrl} />
                <div className="w-40 h-full flex flex-col">
                    <p className="w-40 h-full flex flex-col justify-between">{item.name}</p>
                    <Heart size={20}></Heart>
                </div>
                <div className="w-30 h-full flex flex-col">
                    <p className="w-full flex flex-col text-gray-300 items-left justify-between">Quantity</p>
                    <div className="w-full flex flex-row rounded-md items-center justify-between">
                        <button onClick={() => removeCartItem({ productId: item.productId, quantity: 1 })}
                            className="w-10 h-10 text-black bg-gray-200 rounded-md">-</button>
                        <p>{item.quantity}</p>
                        <button onClick={() => addCartItem({ product: item, quantity: 1 })}
                            className="w-10 h-10 text-black bg-gray-200 rounded-md">+
                        </button>
                    </div>
                </div>
                <div className="w-20 h-full flex flex-col">
                    <p className="w-40 h-full flex flex-col justify-between">{currencyFormat(item.price * item.quantity)}</p>
                    <button
                        onClick={() => removeCartItem({ productId: item.productId, quantity: item.quantity })}
                        className="w-40 h-full flex flex-col text-red-600 justify-between underline cursor-pointer">
                        Remove
                    </button>
                </div>
            </div>
        </div>
    )
}