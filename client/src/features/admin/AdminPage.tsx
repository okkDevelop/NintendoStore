
export default function AdminPage() {
    return (
        <div className="w-auto h-auto flex flex-col items-center justify-center bg-white px-4 sm:px-6 xl:px-8 py-10">
            <h1 className="text-xl py-5">Admin Page</h1>
            <div className="w-100 h-auto grid grid-cols-2 gap-10">
                <button
                    type="button"
                    className="rounded-full outline outline-gray-300 cursor-pointer"
                >
                    Add Product
                </button>
                <button
                    type="button"
                    className="rounded-full outline outline-gray-300 cursor-pointer"
                >
                    Remove Product
                </button>
            </div>
        </div>
    )
}