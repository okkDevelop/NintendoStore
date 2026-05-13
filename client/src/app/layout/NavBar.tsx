import { Search, ShoppingCart, User, Compass, Handbag, ShieldQuestionMark, Heart, Flag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useFetchCartQuery } from '../../features/cart/cartApi';
import UserMenu from './UserMenu';
import { useUserInfoQuery } from '../../features/account/accountApi';

export default function NavBar() {
    const { data: user} = useUserInfoQuery();
    const { data: cart } = useFetchCartQuery();
    const itemCount = cart?.items.reduce((sum, item) => sum + item.quantity, 0) || 0;

    return (
        <div className="flex h-16 bg-white border-b-1 border-grey-100">
            <Link to="/" className="flex h-full items-center bg-red-500 px-2 text-xl text-white">
                <img className="h-full w-full" src="https://1000logos.net/wp-content/uploads/2017/03/Nintendo-Logo-1983.png"/>
            </Link>

            {/*explore drop down panel*/}
            <div className="">
            </div>

            <div className="flex flex-1 items-center justify-between bg-white px-8">
                <div>
                    <div className="hidden md:flex gap-8 font-bold text-gray-700">

                        <button
                            className="overflow-y-auto inline-flex items-center justify-center font-medium leading-5 px-4 py-2.5"
                            type="button"
                            aria-controls="drawer-top-explore">
                            <Compass className="text-red-600" size={18} />
                            <div className="hover:text-red-600 transition">Explore</div>
                        </button>

                        <Link to="catalog" className="flex items-center gap-2">
                            <Handbag className="text-red-600" size={18} />
                            <div className="hover:text-red-600 transition">Shop</div>
                        </Link>
                        <div className="flex items-center gap-2">
                            <ShieldQuestionMark className="text-red-600" size={18} />
                            <div className="hover:text-red-600 transition">Support</div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-5 cursor-pointer">
                    <div className="group flex h-8 w-24 items-center justify-center gap-2 rounded-full bg-gray-100">
                        <Search className="text-gray-600 group-hover:text-red-600" size={20} />
                        <span className="font-bold text-gray-600 group-hover:text-red-600">Search</span>
                    </div>
                    <div className="group flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
                        <Heart className="text-gray-600 group-hover:text-red-600" size={20} />
                    </div>

                    <Link to="cart"
                        className="group flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
                        <div className="text-lg">{itemCount}</div>
                        <ShoppingCart className="group-hover:text-red-600 transition" size={20} />
                    </Link>

                    {user ? (
                        <UserMenu user={user}></UserMenu>
                    ) : (
                        <Link to="login"
                            className="group flex h-8 w-40 items-center justify-center gap-2 rounded-full bg-gray-100">
                            <User className="group-hover:text-red-600 transition" size={20} />
                            <span className="group-hover:text-red-600 transition text-sm font-bold">Log In / Sign Up</span>
                        </Link> 
                    )}

                    <Flag className="hover:text-red-600 transition" size={20} />
                </div>
            </div>
        </div>
    )
}