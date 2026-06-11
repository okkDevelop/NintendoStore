import { ShoppingCart, Heart, Minus, Plus } from 'lucide-react';
import { useParams } from "react-router-dom";
import { useFetchProductDetailsQuery } from './catalogApi';
import { useAddCartItemMutation } from '../cart/cartApi';
import { useAppDispatch, useAppSelector } from '../../app/store/store';
import { decreament, increament } from './productCounterReducer';

export default function  ProductDetails()
{
    const { id } = useParams();

    const { data: product, isLoading } = useFetchProductDetailsQuery(id ? +id : 0);

    const [addCartItem, { isLoading: isAdding }] = useAddCartItemMutation();

    const { counter } = useAppSelector(state => state.productCounter)
    const dispatch = useAppDispatch();

    if (!product || isLoading) return <div>Loading...</div>

    return (
        <div className="relative w-full h-auto ">
            <div className="relative flex items-center justify-center h-160 w-full bg-gray-200">
                <div className="absolute top-5/100 bg-white px-13 py-10 shadow-2xl rounded-xl z-10 h-[650px] w-[1250px]">
                    <div className="flex flex-col gap-5 text-sm">
                        <div>
                            Store-Games-{product?.name}
                        </div>
                        <div className="w-full h-80 flex flex-row items-center justify-between">

                            <img className="w-160 h-full rounded-xl shadow-lg object-cover"
                                src={product?.pictureUrl} alt={product?.name}
                            />

                            <div className="flex flex-col gap-5 w-110 h-full">
                                <h2 className="text-3xl font-bold text-gray-700">
                                    {product?.name}
                                </h2>
                                <div className="flex w-full h-10 items-center justify-between">
                                    <p className="text-2xl font-bold text-gray-700">
                                        ${product?.price}
                                    </p>
                                    <Heart className="text-red-500 hover:fill-red-500 transition-color duration-500" size={28}></Heart>
                                </div>
                                <div className="flex flex-row gap-5">

                                    <div className="w-50 h-full rounded-lg outline outline-gray-300 flex flex-row items-center justify-center gap-2 overflow-hidden">

                                        <button
                                            type="button"
                                            onClick={() => counter > 1 && dispatch(decreament(1))}
                                            disabled={counter <= 1}
                                            className={`h-full flex-1 flex items-center justify-center transition duration-200
                                                    ${counter <= 1 ?
                                                    'opacity-40 cursor-not-allowed' :
                                                    'hover:bg-gray-100 cursor-pointer'
                                                }`}
                                        >
                                            <Minus size={20}></Minus>
                                        </button>

                                        <span className="h-full flex-1 flex items-center justify-center text-lg text-gray-700 font-semibold text-center select-none">
                                            {counter}
                                        </span>

                                        <button
                                            type="button"
                                            onClick={() => dispatch(increament(1))}
                                            className="h-full flex-1 flex items-center justify-center hover:bg-gray-100 cursor-pointer transition duration-200"
                                        >
                                            <Plus size={20}></Plus>
                                        </button>

                                    </div>

                                    <button
                                        disabled={isAdding}
                                        onClick={() => addCartItem({ product, quantity: counter })}
                                        className="w-full h-15 rounded-lg bg-red-600 cursor-pointer
                                            hover:bg-red-800 hover:scale-105 transition-[transform, background-color] duration-300 ease-out 
                                            text-3xl text-gray-500                                                 
                                            flex items-center justify-center gap-3"
                                    >
                                        <ShoppingCart className="text-white fill-white" size={25}></ShoppingCart>
                                        <p className="text-white text-xl font-bold">Add To Cart</p>
                                    </button>
                                </div>
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

        </div>
    )
}