import { useState, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

const typesSelections = [
    {
        value: "Console"
    },
    {
        value: "Acccessories",
    },
    {
        value: "Games"
    }
]

export default function AddProductPage() {
    const navigate = useNavigate();

    const [product, setProduct] = useState({
        name: "",
        description: "",
        type: "",
        quantityInStock: 0,
        price: 0
    });

    const [file, setFile] = useState<File | null>(null);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setProduct(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (!file)
            return console.error("Please select a file first");

        const formData = new FormData();

        formData.append("file", file);

        formData.append("Name", product.name);
        formData.append("Description", product.description);
        formData.append("Price", product.price.toString());
        formData.append("Type", product.type);
        formData.append("QuantityInStock", product.quantityInStock.toString());

        const formValues = Object.fromEntries(formData as unknown as Iterable<[string, FormDataEntryValue]>);
        console.log("Form Values:", formValues);

        try {
            const response = await fetch('https://localhost:5001/api/products/addProduct', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                console.log("Product added successfully!");
                alert("Product added successfully!");
                navigate('/adminPage');
            }
            else {
                const errorData = await response.json();
                console.error("Backend Error:", errorData);
                alert("Failed to add product: " + (errorData.title || "Unknown error"));
            }
        }
        catch (error) {
            console.error("Network Error:", error);
        }
    };

    return (
        <div className="w-auto h-auto flex flex-col items-center justify-center bg-white px-4 sm:px-6 xl:px-8 py-10">
            <form className="w-full h-auto bg-gray-100 flex flex-col items-center justify-center">
                <div className="w-150 max-w-300 flex flex-col items-center gap-5 p-10">
                    <h2 className="text-gray-800 text-xl font-bold">Add New Product</h2>
                    <div className="w-full flex items-center justify-between">
                        <label className="text-gray-700 px-5 font-bold">
                            Product Name:
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter Product Name"
                            value={product.name}
                            onChange={handleInputChange}
                            className="text-gray-700 px-5 bg-white rounded-full"
                        />
                    </div>
                    <div className="w-full flex items-center justify-between">
                        <label className="text-gray-700 px-5 font-bold">Product Description:</label>
                        <input
                            type="text"
                            name="description"
                            value={product.description}
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
                            value={product.price}
                            onChange={handleInputChange}
                            className="text-gray-700 px-5 bg-white rounded-full"
                        >
                        </input>
                    </div>

                    <div className="w-full flex items-center justify-between">
                        <label className="text-gray-700 px-5 font-bold">Upload Picture here:</label>
                        <input
                            type="file"
                            onChange={handleFileChange}
                            className="text-gray-700 px-5 bg-white rounded-full"
                        />
                    </div>

                    <div className="w-full flex items-center justify-between">
                        <label className="text-gray-700 px-5 font-bold">
                            Select an product type
                        </label>
                        <select
                            name="type"
                            value={product.type}
                            onChange={handleInputChange}
                            className="text-gray-700 px-5 bg-white rounded-full"
                        >
                            <option value="">Choose a Types</option>
                            {typesSelections.map((content, index) => (
                                <option
                                    key={index}
                                    value={content.value}
                                >
                                    {content.value}
                                </option>
                            )
                            )}
                        </select>
                    </div>

                    <div className="w-full flex items-center justify-between">
                        <label className="text-gray-700 px-5 font-bold">Product Quantity:</label>
                        <input
                            type="number"
                            name="quantityInStock"
                            value={product.quantityInStock}
                            onChange={handleInputChange}
                            className="text-gray-700 px-5 bg-white rounded-full"
                        >
                        </input>
                    </div>

                    <button
                        type="button"
                        onClick={handleUpload}
                        className="w-30 h-10 rounded-full text-white bg-red-500 hover:bg-red-700 transition duration-300 cursor-pointer"
                    >
                        Add Product
                    </button>
                </div>
            </form>

            <div className="w-100 h-auto grid grid-cols-2 gap-10">

            </div>
        </div>
    )
}