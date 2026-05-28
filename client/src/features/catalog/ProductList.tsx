import type { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";

type Props =
{
    product: Product[];
}

export default function ProductList({ product }: Props) {
    return (
        <div className="w-auto grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-9"
        >
            {product.map(product =>
            (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}