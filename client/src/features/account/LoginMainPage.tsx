import { Link } from "react-router-dom";

export function LoginMainPage() {
    return (
        <div className="w-full h-auto bg-gray-100 flex items-center justify-center">
            <div className="w-full max-w-[640px] h-80 flex flex-col items-center gap-5 my-10">
                <h1 className="w-full text-3xl text-center text-gray-700">Nintendo Account</h1>
                <div className="w-full h-50 bg-white rounded-md flex flex-col items-center justify-center px-10 gap-6">
                    <p className="text-center text-sm text-gray-700">Sign in to your Nintendo Account <br /> or create a new account</p>
                    <div className="w-full flex flex-row gap-5">
                        <div className="w-full h-auto flex flex-col items-center justify-center gap-3">
                            <p className="w-full text-sm text-gray-500 font-bold text-center">For existing users</p>
                            <Link
                                to="/login"
                                className="flex w-full h-10 items-center justify-center text-md text-white rounded-3xl bg-red-600 cursor-pointer">
                                Sign in
                            </Link>
                        </div>
                        <div className="w-full h-auto flex flex-col items-center justify-center gap-3">
                            <p className="w-full text-sm text-gray-500 font-bold text-center">Don't have an account?</p>
                            <Link 
                                to="/register"
                                className="flex w-full h-10 items-center justify-center text-md text-white rounded-3xl bg-red-600 cursor-pointer">
                                Create a Nintendo Account
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}