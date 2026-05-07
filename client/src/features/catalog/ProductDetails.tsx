import { ShoppingCart, Heart } from 'lucide-react';
import { useParams } from "react-router-dom";
import { useFetchProductDetailsQuery } from './catalogApi';
import { useAddCartItemMutation } from '../cart/cartApi';

export default function  ProductDetails()
{
    const { id } = useParams();

    const { data: product, isLoading } = useFetchProductDetailsQuery(id ? +id : 0);

    const [addCartItem, { isLoading: isAdding }] = useAddCartItemMutation();

    if (!product || isLoading) return <div>Loading...</div>

    return (
        <div className="relative w-full">
            <div className="relative flex items-center justify-center h-160 w-full bg-gray-200">
                <div className="absolute top-5/100 bg-white px-13 py-10 shadow-2xl rounded-xl z-10 h-[650px] w-[1250px]">
                    <div className="flex flex-col gap-5 text-sm">
                        <div>
                            Store-Games-{product?.name}
                        </div>
                        <div className="w-full h-80 flex flex-row items-center justify-between">
                            <img className="w-160 h-full rounded-xl shadow-lg object-cover" src={product?.pictureUrl} alt={product?.name} />
                            <div className="flex flex-col gap-5 w-110 h-full">
                                <h2 className="text-3xl font-bold">{product?.name}</h2>
                                <p className="text-xl text-gray-500">Version Nintendo Switch 2</p>
                                <div className="flex w-full h-10 items-center justify-between">
                                    <p className="text-2xl font-bold">${product?.price}</p>
                                    <Heart className="text-red-500 hover:fill-red-500 transition-color duration-500" size={28}></Heart>
                                </div>
                                <button
                                    disabled={isAdding}
                                    onClick={() => addCartItem({ product, quantity: 1 })}
                                    className="flex items-center justify-center h-15 w-full gap-3 rounded-lg text-3xl text-gray-500 bg-red-500 hover:bg-red-800 hover:scale-105 transition-[transform, background-color] duration-300 ease-out cursor-pointer">
                                    <ShoppingCart className="text-white" size={25}></ShoppingCart>
                                    <p className="text-white text-xl font-bold">Add To Cart</p>
                                </button>
                                <p className="text-xs text-gray-400">
                                    This item will be sent to your system automatically after purchase.
                                </p>
                            </div>
                        </div>
                        <div className="flex h-15 w-160 gap-3 rounded-lg overflow-hidden px-2">
                            <div className="h-full w-25 flex-shrink-0 rounded-lg bg-gray-500"></div>
                            <div className="h-full w-25 flex-shrink-0 rounded-lg bg-gray-500"></div>
                            <div className="h-full w-25 flex-shrink-0 rounded-lg bg-gray-500"></div>
                            <div className="h-full w-25 flex-shrink-0 rounded-lg bg-gray-500"></div>
                            <div className="h-full w-25 flex-shrink-0 rounded-lg bg-gray-500"></div>
                            <div className="h-full w-25 flex-shrink-0 rounded-lg bg-gray-500"></div>
                            <div className="h-full w-25 flex-shrink-0 rounded-lg bg-gray-500"></div>
                            <div className="h-full w-25 flex-shrink-0 rounded-lg bg-gray-500"></div>
                            <div className="h-full w-25 flex-shrink-0 rounded-lg bg-gray-500"></div>
                            <div className="h-full w-25 flex-shrink-0 rounded-lg bg-gray-500"></div>
                            <div className="h-full w-25 flex-shrink-0 rounded-lg bg-gray-500"></div>
                            <div className="h-full w-25 flex-shrink-0 rounded-lg bg-gray-500"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative flex items-center justify-center h-100 w-full bg-red-200">
                Content
            </div>

            <div className="relative flex items-center justify-center h-100 w-full bg-blue-200">
                Related news and events
            </div>

            <div className="relative flex items-center justify-center h-100 w-full bg-yellow-200">
                Related tags
            </div>

            <div className="relative flex items-center justify-center h-100 w-full bg-green-200">
                About This Item
            </div>

            <div className="relative flex items-center justify-center h-100 w-full bg-purple-200">
                Digital Best Sellers
            </div>

            <div className="relative flex items-center justify-center h-100 w-full bg-pink-200">
                Warning
            </div>


        </div>
    )
}