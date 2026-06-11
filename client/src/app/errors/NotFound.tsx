import { CircleAlert } from 'lucide-react';
import { Link } from 'react-router-dom';
export default function NotFound() {
    return (
        <div className="w-full h-auto py-10 flex flex-col items-center justify-center gap-5">
            <CircleAlert className="text-red-500" size={100}></CircleAlert>
            <h1 className="text-2xl font-bold">
                The page is currently not available or not found, press the button below to move to home page
            </h1>
            <Link
                to="/"
                className="bg-blue-800 rounded-lg px-4 py-2 
                    text-white text-lg font-bold
                    flex flex-row items-center justify-center
                    hover:bg-blue-900 hover:scale-110 transition duration-300 cursor-pointer"
            >
                Go back to home
            </Link>
        </div>
    )
}