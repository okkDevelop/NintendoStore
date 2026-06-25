import { Link } from "react-router-dom";

export default function OnlineStorePanel() {
    return (
        <div className="w-auto max-w-295 h-auto py-10 px-5
                    flex flex-col items-center justify-center gap-5
                    border-b-1 border-gray-200"
        >
            <h2 className="w-full text-3xl font-bold text-gray-600">Online Store</h2>

            <img
                className="w-full h-auto block md:hidden rounded-lg cursor-pointer"
                alt="Nintendo Switch 2 Mobile Banner"
                src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_800/ncom/en_US/merchandising/Nintendo%20Store%20Banners/1372x640-NS-NCOM-Banner"
            />

            <img
                className="w-full rounded-xl cursor-pointer object-contain hidden md:block"
                src='https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_800/ncom/en_US/merchandising/Nintendo%20Store%20Banners/4576x704-NS-NCOM-Banner'
            />

            <div className="w-full flex flex-col lg:flex-row items-left lg:items-center justify-left gap-10">
                <label
                    className="font-bold text-xl text-gray-600"
                >
                    Jump for joy with games starring Mario and friends and Mushroom Kingdom merch! Plus, get free shipping on orders $50 and over.
                </label>

                <Link
                    to='/shop'
                    onClick={() => window.scrollTo(0, 0)}
                    className="w-full h-12 lg:w-60 rounded-lg bg-red-600
                        flex items-center justify-center
                        text-xl text-white font-bold
                        hover:bg-red-800 hover:scale-110 
                        transition-[transform, background-color] duration-500
                        ease-out cursor-pointer"
                >
                    Start shopping
                </Link>
            </div>
        </div>
    )
}