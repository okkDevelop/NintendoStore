export default function ExpansionPack() {
    return (
        <div className="w-auto max-w-295 h-auto py-10 px-5
                    flex flex-col items-center justify-center gap-7
                    border-b-1 border-gray-200"
        >
            <h2
                className="w-full text-3xl font-bold text-gray-600"
            >
                Nintendo Switch Online + Expansion Pack
            </h2>

            <img
                className="w-full h-auto block md:hidden rounded-lg object-contain cursor-pointer"
                alt="Nintendo Today Mobile Banner"
                src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/en_US/homepage%20assets/NSO%20+%20Expansion%20Pack%20Banner/1372x640_M_-_UP_-_EN"
            />

            <img
                className="w-full rounded-xl cursor-pointer object-contain hidden md:block"
                alt="Expansion Pack Normal Banner"
                src='https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_1200/ncom/en_US/homepage%20assets/NSO%20+%20Expansion%20Pack%20Banner/4576x704_D_-_UP_-_EN'
            />
            <div
                className="flex flex-col lg:flex-row items-left lg:items-center justify-left w-full gap-7"
            >
                <label className="font-bold text-xl text-gray-600"
                >
                    Play online, discover the classics, and more
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
            <p
                className="w-full text-xs text-black"
            >
                *Full version of game required to use the content for that game. Sold separately. For details visit https://support.nintendo.com/switch2/upgradepack. Terms apply. https://www.nintendo.com/us/purchase-terms/
            </p>
        </div>
    )
}