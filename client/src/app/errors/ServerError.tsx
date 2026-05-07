import { useLocation } from "react-router-dom";

export default function ServerError() {
    const { state } = useLocation();

    return (
        <div>{state?.error ? (
            <div>
                <h1 className="mt-4 text-gray-500">{state.error.title}</h1>
                <p className="mt-4 text-gray-500">{state.error.detail}</p>
            </div>
        ) : (
                <h1 className="mt-4 text-gray-500">Server error</h1>
        )}
        </div>
    )
}