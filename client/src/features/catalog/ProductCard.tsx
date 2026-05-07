import { Heart, GamepadDirectional } from 'lucide-react';
import type { Product } from "../../app/models/product";
import { Link } from 'react-router-dom';

type Props =
{
    product: Product;
}

export default function ProductCard({ product }: Props) {
    return (
        <Link to={`/catalog/${product.id}`}
            onClick={() => window.scrollTo(0, 0)}
            className="group relative rounded-md bg-white outline outline-grey/5">
            <div className="flex h-60 w-full items-center justify-center overflow-hidden bg-white">
                <img className="object-cover h-50 w-40 group-hover:scale-110 transition-transform duration-500"
                    src={product.pictureUrl}
                    alt={product.name}
                />
            </div>

            <div className="p-3">
                <h1 className="group-hover:text-red-600 transition-color duration-300 text-xl font-bold flex h-20">{product.name}</h1>
                <div className="text-md font-bold">${product.price}</div>

                <div className="flex w-full items-center justify-between mt-auto pt-2">
                    <div className="flex items-center gap-2">
                        <GamepadDirectional className="text-black-500 fill-black-500" size={18} />
                        <p className="mt-auto text-sm text-sm text-gray-400">{product.type}</p>
                    </div>
                    <div>
                        <Heart className="text-red-500 hover:fill-red-500" size={26} />
                    </div>
                </div>
            </div>
        </Link>
    )
}