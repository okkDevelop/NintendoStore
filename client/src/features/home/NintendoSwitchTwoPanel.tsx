export default function NintendoSwitch2Panel() {
    return (
        <div className="w-auto max-w-295 h-auto py-10 px-5
                    flex flex-col items-center justify-center gap-8
                    border-b-1 border-gray-200"
        >
            <h2
                className="w-full h-auto text-3xl font-bold text-gray-600"
            >
                Nintendo Switch 2
            </h2>

            <img
                className="w-full h-auto block md:hidden rounded-lg cursor-pointer"
                alt="Nintendo Switch 2 Mobile Banner"
                src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_500/ncom/en_US/merchandising/Showrooms/NS%20Home%20of%20Mario%20and%20Friends/2026/Homepage%20banners/1530x704_Ncom_homepage_hardware_M"
            />

            <img
                className="w-full rounded-xl cursor-pointer object-contain hidden md:block"
                alt="Nintendo Switch 2 Normal Banner"
                src='https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_1200/ncom/en_US/merchandising/Showrooms/NS%20Home%20of%20Mario%20and%20Friends/2026/Homepage%20banners/3600x1200_Ncom_homepage_hardware_D'
            />
            <div
                className="w-full h-auto 
                    flex flex-col lg:flex-row items-left lg:items-center justify-left gap-7"
            >
                <label className="font-bold text-xl text-gray-600">
                    Enjoy ways to play alongside Mario, Peach and many other Mushroom Kingdom friends on the Nintendo Switch 2 system.
                </label>

                <button
                    className="w-full h-12 lg:w-45 rounded-lg bg-red-600
                        flex items-center justify-center
                        text-xl text-white font-bold
                        hover:bg-red-800 hover:scale-110 
                        transition-[transform, background-color] duration-500
                        ease-out cursor-pointer">
                    Learn more
                </button>
            </div>
        </div>
    )
}