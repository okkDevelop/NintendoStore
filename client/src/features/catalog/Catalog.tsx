import { Plus } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../app/store/store";
import ProductList from "./ProductList";
import { useFetchProductsQuery } from "./catalogApi";
import { setLoadedIndex } from "./catalogSlice";

export default function Catalog() {
    const productParams = useAppSelector(state => state.catalog);
    const { data, isLoading } = useFetchProductsQuery(productParams);
    const dispatch = useAppDispatch();
    const currentIndex = useAppSelector((state) => state.catalog.loadedIndex);

    if (isLoading || !data) return <h2>Loading...</h2>

    return(
        <div className="w-auto flex flex-col items-center justify-center gap-5">

            <ProductList product={data} />

            <button
                type="button"
                onClick={() => dispatch(setLoadedIndex(currentIndex + 1))}
                className="bg-blue-800 rounded-lg px-4 py-2 
                                text-white text-lg font-bold
                                flex flex-row items-center justify-center
                                hover:bg-blue-900 hover:scale-110 transition duration-300 cursor-pointer"
            >
                <Plus size={30}></Plus>
                <span>Load more results</span>
            </button>
        </div>
    )
}