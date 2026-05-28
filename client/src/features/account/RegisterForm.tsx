import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { registerSchema, type RegisterSchema } from "../../lib/schemas/registerSchema";
import { useRegisterMutation } from "./accountApi";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function RegisterForm() {
    const [registerUser] = useRegisterMutation();

    const { register, setError, handleSubmit, formState: { errors, isValid, isLoading } } = useForm<RegisterSchema>({
        mode: 'onTouched',
        resolver: zodResolver(registerSchema)
    });

    const onSubmit = async (data: RegisterSchema) => {
        try {
            const formattedDate = `${data.year}-${data.month.padStart(2, '0')}-${data.day.padStart(2, '0')}`;

            const registrationData = {
                email: data.email,
                password: data.password,
                nickName: data.nickName,
                gender: data.gender,
                birthDay: formattedDate
            };

            await registerUser(registrationData).unwrap();

            console.log("Registration Successful!");
            console.log(registrationData);
        }
        catch (error) {
            const errorMessage = error?.data?.message || error?.message || "";

            if (typeof errorMessage === 'string') {
                const errorArray = errorMessage.split(',');

                errorArray.forEach(e => {
                    const cleanError = e.trim();
                    if (cleanError.includes('Password')) {
                        setError('password', { message: cleanError });
                    } else if (cleanError.includes('Email')) {
                        setError('email', { message: cleanError });
                    } else if (cleanError.includes('NickName')) {
                        setError('nickName', { message: cleanError });
                    }
                });
            }
        }
    }

    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword((state) => !state);
    }

    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword((state) => !state);
    }

    const currentYear = new Date().getFullYear();

    const years = Array.from({ length: 100 }, (_, i) => currentYear - i);
    const months = Array.from({ length: 12 }, (_, i) => i + 1);
    const days = Array.from({ length: 31 }, (_, i) => i + 1);

    return (
        <div className="w-full h-auto flex flex-col gap-5 items-center justify-center bg-gray-100 p-4">
            <div className="w-240 flex flex-col items-center justify-center">
                <h1 className="w-full py-8 text-2xl text-gray-700 text-center ">Create a Nintendo Account</h1>
                <div className="w-full h-40 flex flex-col justify-center bg-white rounded-lg gap-5 px-15">
                    <p className="text-sm text-center">
                        If you have an account for one of the following services, it's even easier to create a Nintendo Account
                    </p>
                    <div className="flex flex-row gap-3">
                        <button
                            type="submit"
                            className="w-full h-10 text-gray-600 rounded-3xl 
                                outline outline-gray-800">
                            Google
                        </button>
                        <button 
                            type="submit"
                            className="w-full h-10 bg-black rounded-3xl
                                text-white 
                                outline outline-gray-800">
                            Sign up with Apple
                        </button>
                    </div>
                </div>
            </div>

            <div className="w-240 h-auto bg-white rounded-lg p-3">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-full h-auto bg-gray-100 px-30 py-10
                        flex flex-col gap-10"
                >
                    <p className="text-sm text-gray">
                        If you don't have an account with one of the services listed about or would rather not use an existing account to creaet your Nintendo Account, player enter your information below
                    </p>

                    <div className="flex flex-row justify-between">
                        <div className="flex items-center h-10">
                            <p className="w-40 text-sm text-gray-900">Nickname</p>
                        </div>
                        <div className="w-110 flex flex-col gap-1">
                            <input
                                type="text"
                                placeholder="10 characters or less"
                                className="w-full h-10 bg-white rounded-md px-3
                                    border border-2 border-gray-300
                                    text-sm transition-all"
                                {...register("nickName")}
                            />
                            {errors.nickName && <span className="text-red-500 text-xs mt-1">{errors.nickName.message}</span>}
                            <p className="text-xs text-gray-700">
                                Note: This will be used in communications from Nintendo. It will not be shown to others without prior notice
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-row justify-between">
                        <div className="flex items-center h-10">
                            <p className="w-40 text-sm text-gray-900">E-mail address</p>
                        </div>
                        <div className="w-110 flex flex-col gap-1">
                            <input
                                type="text"
                                placeholder="E-mail address"
                                className="w-full h-10 bg-white rounded-md px-3
                                    border border-2 border-gray-300
                                    text-sm transition-all"
                                {...register('email')}
                            />
                                {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>}
                            <p className="text-xs text-gray-700">
                                * An email address accessible from a PC or web browser is recommended to create your Nintendo Account
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-row justify-between">
                        <div className="flex items-center h-10">
                            <p className="w-40 text-sm text-gray-900">Password</p>
                        </div>

                        <div className="w-110 flex flex-col gap-1">
                            <div className="relative w-110 flex items-center">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="At least 8 characters"
                                    className="w-110 h-10 bg-white rounded-md px-3
                                        flex flex-col gap-1
                                        border border-2 border-gray-300 
                                        text-sm transition-all "
                                    {...register('password')}
                                />

                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="absolute right-3 text-gray-500 hover:text-gray-700 transition-colors"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>

                            {errors.password && <span className="text-red-500 text-xs mt-1">{errors.password.message}</span>}
                        </div>
                    </div>

                    <div className="flex flex-row justify-between">
                        <div className="flex items-center h-10">
                            <p className="w-40 text-sm text-gray-900">Confirm password</p>
                        </div>

                        <div className="w-110 flex flex-col gap-1">
                            <div className="relative w-110 flex items-center">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="At least 8 characters"
                                    className="w-110 h-10 bg-white rounded-md px-3
                                        flex flex-col gap-1
                                        border border-2 border-gray-300
                                        text-sm transition-all "
                                    {...register("confirmPassword")}
                                />
                                <button
                                    type="button"
                                    onClick={toggleConfirmPasswordVisibility}
                                    className="absolute right-3 text-gray-500 hover:text-gray-700 transition-colors"
                                >
                                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>

                            {errors.confirmPassword && <span className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</span>}
                        </div>
                    </div>

                    <div className="flex flex-row justify-between">
                        <div className="flex items-center h-10">
                            <p className="w-40 text-sm text-gray-900">Date of birth</p>
                        </div>

                        <div className="w-110 flex flex-col gap-1">
                            <div className="w-110 flex flex-row justify-between gap-2">
                                <select
                                    className="w-full h-10 rounded-md px-2 bg-white 
                                            border-2 border-gray-300 text-sm"
                                    {...register("year")}
                                >
                                    <option value="">
                                        Year
                                    </option>
                                    {years.map(y =>
                                        <option
                                            key={y}
                                            value={y}
                                        >
                                            {y}
                                        </option>
                                    )}
                                </select>
                                <select
                                    className="w-full h-10 rounded-md px-2 bg-white 
                                            border-2 border-gray-300 text-sm"
                                    {...register("month")}
                                >
                                    <option value="">
                                        Month
                                    </option>
                                    {months.map(m =>
                                        <option
                                            key={m}
                                            value={m}
                                        >
                                            {m}
                                        </option>
                                    )}
                                </select>
                                <select
                                    className="w-full h-10 rounded-md px-2 bg-white 
                                            border-2 border-gray-300 text-sm"
                                    {...register("day")}
                                >
                                    <option value="">
                                        Day
                                    </option>
                                    {days.map(d =>
                                        <option
                                            key={d}
                                            value={d}
                                        >
                                            {d}
                                        </option>
                                    )}
                                </select>
                            </div>
                            <p className="text-xs text-gray-700">
                                *You can't change your date of birth later.
                            </p>
                            <div className="w-110 flex flex-row justify-left gap-20">
                                {errors.year && <span className="text-red-500 text-xs mt-1">{errors.year.message}</span>}
                                {errors.month && <span className="text-red-500 text-xs mt-1">{errors.month.message}</span>}
                                {errors.day && <span className="text-red-500 text-xs mt-1">{errors.day.message}</span>}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row justify-between">
                        <div className="flex items-center h-10">
                            <p className="w-40 text-sm text-gray-900">Gender</p>
                        </div>

                        <div className="w-110 flex flex-col gap-1">
                            <div className="w-110 flex flex-row justify-between gap-2">
                                <select
                                    className="w-full h-10 rounded-md px-2 bg-white 
                                        border-2 border-gray-300 text-sm"
                                    {...register("gender")}
                                >
                                    <option value="">
                                        (None selected)
                                    </option>
                                    <option value="male">
                                        Male
                                    </option>
                                    <option value="female">
                                        Female
                                    </option>
                                    <option value="unknown">
                                        Choose not to answer
                                    </option>
                                </select>
                            </div>
                            {errors.gender && <span className="text-red-500 text-xs mt-1">{errors.gender.message}</span>}
                        </div>
                    </div>

                    <div className="flex flex-col justify-between">
                        <div className="flex items-center mb-4">
                            <input
                                id="disabled-checkbox"
                                type="checkbox"
                                className="w-4 h-4 border border-light rounded-xs focus:ring-2 focus:ring-brand-soft"
                                {...register("userAgreement")}
                            />
                            <label className="select-none ms-2 text-sm text-xs">
                                By checking the box and selecting [Submit] below, you agree to the NINTENDO ACCOUNT USER AGREEMENT.
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input
                                id="disabled-checkbox"
                                type="checkbox"
                                className="w-4 h-4 border border-light rounded-xs focus:ring-2 focus:ring-brand-soft"
                                {...register("privacyPolicy")}
                            />
                            <label className="select-none ms-2 text-sm text-xs">
                                By checking the box and selecting [Submit] below, you acknowledge that you have read the
                                <Link
                                    to="/term-of-use"
                                    className="text-blue-600 underline font-semibold"
                                >
                                    NINTENDO PRIVACY POLICY
                                </Link>.
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-between">
                        <button
                            type="submit"
                            disabled={ isLoading || !isValid}
                            className={`w-40 h-10 rounded-full transition-colors ${isValid
                                ? 'bg-[#e60012] hover:bg-red-700 text-white cursor-pointer'
                                : 'bg-gray-300 text-white'
                                }`}
                        >
                        Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

//<div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-600 p-4">
//    <h1 className="text-3xl font-bold text-white mb-6">Nintendo Account</h1>

//    <form
//        onSubmit={handleSubmit(onSubmit)}
//        className="w-full max-w-md flex flex-col items-center justify-center bg-white p-8 rounded-lg shadow-xl"
//    >
//        <h2 className="text-lg font-semibold text-gray-800 mb-6">Create New Account</h2>

//        <div className="flex flex-col w-full mb-4">
//            <p className="mb-1 text-sm font-medium">Register Email</p>
//            <input
//                className={`w-full h-12 border rounded-md px-3 outline-none transition-all ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-blue-500'
//                    }`}
//                type="text"
//                {...register('email')}
//            />
//            {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>}
//        </div>

//        <div className="flex flex-col w-full mb-6">
//            <p className="mb-1 text-sm font-medium">Password</p>
//            <input
//                className={`w-full h-12 border rounded-md px-3 outline-none transition-all ${errors.password ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-blue-500'
//                    }`}
//                type="password"
//                {...register('password')}
//            />
//            {errors.password && <span className="text-red-500 text-xs mt-1">{errors.password.message}</span>}
//        </div>

//        <button
//            disabled={isLoading || !isValid}
//            type="submit"
//            className="w-full h-12 bg-[#e60012] hover:bg-red-700 text-white font-bold rounded-full cursor-pointer transition-colors"
//        >
//            Register
//        </button>
//        <Link
//            to="/login"
//            className="w-50 h-20 text-red-700 underline cursor-pointer">
//            Already has an account?
//        </Link>
//    </form>
//</div>