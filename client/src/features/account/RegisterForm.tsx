import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { registerSchema, type RegisterSchema } from "../../lib/schemas/registerSchema";
import { useRegisterMutation } from "./accountApi";
import { Link } from "react-router-dom";

export default function RegisterForm() {
    const [registerUser] = useRegisterMutation();

    const { register, setError, handleSubmit, formState: { errors, isValid, isLoading } } = useForm<RegisterSchema>({
        mode: 'onTouched',
        resolver: zodResolver(registerSchema)
    });

    const onSubmit = async (data: RegisterSchema) => {
        try {
            await registerUser(data).unwrap();
        }
        catch (error) {
            const apiError = error as { message: string }
            if (apiError.message && typeof apiError.message === 'string') {
                const errorArray = apiError.message.split(',');

                errorArray.forEach(e => {
                    if (e.includes('Password')) {
                        setError('password', { message: e })
                    }
                    else if (e.includes('Email')) {
                        setError('email', { message: e })
                    }
                })
            }
        }
    }

    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-600 p-4">
            <h1 className="text-3xl font-bold text-white mb-6">Nintendo Account</h1>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full max-w-md flex flex-col items-center justify-center bg-white p-8 rounded-lg shadow-xl"
            >
                <h2 className="text-lg font-semibold text-gray-800 mb-6">Create New Account</h2>

                <div className="flex flex-col w-full mb-4">
                    <p className="mb-1 text-sm font-medium">Register Email</p>
                    <input
                        className={`w-full h-12 border rounded-md px-3 outline-none transition-all ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-blue-500'
                            }`}
                        type="text"
                        {...register('email')}
                    />
                    {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>}
                </div>

                <div className="flex flex-col w-full mb-6">
                    <p className="mb-1 text-sm font-medium">Password</p>
                    <input
                        className={`w-full h-12 border rounded-md px-3 outline-none transition-all ${errors.password ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-blue-500'
                            }`}
                        type="password"
                        {...register('password')}
                    />
                    {errors.password && <span className="text-red-500 text-xs mt-1">{errors.password.message}</span>}
                </div>

                <button
                    disabled={isLoading || !isValid}
                    type="submit"
                    className="w-full h-12 bg-[#e60012] hover:bg-red-700 text-white font-bold rounded-full cursor-pointer transition-colors"
                >
                    Register
                </button>
                <Link
                    to="/login"
                    className="w-50 h-20 text-red-700 underline cursor-pointer">
                    Already has an account?
                </Link>
            </form>
        </div>    )

}