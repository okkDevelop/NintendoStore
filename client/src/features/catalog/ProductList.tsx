import type { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";

type Props =
{
    product: Product[];
}

export default function ProductList({ product }: Props) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {product.map(product =>
            (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}