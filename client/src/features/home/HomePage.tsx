import { useState, useEffect } from 'react';
import { Play, Pause, Menu, Heart, Search, ShoppingCart, UserRound } from 'lucide-react';
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
        img: 'https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/merchandising/Character%20Portals/1600x1600_NCOM_Home_Characters_Mario',
        bgImg: 'https://assets.nintendo.com/image/upload/q_auto/f_auto/c_fill,h_300,w_300/dpr_2.0/ncom/en_US/merchandising/mario-bg'
    },
    {
        title: 'The Legend of Zelda',
        img: 'https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/merchandising/Character%20Portals/The%20Legend%20of%20Zelda/1600x1600_character',
        bgImg: 'https://assets.nintendo.com/image/upload/q_auto/f_auto/c_fill,h_300,w_300/dpr_2.0/ncom/en_US/merchandising/Character%20Portals/The%20Legend%20of%20Zelda/1600x1600_background_02'
    },
    {
        title: 'Splatoon',
        img: 'https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/merchandising/Character%20Portals/Ncom_CharacterRail_1600x1600_Splatoon_character_v2',
        bgImg: 'https://assets.nintendo.com/image/upload/q_auto/f_auto/c_fill,h_300,w_300/dpr_2.0/ncom/en_US/merchandising/Character%20Portals/Ncom_CharacterRail_1600x1600_Splatoon_BG'
    },
    {
        title: 'Kirby',
        img: 'https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/merchandising/Character%20Portals/1600x1600_NCOM_Home_Characters_Kirby',
        bgImg: 'https://assets.nintendo.com/image/upload/q_auto/f_auto/c_fill,h_300,w_300/dpr_2.0/ncom/en_US/merchandising/Character%20Portals/1600x1600_NCOM_Home_Characters_Kirby_BG'
    },
    {
        title: 'Pikmin',
        img: 'https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/merchandising/CREATIVE-1295-CharacterSection-Character-Pikmin_v02',
        bgImg: 'https://assets.nintendo.com/image/upload/q_auto/f_auto/c_fill,h_300,w_300/dpr_2.0/ncom/en_US/merchandising/CREATIVE-1295-CharacterSection-Background-Pikmin_v02'
    },
    {
        title: 'Animal Crossing',
        img: 'https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/merchandising/CREATIVE-1295-CharacterSection-Character-AnimalCrossing_v01',
        bgImg: 'https://assets.nintendo.com/image/upload/q_auto/f_auto/c_fill,h_300,w_300/dpr_2.0/ncom/en_US/merchandising/CREATIVE-1295-CharacterSection-Background-AnimalCrossing'
    },
    {
        title: 'Metroid',
        img: 'https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/merchandising/CREATIVE-1295-CharacterSection-Character-Metroid_v01',
        bgImg: 'https://assets.nintendo.com/image/upload/q_auto/f_auto/c_fill,h_300,w_300/dpr_2.0/ncom/en_US/merchandising/CREATIVE-1295-CharacterSection-Background-Metroid_v01'
    },
    {
        title: 'Pokémon',
        img: 'https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/merchandising/CREATIVE-1295-CharacterSection-Character-Pokemon_v01',
        bgImg: 'https://assets.nintendo.com/image/upload/q_auto/f_auto/c_fill,h_300,w_300/dpr_2.0/ncom/en_US/merchandising/CREATIVE-1295-CharacterSection-Background-Pokemon_v01'
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
                                className="w-full max-w-full h-auto object-contain cursor-pointer"
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

            {/*<div className="h-100 w-full bg-white p-5">*/}
            {/*    <div className="w-[90%] max-w-[1200px] h-auto mx-auto flex flex-col justify-center gap-8 bg-white py-10">*/}
            {/*        <h2 className="w-full text-3xl font-bold text-gray-600">News</h2>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div className="w-auto max-w-300 h-auto py-10 px-5
                    flex flex-col items-center justify-center gap-5
                    border-b-1 border-gray-200"
            >
                <h2
                    className="w-full h-auto 
                    text-3xl text-left text-gray-700 font-bold"
                >
                    Characters
                </h2>

                <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5">
                    {characterContents.map((content, index) => (
                        <CharactersCard
                            key={index}
                            title={content.title}
                            img={content.img}
                            bgImg={content.bgImg}
                        />
                    ))}
                </div>
            </div>
            {/* ^^^^^ CHARACTERS PANEL AREA ^^^^^ */}

            <div className="w-auto max-w-300 h-auto py-10 px-5
                    flex flex-col items-center justify-center gap-5
                    border-b-1 border-gray-200"
            >
                <h2
                    className="w-full h-auto 
                    text-3xl text-left text-gray-700 font-bold"
                >
                    Digital best sellers
                </h2>

                <h2
                    className="w-full h-auto 
                    text-3xl text-left text-gray-700 font-bold"
                >
                    Digital new releases
                </h2>

                <h2
                    className="w-full h-auto 
                    text-3xl text-left text-gray-700 font-bold"
                >
                    Recently viewed
                </h2>
            </div>
        </div>
    )
}