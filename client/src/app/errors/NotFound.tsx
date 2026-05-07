import { Link } from 'react-router-dom';
export default function NotFound() {
    return (
        <Link
            to="/catalog"
            className="mt-4 text-gray-500">
            Go back to shop
        </Link>
    )
}