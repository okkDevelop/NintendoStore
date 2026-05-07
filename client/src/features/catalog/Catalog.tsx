import { useAppSelector } from "../../app/store/store";
import Filters from "./Filters";
import ProductList from "./ProductList";
import { useFetchProductsQuery } from "./catalogApi";

export default function Catalog() {
    const productParams = useAppSelector(state => state.catalog);
    const { data, isLoading } = useFetchProductsQuery(productParams);

    if (isLoading || !data) return <h2>Loading...</h2>

    return(
        <div className="flex flex-row">
            <Filters />
            <ProductList product={data} />
        </div>
    )
}