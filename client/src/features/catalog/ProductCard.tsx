import { Heart, GamepadDirectional, type LucideIcon, Gamepad2, Cog, Package } from 'lucide-react';
import type { Product } from "../../app/models/product";
import { Link } from 'react-router-dom';

type Props =
{
    product: Product;
}

const typeIcons: Record<string, LucideIcon> = {
    "Games": GamepadDirectional,
    "Console": Gamepad2,
    "Acccessories": Cog,
};

export default function ProductCard({ product }: Props) {
    const Icon = typeIcons[product.type] || Package;

    return (
        <Link to={`/catalog/${product.id}`}
            className="group w-auto lg:max-w-120 xl:max-w-60 rounded-md bg-white overflow-hidden
                outline outline-gray-300">
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
                        <Icon size={18} className="text-black" />
                        <p className="mt-auto text-sm text-sm text-gray-700">{product.type}</p>
                    </div>

                    <div>
                        <Heart className="text-red-500 hover:fill-red-500" size={26} />
                    </div>
                </div>
            </div>
        </Link>
    )
}