import { ShoppingCart, CirclePlay, ChevronRight, Plus } from "lucide-react";
import { motion, useInView, useScroll, useSpring, useTransform } from "framer-motion";
import Switch2_SA from "./Swith2_SA";
import { useEffect, useRef, useState } from "react";
import Switch2Detail_Sa from "./Switch2Details_SA";

const carouselImgs = [
    {
        image: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_500/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/mode-2"
    },
    {
        image: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_500/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/mode-3"
    },
    {
        image: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_500/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/mode-1"
    }
]

const gridContens = [
    {
        title: "Technical specs"
    },
    {
        title: "GameChat"
    },
    {
        title: "GameShare"
    },
    {
        title: "Virtual Game Cards"
    },
    {
        title: "Nintendo Switch Parental Controls"
    },
    {
        title: "Nintendo Switch App"
    },
    {
        title: "Accessibility"
    },
    {
        title: "Game compatibility"
    },
    {
        title: "Transferring from Nintendo Switch"
    },
    {
        title: "Getting started with Nintendo Switch 2"
    },
    {
        title: "Frequently Asked Questions"
    },
]

export default function GamingFeatures() {
    const standSectionRef = useRef(null);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: false, amount: 0.5 }); // Set once: false
    const [currentFrame, setCurrentFrame] = useState(0);
    const [hasPlayed, setHasPlayed] = useState(false);

    const images = [
        "https://assets.nintendo.com/image/upload/q_auto:best/f_auto/dpr_1.0/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/animation-c-button/Desktop/D-Joy-Con-2-1-5",
        "https://assets.nintendo.com/image/upload/q_auto:best/f_auto/dpr_1.0/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/animation-c-button/Desktop/D-Joy-Con-2-2-4",
        "https://assets.nintendo.com/image/upload/q_auto:best/f_auto/dpr_1.0/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/animation-c-button/Desktop/D-Joy-Con-2-3-3",
        "https://assets.nintendo.com/image/upload/q_auto:best/f_auto/dpr_1.0/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/animation-c-button/Desktop/D-Joy-Con-2-4-2"
    ];

    const [startDisappearAnimation, setStartDisappearAnimation] = useState(false);

    useEffect(() => {
        if (isInView && !hasPlayed) {
            let frame = 0;

            const interval = setInterval(() => {
                frame++;

                if (frame >= images.length - 1) {
                    clearInterval(interval);
                    setHasPlayed(true);

                    setStartDisappearAnimation(true);
                }

                setCurrentFrame(frame % images.length);

            }, 100);

            return () => clearInterval(interval);

        }
        else if (!isInView) {
            setHasPlayed(false);
            setStartDisappearAnimation(false);
            setCurrentFrame(0);
        }
    }, [isInView, hasPlayed]);

    const { scrollYProgress } = useScroll({
        target: standSectionRef,
        offset: ["start start", "end end"]
    });

    const textFadeInOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7], [0, 1, 1]);
    const textFadeInPosition = useTransform(scrollYProgress, [0, 0.4], ["100vh", "50vh"]);
    //const textFadeInOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 0.8, 1]);
    //const textFadeInPosition = useTransform(scrollYProgress, [0, 0.2], [400, 100]);
    const smoothFadeIn = useSpring(textFadeInPosition, { stiffness: 100, damping: 20 });

    return (
        <div className="w-full h-auto 
                flex flex-col items-center justify-center"
        >
            <div className="w-full h-auto bg-red-600 py-5
                flex flex-col items-center justify-center gap-10"
            >
                <div className="relative w-full aspect-[16/5] hidden lg:block">
                    <img
                        className="absolute object-contain"
                        src="https://assets.nintendo.com/image/upload/q_auto:best/f_auto/dpr_1.0/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/animation-features-hero/d-features-logo"
                    />
                    <img
                        className="absolute object-contain"
                        src="https://assets.nintendo.com/image/upload/q_auto:best/f_auto/dpr_1.0/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/animation-features-hero/d-features-tv"
                    />
                    <img
                        className="absolute object-contain"
                        src="https://assets.nintendo.com/image/upload/q_auto:best/f_auto/dpr_1.0/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/animation-features-hero/d-features-switch"
                    />
                </div>

                <div className="w-full max-w-370 h-30 px-15
                    text-xl text-white font-bold
                    flex flex-row items-center justify-center gap-10"
                >
                    <div className="w-full h-full
                        flex flex-col items-center justify-center"
                    >
                        <span className="w-full h-full text-5xl py-3
                            flex items-center justify-center"
                        >
                            Available now
                        </span>

                        <button className="w-full h-full bg-red-800 rounded-lg cursor-pointer
                                flex flex-row items-center justify-center gap-5
                                outline outline-white
                                hover:scale-105 hover:bg-red-900 transition duration-300"
                        >
                            <ShoppingCart />
                            <span>How to buy</span>
                        </button>
                    </div>
                    <button className="w-full h-full bg-red-800 rounded-lg cursor-pointer
                            flex flex-row items-center justify-center gap-5
                            outline outline-white
                                hover:scale-105 hover:bg-red-900 transition duration-300"
                    >
                        <CirclePlay />
                        <span>Overview trailer</span>
                    </button>
                </div>

                <div className="w-full max-w-370 px-5 overflow-hidden">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full rounded-lg object-contain"
                    >
                        <source
                            src="https://assets.nintendo.com/video/upload/q_auto/f_auto/c_scale,w_1440/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/videos/1-HW-top-montage-7s.webm"
                            type="video/webm"
                        />
                    </video>
                </div>

                <div className="w-full max-w-350 h-auto px-5 text-white
                    flex flex-row items-center justify-between gap-10"
                >
                    <div className="flex-1 flex flex-col items-center gap-4 text-5xl font-bold">
                        <span>Get to know</span>
                        <span>Nintendo Switch 2</span>
                    </div>

                    <p className="flex-1 font-semibold">
                        The next evolution of the Nintendo Switch system is here!<br />
                        <br />
                        Bring games to life with a larger 1080p screen—or connect to a TV and play in up to 4K resolution*. Support for HDR and frame rates up to 120 fps let you enjoy vivid color, clarity, and smooth gameplay.<br />
                        <br />
                        Snap the Joy-Con™ 2 controllers into place with magnetic connectors. Each controller can even be used as a mouse in compatible games.<br />
                        <br />
                        Experience exclusive games like Mario Kart™ World only on Nintendo Switch 2. Plus, you can enjoy compatible games from your Nintendo Switch library**.<br />
                    </p>
                </div>

                <div className="w-full max-w-350 h-auto px-10 py-10 text-white
                    flex flex-col items-center justify-center gap-15"
                >
                    <div className="flex flex-col items-center justify-center gap-5 text-xs">
                        <span>
                            *TV and game must be compatible with 4K resolution. Frame rates are capped at 6- fps for 4K output
                        </span>

                        <span>
                            ** Some Nintendo Switch games may not be supported or fully compatiable with Nintendo Switch 2. <span className="font bold">Click here</span> for more information on compatibility.
                        </span>
                    </div>

                    <div className="relative aspect-4/2.5 flex flex-col items-center justify-center pb-20">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full object-contain outline outline-black outline-8"
                        >
                            <source
                                src="https://assets.nintendo.com/video/upload/q_auto/f_auto/c_scale,w_1128/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/videos/HW-features-Handheld-Mode-MKW-7s.webm"
                                type="video/webm"
                            />
                        </video>

                        <img
                            className="absolute w-full h-auto object-contain -bottom-20 left-0 right-0 mx-auto"
                            src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_1400/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/Play-Mode-hardware"
                            alt="Overlay at bottom"
                        />
                    </div>

                    <button className="w-80 h-15 bg-red-800 rounded-lg cursor-pointer
                            flex flex-row items-center justify-center gap-5
                            text-xl font-bold
                            outline outline-white
                            hover:scale-105 hover:bg-red-900 transition duration-300"
                    >
                        <span>Learn more about this game</span>
                    </button>
                </div>
            </div>

            <div className="w-full max-w-350 h-auto px-5 py-10
                    flex flex-row items-between justify-center gap-4"
            >
                <div className="flex flex-col justify-between gap-4 w-[15%]">
                    <div className="w-full aspect-[2/2.9] rounded-lg overflow-hidden">
                        <img className="w-full h-full object-cover"
                            src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_200/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/gamechat/desktop/Features-Sayhello-Collage1-Image-1"
                        />
                    </div>
                    <div className="w-full aspect-[2/2.9] rounded-lg overflow-hidden">
                        <img className="w-full h-full object-cover"
                            src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_200/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/gamechat/desktop/Features-Sayhello-Collage1-Image-2"
                        />
                    </div>
                </div>

                <div className="w-[70%] self-stretch rounded-lg overflow-hidden">
                    <img className="w-full h-full object-cover"
                         src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_900/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/Say-hello-to-GameChat-large-photo"
                    />
                </div>

                <div className="flex flex-col justify-between gap-4 w-[15%]">
                    <div className="w-full aspect-[2/2.9] rounded-lg overflow-hidden">
                        <img className="w-full h-full object-cover"
                            src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_200/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/gamechat/desktop/Features-Sayhello-Collage1-Image-4"
                        />
                    </div>
                    <div className="w-full aspect-[2/2.9] rounded-lg overflow-hidden">
                        <img className="w-full h-full object-cover"
                            src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_200/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/gamechat/desktop/Features-Sayhello-Collage1-Image-5"
                        />
                    </div>
                </div>
            </div>

            <div className="w-full max-w-350 h-120 px-5
                    flex flex-row items-stretch justify-center gap-4"
            >
                <div className="w-full h-full flex flex-col gap-5 flex-1 items-center justify-between">
                    <h2 className="text-6xl text-gray-700 font-bold leading-snug">
                        Say "hello" to GameChat
                    </h2>
                    <p className=" text-gray-700 font-bold">
                        Start a chat with friends at any time using the C Button!<br />
                        <br/>
                        Share your game screen while chatting to show what you're up to. And for a more personal touch, connect face-to-face with the Nintendo Switch 2 camera or other compatible USB-C® camera (each sold separately).<br />
                    </p>
                    <p className="text-sm text-gray-500">
                        Additional games, systems and/or accessories may be required for multiplayer mode. Internet, Nintendo Switch Online membership and Nintendo Account required for online features, including GameChat. Nintendo Switch 2 camera or compatible USB-C® camera required for video features. Not available in all countries. Terms and GameChat requirements apply. support.nintendo.com Games, systems, membership, and some accessories sold separately.
                    </p>
                </div>
                <div
                    className="h-full rounded-lg flex-1 overflow-hidden"
                >
                    <img className="h-full object-cover"
                        src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_600/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/lifestyle-tableTop"
                    />
                </div>
                
            </div>

            <div className="w-full max-w-350 h-auto px-5 py-10
                    flex flex-col gap-4"
            >
                <div className="w-full h-50 flex flex-row items-center justify-center gap-4">
                    <div className="w-full h-full flex flex-row flex-1">
                        <img className="rounded-lg flex-1 object-cover"
                            src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_800/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/gamechat/desktop/Features-Sayhello-Collage2-Image-7"
                        />                    
                    </div>
                    <div className="w-full h-full flex flex-row flex-1 gap-4"                        
                    >
                        <img className="rounded-lg flex-1 object-cover"
                            src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_400/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/gamechat/desktop/Features-Sayhello-Collage2-Image-8"
                        />    
                        <img className="rounded-lg flex-1 object-cover"
                            src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_400/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/gamechat/desktop/Features-Sayhello-Collage2-Image-9"
                        />    
                    </div>
                </div>

                <div className="w-full h-50 flex flex-row items-center justify-center gap-4">
                    <div className="w-full h-full flex flex-row flex-1 gap-5"
                    >
                        <img className="rounded-lg flex-1 object-cover"
                            src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_400/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/gamechat/desktop/Features-Sayhello-Collage2-Image-10"
                        />
                        <img className="rounded-lg flex-1 object-cover"
                            src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_400/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/gamechat/desktop/Features-Sayhello-Collage2-Image-11"
                        />
                    </div>

                    <div className="w-full h-full flex flex-row flex-1">
                        <img className="rounded-lg flex-1 object-cover"
                            src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_800/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/gamechat/desktop/Features-Sayhello-Collage2-Image-12"
                        />
                    </div>
                </div>
            </div>

            <Switch2_SA></Switch2_SA>

            <section
                ref={standSectionRef }
                className="relative w-full h-[100vh] flex items-center justify-center py-10"
            >
                <img
                    className="h-80 absolute top-0 right-0 object-contain"
                    src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_1000/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/tabletop-mode"
                />

                <div className="relative w-full max-w-450 h-full">
                    <motion.div
                        className="absolute left-50 w-full min-w-80 max-w-140 h-auto p-5 rounded-lg
                        flex flex-col items-start justify-center gap-3
                        text-gray-700 font-bold"
                        style={{ opacity: textFadeInOpacity, y: smoothFadeIn }}
                    >
                        <h2 className="text-4xl">
                            Build-in stand with a freely adjustable viewing angle
                        </h2>
                        <p className="">
                            Place your Nintendo Switch 2 however you like in tabletop mode using a large, stable stand. With 150 degrees of freedom, you can always find a comfortable viewing angle. Perfect for playing together!
                        </p>

                        <img
                            className="w-full object-contain"
                            src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_600/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/Features_new_stand"
                        />

                        <p className="">
                            The top of the system now has a USB-C® port, in addition to one on the bottom. Plug in the included AC adapter and play in tabletop mode while the system charges.
                        </p>

                        <button className="w-40 h-auto rounded-lg text-white text-xl font-bold bg-red-500 px-5 py-3 cursor-pointer">
                            Learn more
                        </button>
                    </motion.div>
                </div>
            </section>

            <Switch2Detail_Sa></Switch2Detail_Sa>

            <section
                ref={sectionRef}
                className="w-full max-w-350 h-auto px-5 py-10
                    flex flex-col items-center justify-center gap-10"
            >
                <h2 className="text-4xl text-gray-600 font-bold">
                    C Button has entered the chat
                </h2>


                <div className="relative w-full h-auto flex cols">
                    <img
                        src={images[currentFrame]}
                        alt="Animation Frame"
                        className="w-full h-auto"
                    />

                    <div className="absolute w-full h-full grid"
                    >
                        <img
                            src="https://assets.nintendo.com/image/upload/q_auto:best/f_auto/dpr_1.0/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/animation-c-button/Desktop/D-Player-1"
                            alt="Animation Frame"
                            className={`w-full h-auto transition-all duration-700 ease-out col-start-1 row-start-1
                        ${startDisappearAnimation
                                    ? "translate-x-0 opacity-100"
                                    : "translate-x-32 opacity-0"
                                }`}
                        />
                        <img
                            src="https://assets.nintendo.com/image/upload/q_auto:best/f_auto/dpr_1.0/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/animation-c-button/Desktop/D-Player-2"
                            alt="Animation Frame"
                            className={`w-full h-auto transition-all duration-700 ease-out col-start-1 row-start-1 
                        ${startDisappearAnimation
                                    ? "translate-x-0 opacity-100"
                                    : "-translate-x-32 opacity-0"
                                }`}
                        />
                        <img
                            src="https://assets.nintendo.com/image/upload/q_auto:best/f_auto/dpr_1.0/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/animation-c-button/Desktop/D-Player-4"
                            alt="Animation Frame"
                            className={`w-full h-auto transition-all duration-700 ease-out col-start-1 row-start-1 
                        ${startDisappearAnimation
                                    ? "-translate-x-10 opacity-100"
                                    : "translate-x-30 opacity-0"
                                }`}
                        />
                        <img
                            src="https://assets.nintendo.com/image/upload/q_auto:best/f_auto/dpr_1.0/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/animation-c-button/Desktop/D-Player-3"
                            alt="Animation Frame"
                            className={`w-full h-auto transition-all duration-700 ease-out col-start-1 row-start-1
                        ${startDisappearAnimation
                                    ? "translate-x-0 opacity-100"
                                    : "-translate-x-35 opacity-0"
                                }`}
                        />
                    </div>
                </div>               
            </section>

            <section className="w-full max-w-350 h-auto px-5 py-10
                    flex flex-row"
            >
                <div
                    className="w-full flex flex-[0.7] items-end justify-center"
                >
                    <img
                        className="object-contain"
                        src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_500/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/Camera-with-system"
                    />
                </div>                

                <div className="w-auto h-full flex flex-[1.3] flex-col justify-end">
                    <img
                        className="flex-1 w-auto object-contain object-top"
                        src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_800/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/C-Button-has-entered-the-chat"
                    />
                    <img
                        className="flex-1 w-auto object-contain object-bottom"
                        src="https://assets.nintendo.com/image/upload/q_auto:best/f_auto/dpr_1.0//ncom/en_US/gaming-systems/switch-2/features/tv-stand"
                    />
                </div>
            </section>

            <section className="w-full max-w-350 h-auto px-5 py-10
                    flex flex-row gap-4 text-gray-700 gap-10"
            >
                <div className="flex flex-1 flex-col items-start gap-3">
                    <h2 className="text-4xl font-bold leading-13">
                        All Together, Anytime, Anywhere
                        <br />
                        <span className="text-5xl leading-18">GameChat</span>
                        <br />
                        Now you can voice chat, share your game screen, and connect via video chat as you play.
                    </h2>
                    <p className="text-md font-semibold">
                        Your friends and family are never far away with GameChat. Once GameChat is set up, simply press the C Button on the right Joy-Con 2 controller to start an online chat with Nintendo Switch 2 friends whenever you'd like.<br />
                        <br />
                        Nintendo Switch 2 has a built-in microphone that can pick up your voice, even when you're sitting far away. Your voice will come through loud and clear to your friends.<br />
                        <br />
                        Share your screen in real time—even if you're all playing different games. Team up in the same game or watch along as your friends play different ones. It's all about hanging out and having a good time.<br />
                        <br />
                        <span className="font-bold">Show off your game face</span><br />
                        <br />
                        Connect a compatible USB-C® camera, like the Nintendo Switch 2 camera (sold separately), to video chat and see your friends' faces while you all play. Up to four people can video chat at the same time.<br />
                        <br />
                        With GameChat, it's easy to stay connected with friends and family. Feel like you're playing in the same room together, no matter the distance.<br />
                    </p>
                    <p className="text-xs leading-6">
                        Additional games, systems and/or accessories may be required for multiplayer mode. Internet,
                        Nintendo Switch Online membership and Nintendo Account required for online features, including GameChat.
                        USB-C® camera accessory required for video features. Not available in all countries. Terms and GameChat
                        requirements apply. support.nintendo.com Games, systems, some accessories, and membership sold separately.
                    </p>

                    <button className="w-auto h-auto rounded-lg px-7 py-3 
                                bg-red-600 text-white text-lg font-bold
                                hover:scale-105 hover:bg-red-700 transition duration-300"
                    >
                        Learn more
                    </button>
                </div>

                <div className="flex flex-1 flex-col items-center justify-center gap-5">
                    <img
                        className="h-170 object-contain"
                        src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_400/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/camera"
                    />
                    <span className="text-md font-semibold">Accessory (sold separately)</span>
                    <h2 className="text-4xl font-bold">
                        Nintendo Switch 2 Camera
                    </h2>
                    <button className="w-auto h-auto rounded-lg px-7 py-3 
                                bg-white text-red-500 text-lg font-bold
                                flex items-center justify-center
                                outline outline-red-500
                                hover:scale-105 hover:bg-red-100 transition duration-300"
                    >
                        Learn more
                    </button>
                </div>
            </section>

            <section className="w-full overflow-hidden py-10"
            >
                <ul className="flex animate-infinite-scroll w-max items-center gap-3">
                    {[...carouselImgs, ...carouselImgs].map((img, index) => (
                        <li key={index}
                            className=""
                        >
                            <img
                                src={img.image}
                                alt="carousel-item"
                                className="w-full h-auto object-contain"
                            />
                        </li>
                    ))}
                </ul>
            </section>

            <section className="w-full max-w-350 h-auto px-5 py-10
                    flex flex-row items-stretch justify-center gap-4 
                    text-gray-700 gap-10 divide-x divide-red-500"
            >
                <h2 className="flex-[0.7] text-4xl font-bold px-10 py-3">
                    Three different play modes
                </h2>
                <p className="flex-[1.3] text-md font-semibold">
                    Nintendo Switch 2 can transform to suit your game style.<br/>
                    <br />
                    Just like previous Nintendo Switch systems, you can enjoy your games anytime, anywhere in TV mode, tabletop mode, or handheld mode.
                </p>
            </section>

            <section className="w-full max-w-350 h-auto px-5 py-10
                    flex flex-row items-center justify-center gap-4 
                    text-gray-700 font-semibold"
            >
                <div className="flex flex-col items-center justify-center gap-3"
                >
                    <img className="object-contain"
                        src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_400/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/mode-tv"
                    />
                    <span>
                        TV mode
                    </span>
                </div>
                <div className="flex flex-col items-center justify-center"
                >
                    <img className="object-contain"
                        src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_400/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/mode-tabletop"
                    />
                    <span>
                        Tabletop mode
                    </span>
                </div>
                <div className="flex flex-col items-center justify-center"
                >
                    <img className="object-contain"
                        src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_400/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/mode-handheld"
                    />
                    <span>
                        Handheld mode
                    </span>
                </div>
            </section>

            <section className="w-full max-w-300 h-auto px-8 py-10
                    flex flex-col items-center justify-center
                    border-y border-gray-200
                    divide-y divide-gray-200"
            >
                <div className="w-full h-auto py-6
                    flex flex-col gap-5
                    text-xl text-gray-700 font-bold"
                >
                    <div className="flex flex-row items-center gap-5">
                        <img
                            className="h-16 object-contain"
                            src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_100/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/icon-perf"
                        />
                        <span>
                            Performance
                        </span>
                    </div>
                    <div className="group w-full h-15 rounded-lg px-5
                        outline outline-red-500 cursor-pointer
                        flex items-center justify-between"
                    >
                        <span className="group hover:text-red-700 transition duration-300">
                            Powerful processing and immersive graphics
                        </span>
                        <Plus className="text-red-500" />
                    </div>
                </div>

                <div className="w-full h-auto py-6 
                    flex flex-col gap-5
                    text-xl text-gray-700 font-bold"
                >
                    <div className="flex flex-row items-center gap-5">
                        <img
                            className="h-16 object-contain"
                            src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_100/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/icon-sound"
                        />
                        <span>
                            Sound
                        </span>
                    </div>
                    <div className="group w-full h-15 rounded-lg px-5
                        outline outline-red-500 cursor-pointer
                        flex items-center justify-between"
                    >
                        <span className="group hover:text-red-700 transition duration-300">
                            Crisp audio quality and 3D spatial sound
                        </span>
                        <Plus className="text-red-500" />
                    </div>
                </div>

                <div className="w-full h-auto py-6 
                    flex flex-col gap-5
                    text-xl text-gray-700 font-bold"
                >
                    <div className="flex flex-row items-center gap-5">
                        <img
                            className="h-16 object-contain"
                            src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_100/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/icon-storage"
                        />
                        <span>
                            Internal storage
                        </span>
                    </div>
                    <div className="group w-full h-15 rounded-lg px-5
                        outline outline-red-500 cursor-pointer
                        flex items-center justify-between"
                    >
                        <span className="group hover:text-red-700 transition duration-300">
                            256 GB capacity with faster speeds
                        </span>
                        <Plus className="text-red-500" />
                    </div>
                </div>
            </section>

            <section className="w-full max-w-300 h-auto px-8 py-10">
                <div className="w-full h-auto px-8 py-10 bg-gray-100 rounded-lg
                    flex flex-row items-center justify-center gap-4
                    shadow-xl"
                >
                    <div className="h-full flex flex-row items-center justify-center gap-15"
                    >
                        <div className="h-full flex flex-col justify-between gap-5">
                            <h3 className="text-3xl text-gray-700 font-bold
                                border-b border-red-500"
                            >
                                Expand your storage with microSD Express cards
                            </h3>
                            <p className="text-md text-gray-700 font-semibold">
                                Nintendo Switch 2 uses a standard of expandable memory card called microSD Express (sold separately). This kind of memory card is needed for faster access speeds and to ensure games will run smoothly.<br />
                                <br />
                                Please note: Nintendo Switch 2 is only compatible with microSD Express cards. If the microSD cards you have used for Nintendo Switch do not support microSD Express standards, you cannot use them with Nintendo Switch 2.<br />
                            </p>
                        </div>

                        <div className="flex flex-col gap-3">
                            <img className="object-contain"
                                src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_200/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/microsd-express-samsung-packaging"
                            />
                            <span className="text-xs text-center text-gray-700">
                                Officially licensed products are recommended.
                            </span>
                        </div>
                    </div>
                </div>
            </section>


            <section className="relative w-full min-w-screen min-h-screen
                    flex flex-col items-center justify-center
                    text-white font-bold overflow-hidden"
            >
                <img
                    className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
                    src="https://assets.nintendo.com/image/upload/q_auto:good/f_auto/dpr_2.0/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/switch-games-background"
                    alt="Background"
                />

                <div className="relative flex-1 w-full h-full z-10
                        flex flex-col items-center justify-between text-center gap-10"
                >
                    <div className="w-full max-w-350 flex-1 flex flex-col items-center justify-center gap-10 pt-10"
                    >
                        <h2 className="text-4xl leading-normal">
                            In addition to Nintendo Switch 2 exclusive games, Nintendo <br />
                            Switch 2 can play compatible Nintendo Switch games.
                        </h2>

                        <p>
                            Nintendo Switch 2 plays both physical and digital Nintendo Switch games.<br />
                            <br />
                            Some Nintendo Switch games may not be supported or fully compatible with Nintendo Switch 2.<br />
                            <br />
                            Nintendo Switch Online members can continue to use the service on Nintendo Switch 2.
                        </p>
                        <button className="w-40 h-auto rounded-lg text-xl font-bold bg-red-500 px-5 py-3 cursor-pointer
                                        hover:scale-105 hover:bg-red-700 transition duration-300"
                        >
                            Learn more
                        </button>
                    </div>

                    <div className="w-full h-1/3 flex flex-row items-end justify-center">
                        <div className="flex-1 h-full flex items-end justify-center">
                            <img
                                className="w-full h-full object-contain object-bottom"
                                src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_1200/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/gen-switch"
                                alt="Nintendo Switch Gen 1"
                            />
                        </div>

                        <div className="flex-1 h-full flex items-end justify-center">
                            <img
                                className="w-full h-full object-contain object-bottom"
                                src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_1400/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/gen-switch2"
                                alt="Nintendo Switch 2"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full h-auto bg-red-600 flex items-center justify-center">
                <div className="w-full max-w-350 h-auto bg-red-600 px-15 py-10
                    flex flex-col gap-5
                    text-xl text-white font-bold"
                >
                    <button className="w-full h-50 cursor-pointer pb-5">
                        <img
                            className="w-full h-full object-contain"
                            src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_1200/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/logo"
                        />
                    </button>
                    <div className="w-full h-128 grid grid-cols-3 grid-rows-2 gap-10">

                        <button
                            type="button"
                            className="h-full col-span-1 row-span-2 rounded-lg p-8
                            flex items-center justify-center cursor-pointer 
                            outline outline-white/30 outline-2
                            hover:scale-95 transition duration-300"
                        >
                            <div className="w-full h-full flex flex-col items-center justify-center gap-40">
                                <img
                                    className="object-contain"
                                    src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_300/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/footer/Features"
                                />
                                <span>
                                    Nintendo Switch 2 features
                                </span>
                            </div>
                        </button>

                        <button
                            type="button"
                            className="col-span-1 row-span-1 
                            flex items-center justify-center cursor-pointer
                            hover:scale-95 transition duration-300"
                        >
                            <div className="w-full h-full flex flex-row items-center justify-center gap-5 rounded-lg
                            outline outline-white/30 outline-2 "
                            >
                                <img
                                    className="h-25 object-contain"
                                    src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_100/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/footer/How-to-buy"
                                />
                                <span>
                                    How to buy
                                </span>
                            </div>
                        </button>

                        <button className="col-span-1 row-span-1 rounded-lg 
                            flex items-center justify-center 
                            hover:scale-95 transition duration-300 cursor-pointer"
                        >
                            <div className="w-full h-full flex flex-row items-center justify-center gap-5 rounded-lg
                            outline outline-white/30 outline-2 "
                            >
                                <img
                                    className="h-25 object-contain"
                                    src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_100/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/footer/Accessories"
                                />
                                <span>
                                    Accessories
                                </span>
                            </div>
                        </button>

                        <button
                            type="button"
                            className="col-span-2 row-span-1 rounded-lg 
                            flex items-center justify-center 
                            hover:scale-95 transition duration-300 cursor-pointer"
                        >
                            <div className="w-full h-full flex flex-row items-center justify-center gap-5 rounded-lg
                            outline outline-white/30 outline-2 "
                            >
                                <img
                                    className="h-35 object-contain"
                                    src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_400/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/footer/Games"
                                />
                                <span>
                                    Games
                                </span>
                            </div>
                        </button>
                    </div>

                    <div className="w-full h-auto grid grid-cols-4 gap-10 py-5">
                        {gridContens.map((title, index) => (
                            <button
                                key={index}
                                type="button"
                                className="w-full h-full flex flex-row items-center
                                text-white text-left text-lg font-bold cursor-pointer
                                hover:underline hover:underline-white"
                            >
                                <ChevronRight size={30} />
                                <span>
                                    {title.title}
                                </span>
                            </button>
                        )
                        )}
                    </div>
                </div>
            </section>
        </div>        
    )
}
