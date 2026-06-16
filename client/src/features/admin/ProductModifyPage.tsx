import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/store/store";
import { useFetchProductsQuery } from "../catalog/catalogApi";
import { setLoadedIndex } from "../catalog/catalogSlice";
import { Plus } from "lucide-react";
import AdminProductCard from "./AdminProductCard";
import { useNavigate } from "react-router-dom";
import type { Product } from "../../app/models/product";

export default function ProductModifyPage() {
    const productParams = useAppSelector(state => state.catalog);
    const { data, isLoading } = useFetchProductsQuery(productParams);
    const dispatch = useAppDispatch();
    const currentIndex = useAppSelector((state) => state.catalog.loadedIndex);

    const navigate = useNavigate();

    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [formValues, setFormValues] = useState<Product>({
        id: 0,
        name: "",
        description: "",
        price: 0,
        pictureUrl:"",
        type: "",
        quantityInStock: 0
    });

    useEffect(() => {
        if (selectedProduct) {
            setFormValues(selectedProduct);
        }
    }, [selectedProduct]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        const parsedValue = (name === "price" || name === "quantityInStock")
            ? parseFloat(value)
            : value;

        setFormValues((prev) => ({
            ...prev,
            [name]: parsedValue
        }));

        console.log(formValues);
    };

    const handleUpdateProduct = async () => {
        if (!selectedProduct)
            return alert("Please select a product");

        try {
            const response = await fetch(`https://localhost:5001/api/products/updateProduct`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formValues)
            });

            const responseText = await response.text();

            if (response.ok) {
                console.log("Product updated successfully!");
            }
            else {
                console.error("Server Error Response:", responseText);
                alert("Failed to update: " + responseText);
            }
        }
        catch (error) {
            console.error("Network Error:", error);
        }
    }

    const handleRemoveProduct = async () =>
    {
        if (!selectedProduct)
            return alert("Please select a product");

        console.log(selectedProduct.name);

        try {
            const response = await fetch(`https://localhost:5001/api/products/removeProduct?productName=${encodeURIComponent(selectedName)}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                console.log("Product remove successfully!");
                //navigate('/adminPage');
                //refetch();
            }
            else {
                const errorData = await response.json();
                alert("Failed to remove product: " + (errorData.title || "Unknown error"));
            }
        }
        catch (error) {
            console.error("Network Error:", error);
        }
    }

    if (isLoading || !data)
        return <h2>Loading...</h2>

    return (
        <div className="w-auto h-auto flex flex-col items-center justify-center bg-white px-4 sm:px-6 xl:px-8">

            <div className="w-auto h-auto h-auto
                    flex flex-col items-center justify-center gap-5"
            >
                <div className="w-auto h-auto py-10
                    flex flex-row items-top justify-between gap-10"
                >
                    <div className="sticky top-0 h-fit w-auto h-auto hidden lg:block">
                        <div className="w-full max-w-100 h-auto bg-gray-100 p-4
                                flex flex-col gap-5 items-center justify-center
                                rounded-lg overflow-hidden"
                        >
                            <form className="w-full h-auto bg-gray-100 flex flex-col items-center justify-center">
                                <div className="w-full max-w-300 flex flex-col items-center gap-5 p-3">
                                    <h2 className="text-gray-800 text-xl font-bold">Add New Product</h2>
                                    <div className="w-full flex items-center justify-between">
                                        <label className="text-gray-700 px-5 font-bold">
                                            Product Name:
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formValues.name}
                                            onChange={handleInputChange}
                                            placeholder="Enter Product Name"
                                            className="text-gray-700 px-5 bg-white rounded-full"
                                        />
                                    </div>
                                    <div className="w-full flex items-center justify-between">
                                        <label className="text-gray-700 px-5 font-bold">Product Description:</label>
                                        <input
                                            type="text"
                                            name="description"
                                            value={formValues.description}
                                            onChange={handleInputChange}
                                            className="text-gray-700 px-5 bg-white rounded-full"
                                        >
                                        </input>
                                    </div>

                                    <div className="w-full flex items-center justify-between">
                                        <label className="text-gray-700 px-5 font-bold">Product Price:</label>
                                        <input
                                            type="number"
                                            name="price"
                                            value={formValues.price}
                                            onChange={handleInputChange}
                                            className="text-gray-700 px-5 bg-white rounded-full"
                                        >
                                        </input>
                                    </div>

                                    <div className="w-full flex items-center justify-between">
                                        <label className="text-gray-700 px-5 font-bold">
                                            Select an product type
                                        </label>
                                        <select
                                            name="type"
                                            value={formValues.type}
                                            onChange={handleInputChange}
                                            className="text-gray-700 px-5 bg-white rounded-full"
                                        >
                                            <option value="">Choose a Types</option>
                                        </select>
                                    </div>

                                    <div className="w-full flex items-center justify-between">
                                        <label className="text-gray-700 px-5 font-bold">Product Quantity:</label>
                                        <input
                                            type="number"
                                            name="quantityInStock"
                                            value={formValues.quantityInStock}
                                            onChange={handleInputChange}
                                            className="text-gray-700 px-5 bg-white rounded-full"
                                        >
                                        </input>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={handleUpdateProduct}
                                        className="w-30 h-10 rounded-full text-white bg-red-500 hover:bg-red-700 transition duration-300 cursor-pointer"
                                    >
                                        Update Product
                                    </button>
                                </div>
                            </form>
                            <button
                                type="button"
                                onClick={handleRemoveProduct}
                                className="bg-red-500 text-white px-8 py-3 rounded-full cursor-pointer shadow-2xl hover:bg-red-600 transition-all active:scale-95"
                            >
                                Remove Selected Product
                            </button>
                        </div>                        
                    </div>

                    <div className="w-auto flex flex-col items-center justify-center gap-5">
                        <div className="w-auto grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-9"
                        >
                            {data.map(product =>
                            (
                                <AdminProductCard
                                    key={product.id}
                                    product={product}
                                    onSelect={setSelectedProduct}
                                    isSelected={selectedProduct === product}
                                />
                            ))}
                        </div>

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
                </div>
            </div>
        </div>
    )
}