import { User as UserIcon, X, Check, NotepadText, ExternalLink, BookDown, Gift, GraduationCap, LogOut, Heart, Book, ReceiptText } from 'lucide-react';
import type { User } from "../models/user";
import { useLogoutMutation } from "../../features/account/accountApi";
import { Link } from "react-router-dom";

type Props = {
    user: User
    isPanelOpen: boolean;
    setPanelOpen: (value: boolean) => void;
}

export default function UserMenu({ user, isPanelOpen, setPanelOpen }: Props) {
    const [logout] = useLogoutMutation();

    return (
        <div
            className={`w-80 h-screen fixed top-0 right-0 z-60  p-4 overflow-y-auto bg-gray-100 
                flex flex-col gap-3 transition-transform cursor-default
                ${isPanelOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
            <div className="flex items-center justify-between mb-4">
                <h5 className="text-xl font-bold text-gray-700">
                    {user ? `Welcome ${user.email}` : "Log in/ Sign up"}
                </h5>
                <button
                    type="button"
                    onClick={() => setPanelOpen(false)}
                    className="rounded-full text-gray-100 bg-gray-300 hover:bg-gray-700 text-sm p-1.5 inline-flex items-center cursor-pointer"
                >
                    <X size={20}></X>
                </button>
            </div>

            {user ?
                <>
                    <div className="w-full h-30 bg-white rounded-lg 
                            flex items-center justify-center gap-2
                            outline outline-gray-300">
                        <span className="w-10 h-10 text-lg flex items-center justify-center text-gray-700 font-bold rounded-full bg-red-200">
                            {user.email.charAt(0).toLowerCase()}
                        </span>
                        <span className="text-lg text-gray-700 font-bold">
                            {user.email}
                        </span>
                    </div>
                </>
                :
                <>
                    <div className="w-full h-auto flex flex-col bg-white rounded-xl gap-1 p-5">
                        <img src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_300/Dev/Global%20Navigation/unauthd-asset.png" />
                        <h2 className="text-xl font-bold text-gray-700">With a free account, you can</h2>
                        <div className="flex flex-row items-center justify-left gap-2 font-bold text-gray-700">
                            <Check size={20}></Check>
                            <p className="text-sm">Shop online</p>
                        </div>
                        <div className="flex flex-row items-center justify-left gap-2 font-bold text-gray-700">
                            <Check size={20}></Check>
                            <p className="text-sm">Earn My Nintendo points</p>
                        </div>
                        <div className="flex flex-row items-center justify-left gap-2 font-bold text-gray-700">
                            <Check size={20}></Check>
                            <p className="text-sm">Save a Wish List</p>
                        </div>
                    </div>

                    <Link
                        to="/login-main"
                        onClick={() => {
                            window.scrollTo(0, 0);
                            setPanelOpen(false);
                        }}
                        className="w-full h-auto rounded-lg bg-red-600
                                    text-xl text-white font-bold text-center py-2"
                    > Log in
                    </Link>
                    <Link
                        to="/register"
                        onClick={() => {
                            window.scrollTo(0, 0);
                            setPanelOpen(false);
                        }}
                        className="w-full h-auto rounded-lg bg-white
                                    text-xl text-red-500 font-bold text-center py-2
                                    outline outline-1 outline-red-500"
                    > Sign up
                    </Link>
                </>
            }


            {user?.roles?.includes('Admin') ?
                <div className="w-full h-auto bg-white rounded-lg
                        flex flex-col items-center justify-left
                        text-lg text-gray-700 font-semibold text-center
                        outline outline-gray-300 divide-y divide-gray-200"
                >
                    <Link
                        to="/adminPage"
                        className="w-full px-5 py-1 cursor-pointer
                                flex flex-row items-center justify-left gap-2
                                hover:text-red-600 tansition duration-300"
                    >
                        <Heart className="text-red-500" size={20}></Heart>
                        <span>Admin portal</span>
                    </Link>
                </div>
                :
                null
            }

            {user ?
                <div className="w-full h-auto bg-white rounded-lg
                        flex flex-col items-center justify-left
                        text-lg text-gray-700 font-semibold text-center
                        outline outline-gray-300 divide-y divide-gray-200"
                >
                    <button className="w-full px-5 py-1 cursor-pointer
                                flex flex-row items-center justify-left gap-2
                                hover:text-red-600 tansition duration-300"
                    >
                        <Heart className="text-red-500" size={20}></Heart>
                        <span>Wish List</span>
                    </button>
                    <button className="w-full px-5 py-1 cursor-pointer
                                flex flex-row items-center justify-left gap-2
                                hover:text-red-600 tansition duration-300"
                    >
                        <ReceiptText className="text-red-500" size={20}></ReceiptText>
                        <span>Order history</span>
                    </button>
                    <button className="w-full px-5 py-1 cursor-pointer
                                flex flex-row items-center justify-left gap-2
                                hover:text-red-600 tansition duration-300"
                    >
                        <Book className="text-red-500" size={20}></Book>
                        <span>Address book</span>
                    </button>
                </div>
                :
                <div
                    className="w-full h-auto rounded-lg bg-white px-5 py-2
                                    flex flex-row items-center justify-left gap-2
                                    text-lg text-gray-700 font-semibold text-center
                                    outline outline-gray-300"
                >
                    <button className="flex flex-row items-center justify-left gap-2">
                        <NotepadText className="text-red-500" size={20}></NotepadText>
                        <span>Order status</span>
                    </button>
                </div>
            }

            <div className="w-full h-auto bg-white rounded-lg outline outline-gray-300 divide-y divide-gray-200">
                <button
                    type="button"
                    className="w-full flex items-center px-4 py-2 text-gray-600
                        group hover:text-red-500 transition duration-300 cursor-pointer"
                >
                    <div className="flex items-center gap-2 flex-grow">
                        <BookDown className="text-red-500" size={20} />
                        <span className="text-left font-bold ">Virtual Game Cards</span>
                    </div>
                    <ExternalLink size={20}/>
                </button>

                <button 
                    type="button" 
                    className="w-full flex items-center px-4 py-2 text-gray-600
                        group hover:text-red-500 transition duration-300 cursor-pointer"
                >
                    <div className="flex items-center gap-2 flex-grow">
                        <Gift className="text-red-500" size={20} />
                        <span className="text-left font-bold">Redeem code</span>
                    </div>
                    <ExternalLink size={20}/>
                </button>
                <button 
                    type="button" 
                    className="w-full flex items-center px-4 py-2 text-gray-600
                        group hover:text-red-500 transition duration-300 cursor-pointer"
                >
                    <div className="flex items-center gap-2 flex-grow">
                        <GraduationCap className="text-red-500" size={20} />
                        <span className="text-left font-bold">My Nintendo</span>
                    </div>
                    <ExternalLink size={20}/>
                </button>
                <button 
                    type="button" 
                    className="w-full h-12 flex items-center px-4 py-2 text-gray-600
                        group hover:text-red-500 transition duration-300 cursor-pointer"
                >
                    <div className="flex items-center gap-2 flex-grow">
                        <UserIcon className="text-red-500" size={20} />
                        <span className="text-left font-bold">Nintendo Account Overview</span>
                    </div>
                    <ExternalLink size={20}/>
                </button>
            </div>

            <button
                onClick={logout}
                type="button"
                className={`w-full h-auto rounded-lg bg-blue-700 cursor-pointer py-2
                    text-white text-lg font-bold
                    flex flex-row items-center justify-center gap-5
              ${user ? 'block' : 'hidden'}`}
            >
                <LogOut></LogOut>
                <span>Sign out</span>
            </button>
        </div>
    )
}