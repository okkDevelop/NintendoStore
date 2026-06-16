import { Link } from "react-router-dom";

export default function AdminPage() {
    return (
        <div className="w-auto h-auto flex flex-col items-center justify-center gap-5 bg-white px-4 sm:px-6 xl:px-8 py-10">
            <h1 className="text-xl py-5">Admin Page</h1>

            <Link
                to="/addProduct"
                className="w-50 h-20 rounded-full 
                    flex items-center justify-center
                    text-black text-xl 
                    outline outline-red-500
                    hover:bg-red-500 transition duration-300"
            >
                Add Product
            </Link>
            <Link
                to="/modifyProduct"
                className="w-50 h-20 rounded-full 
                    flex items-center justify-center
                    text-black text-xl 
                    outline outline-red-500
                    hover:bg-red-500 transition duration-300"
            >
                Modify Product
            </Link>
        </div>
    )
}