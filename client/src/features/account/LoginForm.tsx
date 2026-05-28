import { useForm } from "react-hook-form";
import { loginSchema, type LoginSchema } from "../../lib/schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLazyUserInfoQuery, useLoginMutation } from "./accountApi";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { ScanFace, FingerprintPattern } from "lucide-react";

export default function LoginForm() {
    const location = useLocation();
    const navigate = useNavigate();
    const [fetchUserInfo] = useLazyUserInfoQuery();
    const [login, { isLoading }] = useLoginMutation();
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<LoginSchema>({
        mode: 'onTouched',
        resolver: zodResolver(loginSchema)
    })

    const onValidate = async (data: LoginSchema) => {
        await login(data);
        await fetchUserInfo();
        navigate(location.state?.from || '/')
    }

    return (
        <div className="w-full h-auto flex flex-col items-center justify-center bg-gray-100 py-10 gap-8">
            <h1 className="text-3xl text-gray-700">Nintendo Account</h1>

            <div className="w-full h-auto flex flex-col items-center justify-center">
                <form
                    onSubmit={handleSubmit(onValidate)}
                    className="w-full max-w-md flex flex-col items-center justify-center gap-5 
                    bg-white rounded-lg 
                    outline-1 outline-solid outline-gray-300"
                >
                    <p className="text-md font-bold text-gray-700 mb-6 pt-8">Sign in with password</p>

                    <div className="flex flex-col w-full px-10">
                        <p className="mb-1 text-sm">E-mail address/Sign-in ID</p>
                        <input
                            type="text"
                            placeholder="E-mail address/Sign-in Id"
                            className="w-full h-10 border rounded-md px-3 text-sm transition-all border-2 border-gray-300"
                            {...register('email')}
                        />
                        {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>}
                    </div>

                    <div className="flex flex-col w-full px-10">
                        <p className="mb-1 text-sm">Password</p>
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full h-10 border rounded-md px-3 text-sm transition-all border-2 border-gray-300"
                            {...register('password')}
                        />
                        {errors.password && <span className="text-red-500 text-xs mt-1">{errors.password.message}</span>}
                    </div>

                    <div className="w-full h-25 flex items-center justify-center bg-gray-100">
                        <button
                            type="submit"
                            disabled={!isValid || isLoading}
                            className={`w-40 h-10 rounded-full transition-colors ${isValid
                                ? 'bg-[#e60012] hover:bg-red-700 text-white cursor-pointer'
                                : 'bg-gray-300 text-white'
                                }`}
                        >
                            Sign In
                        </button>
                    </div>
                </form>
            </div>

            <div className="w-full h-auto flex flex-col items-center justify-center">
                <div className="w-full max-w-md flex flex-col items-center justify-center gap-5 
                bg-white rounded-lg 
                outline-1 outline-solid outline-gray-300"
                >
                    <p className="text-md font-bold text-gray-700 mb-6 pt-8">Passkey Sign-in</p>

                    <div className="w-full h-20 flex flex-row items-center justify-center gap-5">
                        <ScanFace className="text-blue-600" size={ 50 } />
                        <FingerprintPattern className="text-blue-600" size={50}/>
                    </div>

                    <div className="w-full h-25 flex items-center justify-center bg-gray-100">
                        <button
                            type="submit"
                            disabled={ isLoading}
                            className="w-40 h-10 rounded-full text-sm
                                bg-white hover:bg-gray-400 text-black outline-cursor-pointer transition-colors duration-300
                                outline-1 outline-solid outline-gray-500"
                        >
                            Sign In
                        </button>
                    </div>
                </div>
            </div>

            <div className="w-full h-auto flex flex-col items-center justify-center">
                <div className="w-full max-w-md flex flex-col items-center justify-center gap-5 
                bg-white rounded-lg px-10 py-5
                outline-1 outline-solid outline-gray-300"
                >
                    <p className="text-md font-bold text-gray-700">Sign-in with</p>

                    <button
                        type="submit"
                        className="w-full h-10 rounded-lg 
                        outline-1 outline-gray-500"
                    >Google
                    </button>
                    <button
                        type="submit"
                        className="w-full h-10 rounded-lg text-white bg-black
                        outline-1 outline-gray-500"
                    >Sign in with Apple
                    </button>
                </div>
            </div>

            <p className="text-md text-gray-900">Don't have an account?</p>
            <Link
                to="/register"
                className="w-50 h-10 flex items-center justify-center text-sm text-gray-700 rounded-3xl outline cursor-pointer hover:bg-gray-300 transition-color duration-300">
                Create a Nintendo Account
            </Link>
        </div>
    )
}