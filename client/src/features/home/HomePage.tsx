import { useState, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import FeaturesCard from '../catalog/FeaturesCard';
import CharactersCard from '../catalog/CharactersCard';
import { Link } from 'react-router-dom';
import NintendoTodayPanel from './NintendoTodayPanel';
import NintendoSwitch2Panel from './NintendoSwitchTwoPanel';
import OnlineStorePanel from './OnlineStorePanel';
import ExpansionPack from './ExpansionPack';
import NewsList from '../news/NewsList';

const heroContents = [
    {
        description: "Discover a world of quirky creatures-available 5/21",
        image: "https://assets.nintendo.com/image/upload/f_auto/q_auto/c_fill,w_1100/ncom/en_US/merchandising/center-stage-stories/2026/03-March/Yoshi's%20MB/2880x900-YMB-Static",
        previewImg: "https://assets.nintendo.com/image/upload/q_auto:best/f_auto/c_fill,h_56,w_56/dpr_1.0/ncom/en_US/merchandising/center-stage-stories/2026/03-March/Yoshi's%20MB/96x96-YMB-Static",
        colorTheme: "green-500"
    },
    {
        description: "Pre-order now! Blast off on a high-octance adventure with Fox McCloud-available 6/25",
        image: "https://assets.nintendo.com/image/upload/f_auto/q_auto/c_fill,w_1100/ncom/en_US/merchandising/center-stage-stories/2026/05-May/SF/d-ncom-cs-56-static",
        previewImg: "https://assets.nintendo.com/image/upload/q_auto:best/f_auto/c_fill,h_56,w_56/dpr_1.0/ncom/en_US/merchandising/center-stage-stories/2026/05-May/SF/ncom-cs-56-thumb",
        colorTheme: "red-500"
    },
    {
        description: "Help your Mii creations live their best lives-available now!",
        image: "https://assets.nintendo.com/image/upload/f_auto/q_auto/c_fill,w_1100/ncom/en_US/merchandising/center-stage-stories/2026/01-January/TL/TomodachiLife-2880x900-Centerstage-DT-STATIC_v05",
        previewImg: "https://assets.nintendo.com/image/upload/q_auto:best/f_auto/c_fill,h_56,w_56/dpr_1.0/ncom/en_US/merchandising/center-stage-stories/2026/01-January/TL/TomodachiLife-512x512-Thumbnail_v01",
        colorTheme: "orange-500"
    },
    {
        description: "Unravel one of history's greatest mysteries-available now",
        image: "https://assets.nintendo.com/image/upload/f_auto/q_auto/c_fill,w_1100/Nintendo%20Direct/Rjfjv9m8OTpi/relic/d_paused",
        previewImg: "https://assets.nintendo.com/image/upload/q_auto:best/f_auto/c_fill,h_56,w_56/dpr_1.0/Nintendo%20Direct/Rjfjv9m8OTpi/relic/thumb",
        colorTheme: "stone-500"
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
            }, 5000);

            return () => clearInterval(timer);
        }
    }, [isPaused, currentIndex]);

    const togglePause = () => {
        setIsPaused((prev) => !prev);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className="w-full flex flex-col items-center justify-center bg-white">
            {/* ===== HERO PANEL AREA ===== */}
            <div className="flex flex-col border-b-1 border-gray-200">
                <div
                    className="flex flex-row w-full transition-transform duration-500"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {heroContents.map((content, index) => (
                        <div
                            key={index}
                            className="w-full h-auto flex flex-col flex-shrink-0 gap-5"
                        >
                            <img
                                src={content.image}
                                alt="Hero Visual"
                                className="w-full h-auto object-contain cursor-pointer"
                            />

                            <label className="w-auto h-auto mx-8
                                        text-2xl md:text-3xl hover:text-red-500 font-bold text-gray-800
                                        cursor-pointer transition-all duration-500"
                            >
                                {content.description}
                            </label>
                        </div>
                    ))}
                </div>

                <div className="flex flex-row items-center justify-center gap-4 py-8">
                    <button
                        onClick={togglePause}
                        className="h-10 w-10 flex items-center justify-center rounded-full 
                            bg-red-500 hover:bg-red-800 cursor-pointer
                            text-white"
                    >
                        {isPaused ?
                            <Play className="fill-white" size={20} /> :
                            <Pause className="fill-white" size={20} />
                        }
                    </button>

                    {heroContents.map((content, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-10 w-10 rounded-lg transition-all cursor-pointer
                            ${currentIndex === index ? 'scale-125' : 'bg-gray-300'} 
                            outline-2 outline-offset-2`}
                            style={{
                                outlineColor: currentIndex === index ? `var(--color-${content.colorTheme})` : 'transparent'
                            } }
                        >
                            <img
                                src={content.previewImg}
                                className="rounded-lg object-contain"
                            />
                        </button>
                    ))}
                </div>
            </div>
            {/* ^^^^^ HERO PANEL AREA ^^^^^ */}

            {/* ===== FEATURED PANEL AREA ===== */}
            <div className="w-[100%] max-w-[1150px] h-auto mx-auto flex flex-col justify-center gap-8 py-10 border-b-1 border-gray-200">
                <h2 className="w-full text-3xl font-bold text-gray-700">Features</h2>
                <div className="flex items-center justify-center gap-4">
                    {/*{featuresContents.map((content, index) => (*/}
                    {/*    <FeaturesCard*/}
                    {/*        key={index}*/}
                    {/*        image={content.img}*/}
                    {/*        description={content.description}*/}
                    {/*    />*/}
                    {/*))}*/}
                </div>
            </div>
            {/* ^^^^^ FEATURED PANEL AREA ^^^^^ */}

            <NintendoTodayPanel></NintendoTodayPanel>

            <NintendoSwitch2Panel></NintendoSwitch2Panel>

            <OnlineStorePanel></OnlineStorePanel>

            <ExpansionPack></ExpansionPack>

            <NewsList></NewsList>

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