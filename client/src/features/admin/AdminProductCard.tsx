import { GamepadDirectional } from "lucide-react";
import type { Product } from "../../app/models/product";

type Props =
    {
        product: Product;
        onSelect: (product: Product) => void;
        isSelected: boolean;
    }

export default function AdminProductCard({ product, onSelect, isSelected }: Props) {
    return (
        <button
            type="button"
            onClick={() => onSelect(product)}
            className={`group w-auto rounded-md bg-white outline outline-2 transition-all 
                ${isSelected ? "outline-red-500 shadow-lg" : "outline-gray-300"} 
                cursor-pointer`}
        >
            <div className="flex h-auto w-full items-center justify-center overflow-hidden bg-white">
                <img className="object-contain w-full h-full group-hover:scale-110 transition-transform duration-500"
                    src={product.pictureUrl}
                    alt={product.name}
                />
            </div>

            <div className="text-gray-600 p-3">
                <h1 className="group-hover:text-red-600 transition-color duration-300 text-lg font-bold flex h-20">{product.name}</h1>
                <div className="text-md font-bold">${product.price}</div>

                <div className="flex w-full items-center justify-between mt-auto pt-2">
                    <div className="flex items-center gap-2">
                        <GamepadDirectional className="text-black fill-black" size={18} />
                        <p className="mt-auto text-sm text-sm text-gray-700">{product.type}</p>
                    </div>
                </div>
            </div>
        </button>
    )
}