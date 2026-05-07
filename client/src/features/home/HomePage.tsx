import { useState, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import FeaturesCard from '../catalog/FeaturesCard';
import CharactersCard from '../catalog/CharactersCard';
import { Link } from 'react-router-dom';

const heroContents = [
    {
        description: 'Build a cozy new life with Pokemon-only on Nintendo Switch 2!',
        image: 'https://www.nintendo.com/eu/media/images/assets/nintendo_switch_2_games/pokemonpokopia/16x9_NSwitch2_PokemonPokopia_image1280w.png'
    },
    {
        description: 'Wish list now! Experience the Flower Kingdom wonders on 3/26, enhanced for Nintendo Switch 2',
        image: 'https://i.ytimg.com/vi/JStAYvbeSHc/maxresdefault.jpg'
    },
    {
        description: 'In the theaters 4/1. Learn more about The Super Mario Galaxy Movie',
        image: 'https://mario.wiki.gallery/images/thumb/7/77/TSMGM_Activity_Kit.png/1200px-TSMGM_Activity_Kit.png'
    },
    {
        description: 'The next chapter of Minecraft Hungeons begins this fall',
        image: 'https://assets.nintendo.com/image/upload/f_auto/q_auto/c_fill,w_1500/dpr_2.0/ncom/en_US/merchandising/center-stage-stories/2026/03-March/3P%20Title/MC/Minecraft-Centerstage-STATIC_2880x900'
    }
]

const featuresContents = [
    {
        img: 'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/merchandising/feature-banner/2026/Tomodachi%20Life:%20Living%20the%20Dream/Tomodachi-Life-Hero',
        description: 'Play the free demo today!'
    },
    {
        img: 'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/My%20Nintendo%20Store/EN-US/MNS%20HOME/General/Talking%20Flower%20PMP/keyart',
        description: 'Add some whimsy to your day with Taling Flower'
    },
    {
        img: 'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/articles/2026/pokemon-firered-version-and-pokemon-leafgreen-version-are-coming-to-nintendo-switch-in-multiple-languages/2250x1266_PRG_EN',
        description: 'Pokemon FireRed Version & Pokemon LeafGreen Version'
    }
]

const characterContents = [
    {
        title: 'Super Mario',
        img: 'https://static.vecteezy.com/system/resources/previews/013/113/508/non_2x/the-illustration-of-super-super-mario-mario-free-vector.jpg',
    },
    {
        title: 'The Legend of Zelda',
        img: 'https://imgcdn.stablediffusionweb.com/2024/10/27/bfbb2b5a-effb-471d-acf5-02ef9b6973e5.jpg',
    },
    {
        title: 'Splatoon',
        img: 'https://splatoon.nintendo.com/base/images/share-tw.jpg',
    },
    {
        title: 'Kirby',
        img: 'https://cdn.wikirby.com/thumb/f/f9/KSA_Tip_Image_Capture_Button.png/250px-KSA_Tip_Image_Capture_Button.png',
    },
    {
        title: 'Pikmin',
        img: 'https://play.nintendo.com/images/PLAY_6760_Spring_Poll_2025_1x1_1edSazT.a25bebd1.67f98f7b58b63e27.jpg',
    },
    {
        title: 'Animal Crossing',
        img: 'https://assets.nintendo.eu/image/private/f_auto/q_auto/v1773273987/akfqabu9nsgk6gti20zq.jpg',
    },
    {
        title: 'Metroid',
        img: 'https://assets.nintendo.com.au/image/upload/f_auto,q_auto/NAL/Migration/MetroidPrime4Beyond/1x1_NSwitch2_MetroidPrime4BeyondNS2Ed_S2Bar.jpg',
    },
    {
        title: 'Pokémon',
        img: 'https://4kwallpapers.com/images/wallpapers/pikachu-pokemon-1280x1280-10906.png',
    }
]

export default function HomePage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (!isPaused) {
            const timer = setInterval(() => {
                setCurrentIndex((prevIndex) =>
                    prevIndex === heroContents.length - 1 ? 0 : prevIndex + 1
                );
            }, 3000);

            return () => clearInterval(timer);
        }
    }, [isPaused, currentIndex]);

    const togglePause = () => {
        setIsPaused((prev) => !prev);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    const currentHero = heroContents[currentIndex];

    return (
        <div className="w-full flex flex-col bg-white">
            {/* ===== HERO PANEL AREA ===== */}
            <div>
                {/*hero panel image swiping*/}
                <div className="w-full h-[500px] overflow-hidden bg-gray-200">
                    <img
                        key={currentHero.image}
                        src={currentHero.image}
                        alt="Hero Visual"
                        className="w-full h-full object-cover transition-opacity duration-700"
                    />
                </div>

                {/*hero panel description swiping*/}
                <div className="flex flex-col items-left justify-center text-left py-10 px-6">
                    <p className="max-w-4xl text-2xl md:text-3xl font-bold text-gray-800 leading-snug transition-all duration-500">
                        {currentHero.description}
                    </p>
                </div>

                {/*hero panel element button*/}
                <div className="flex items-center justify-center gap-4 py-6">
                    <button
                        onClick={togglePause}
                        className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer"
                    >
                        {isPaused ? <Play size={20} /> : <Pause size={20} />}
                    </button>

                    {heroContents.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-4 w-4 rounded-full transition-all ${currentIndex === index ? 'bg-red-500 scale-125' : 'bg-gray-300'} cursor-pointer`}
                        />
                    ))}
                </div>
            </div>
            {/* ^^^^^ HERO PANEL AREA ^^^^^ */}

            <div className="mx-10 border-b-[1px] border-gray-200"></div>

            {/* ===== FEATURED PANEL AREA ===== */}
            <div className="h-100 w-full bg-white p-5">
                <div className="h-10 w-full font-bold text-black text-3xl">Features</div>
                <div className="flex items-center justify-center gap-4">
                    {featuresContents.map((content, index) => (
                        <FeaturesCard
                            key={index}
                            image={content.img}
                            description={content.description}
                        />
                    ))}
                </div>
            </div>
            {/* ^^^^^ FEATURED PANEL AREA ^^^^^ */}

            <div className="mx-10 border-b-[1px] border-gray-200"></div>

            {/* ===== NINTENDO TODAY PANEL AREA ===== */}
            {/*<div className="w-[90%] max-w-[1200px] mx-auto flex flex-col justify-center gap-8 h-115 w-290 bg-white">*/}
            <div className="w-[90%] max-w-[1200px] h-auto mx-auto flex flex-col justify-center gap-8 bg-white py-10">
                <h2 className="w-full text-3xl font-bold text-gray-600">Nintendo Today!</h2>
                <img className="h-auto w-full rounded-xl cursor-pointer" src='https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_1200/ncom/en_US/homepage%20assets/Nintendo%20Today/1880x277_v02' />
                <div className="flex flex-col lg:flex-row items-left lg:items-center justify-left w-full gap-7">
                    <div className="font-bold text-xl text-gray-600">Your movie companion: Nintendo Today!</div>
                    <div className="flex w-full h-15 lg:w-35 lg:h-12 items-center justify-center rounded-lg bg-red-600 text-white font-bold hover:bg-red-800 hover:scale-110 transition-[transform, background-color] duration-500 ease-out cursor-pointer">Learn more</div>
                </div>
                <p className="w-full text-xs text-black">Nintendo Account, compatible smart device and persistent internet connection required. Data charges may apply. Requires iOS 16.0 or later. Requires Android 10.0 or later.</p>
            </div>
            {/* ^^^^^ NINTENDO TODAY PANEL AREA ^^^^^ */}

            <div className="mx-10 border-b-[1px] border-gray-200"></div>

            {/* ===== NINTENDO SWITCH 2 AREA ===== */}
            <div className="w-[90%] max-w-[1200px] h-auto mx-auto flex flex-col justify-center gap-8 bg-white py-10">
                <h2 className="w-full text-3xl font-bold text-gray-600">Nintendo Switch 2</h2>
                <img className="h-auto w-full rounded-xl cursor-pointer" src='https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_1200/ncom/en_US/merchandising/Showrooms/NS%20Home%20of%20Mario%20and%20Friends/2026/Homepage%20banners/3600x1200_Ncom_homepage_hardware_D' />
                <div className="flex flex-col lg:flex-row items-left lg:items-center justify-left w-full gap-7">
                    <div className="font-bold text-2xl text-gray-600">Enjoy ways to play alongside Mario, Peach and many other Mushroom Kingdom friends on the Nintendo Switch 2 system.</div>
                    <div className="flex w-full h-15 lg:w-35 lg:h-12 items-center justify-center rounded-lg bg-red-600 text-white font-bold hover:bg-red-800 hover:scale-110 transition-[transform, background-color] duration-500 ease-out cursor-pointer">Learn more</div>
                </div>
            </div>
            {/* ^^^^^ NINTENDO SWITCH 2 AREA ^^^^^ */}

            <div className="mx-10 border-b-[1px] border-gray-200"></div>

            {/* ===== ONLINE STORE PANEL AREA ===== */}
            <div className="w-[90%] max-w-[1200px] h-auto mx-auto flex flex-col justify-center gap-8 bg-white py-10">
                <h2 className="w-full text-3xl font-bold text-gray-600">Online Store</h2>
                <img className="h-auto w-full rounded-xl cursor-pointer" src='https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_1200/ncom/en_US/merchandising/MNS_desktop_TEST' />
                <div className="flex flex-col lg:flex-row items-left lg:items-center justify-left w-full gap-7">
                    <div className="font-bold text-2xl text-gray-600">Shop games, exclusive Nintendo merchandise, and more! Plus, get free shipping on orders $50 and over.</div>
                    <Link
                        to='/shop'
                        onClick={() => window.scrollTo(0, 0)}
                        className="flex w-full h-15 lg:w-35 lg:h-12 items-center justify-center rounded-lg bg-red-600 text-white font-bold 
hover:bg-red-800 hover:scale-110 transition-[transform, background-color] duration-500 ease-out cursor-pointer"
                        >Start shopping
                    </Link>
                </div>
            </div>
            {/* ^^^^^ ONLINE STORE PANEL AREA ^^^^^ */}

            <div className="mx-10 border-b-[1px] border-gray-200"></div>

            {/* ===== NINTENDO SWITCH EXTENSION PACK PANEL AREA ===== */}
            <div className="w-[90%] max-w-[1200px] h-auto mx-auto flex flex-col justify-center gap-8 bg-white py-10">
                <h2 className="w-full text-3xl font-bold text-gray-600">Nintendo Switch Online + Expansion Pack</h2>
                <img className="h-auto w-full rounded-xl cursor-pointer" src='https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_1200/ncom/en_US/homepage%20assets/NSO%20+%20Expansion%20Pack%20Banner/4576x704_D_-_UP_-_EN' />
                <div className="flex flex-col lg:flex-row items-left lg:items-center justify-left w-full gap-7">
                    <div className="font-bold text-xl text-gray-600">Play online, discover the classics, and more</div>
                    <div className="flex w-full h-15 lg:w-35 lg:h-12 items-center justify-center rounded-lg bg-red-600 text-white font-bold hover:bg-red-800 hover:scale-110 transition-[transform, background-color] duration-500 ease-out cursor-pointer">Learn more</div>
                </div>
                <p className="w-full text-xs text-black">*Full version of game required to use the content for that game. Sold separately. For details visit https://support.nintendo.com/switch2/upgradepack. Terms apply. https://www.nintendo.com/us/purchase-terms/</p>
            </div>
            {/* ^^^^^ NINTENDO SWITCH EXTENSION PACK PANEL AREA ^^^^^ */}
            <div className="mx-10 border-b-[1px] border-gray-200"></div>

            {/* ===== NEWS PANEL AREA ===== */}
            <div className="h-100 w-full bg-white p-5">
                <div className="w-[90%] max-w-[1200px] h-auto mx-auto flex flex-col justify-center gap-8 bg-white py-10">
                    <h2 className="w-full text-3xl font-bold text-gray-600">News</h2>
                </div>
            </div>
            {/* ^^^^^ NEWS PANEL AREA ^^^^^ */}

            <div className="mx-10 border-b-[1px] border-gray-200"></div>
            {/* ===== CHARACTERS PANEL AREA ===== */}
            <div className="w-[90%] max-w-[1200px] h-auto mx-auto flex flex-col justify-center gap-8 bg-white py-10">
                <h2 className="w-full text-3xl font-bold text-gray-600">Character</h2>
                <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
                    {characterContents.map((content, index) => (
                        <CharactersCard
                            key={index}
                            title={content.title}
                            img={content.img}
                        />
                    ))}
                </div>
            </div>
            {/* ^^^^^ CHARACTERS PANEL AREA ^^^^^ */}
            <div className="mx-10 border-b-[1px] border-gray-200"></div>
            {/* ===== PRODUCT CARD PANEL AREA ===== */}
            <div className="h-100 w-full bg-white p-5">Product Card

            </div>
            {/* ^^^^^ PRODUCT CARD PANEL AREA ^^^^^ */}
        </div>
    )
}