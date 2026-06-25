export default function NintendoTodayPanel() {
    return (
        <section className="w-auto max-w-295 h-auto py-10 px-5
                    flex flex-col items-center justify-center gap-5
                    border-b-1 border-gray-200"
        >
            <h2
                className="w-full h-auto 
                    text-3xl text-left text-gray-700 font-bold"
            >
                Nintendo Today!
            </h2>

            <img
                className="w-full h-auto block md:hidden rounded-lg object-contain cursor-pointer"
                alt="Nintendo Today Mobile Banner"
                src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_500/ncom/en_US/homepage%20assets/Nintendo%20Today/1200x560_v03"
            />
            <img
                className="w-full rounded-xl cursor-pointer object-contain hidden md:block"
                alt="Nintendo Today Normal Banner"
                src='https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_1200/ncom/en_US/homepage%20assets/Nintendo%20Today/1880x277_v02'
            />

            <div
                className="w-full h-auto 
                    flex flex-col lg:flex-row items-left lg:items-center justify-left gap-8"
            >
                <label
                    className="font-bold text-xl text-gray-600"
                >
                    Your movie companion: Nintendo Today!
                </label>
                <button
                    className="w-full h-12 lg:w-35 rounded-lg bg-red-600 
                            text-white text-lg font-bold
                            hover:bg-red-800 hover:scale-105 cursor-pointer
                            transition-[transform, background-color] duration-500 ease-out"
                >
                    Learn more
                </button>
            </div>
            <label
                className="w-full text-xs text-gray-800"
            >
                Nintendo Account, compatible smart device and persistent internet connection required. Data charges may apply. Requires iOS 16.0 or later. Requires Android 10.0 or later.
            </label>
        </section>
    )
}
