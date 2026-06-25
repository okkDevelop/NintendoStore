import { Link } from "react-router-dom";

export default function NintendoSwitch2Panel() {
    return (
        <div className="w-auto max-w-295 h-auto py-10 px-5
                    flex flex-col items-center justify-center gap-8
                    border-b-1 border-gray-200"
        >
            <h2
                className="w-full h-auto text-3xl font-bold text-gray-600"
            >
                Gaming systems
            </h2>

            <img
                className="w-full h-auto block md:hidden rounded-lg cursor-pointer"
                alt="Nintendo Switch 2 Mobile Banner"
                src='https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/en_US/merchandising/Gaming%20Systems%20banner/Nintendo%20Switch%202%20features/NCOM-Home-NS2-section-mobile'
            />

            <img
                className="w-full rounded-xl cursor-pointer object-contain hidden md:block"
                alt="Nintendo Switch 2 Normal Banner"
                src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_1200/ncom/en_US/merchandising/Gaming%20Systems%20banner/Nintendo%20Switch%202%20features/NCOM-Home-NS2-section-desktop"
            />
            <div
                className="w-full h-auto 
                    flex flex-col lg:flex-row items-left lg:items-center justify-left gap-7"
            >
                <span className="font-bold text-xl text-gray-600">
                    Get to know the Nintendo Switch 2 system
                </span>

                <Link
                    to="/gamingFeatures"
                    className="w-full h-12 lg:w-45 rounded-lg bg-red-600
                        flex items-center justify-center
                        text-xl text-white font-bold
                        hover:bg-red-800 hover:scale-110 
                        transition-[transform, background-color] duration-500
                        ease-out cursor-pointer">
                    Learn more
                </Link>
            </div>
        </div>
    )
}