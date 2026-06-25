import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Switch2Detail_Sa() {
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    const videoRef = useRef(null);
    const [hasVideoPlayed, setVideoHasPlayed] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasVideoPlayed) {
                    videoRef.current?.play();
                    setVideoHasPlayed(true);
                }
            },
            { threshold: 0.5 }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => observer.disconnect();
    }, [hasVideoPlayed]);

    const snapIntroFadeIn = useTransform(scrollYProgress, [0.2, 0.5], [1300, 0]);
    const snapIntroImgFadeIn = useTransform(scrollYProgress, [0.25, 0.55], ["-100%", "0%"]);
    const snapIntroTextFadeIn = useTransform(scrollYProgress, [0.25, 0.55], ["100%", "0%"]);

    const mouseIntroFadeIn = useTransform(scrollYProgress, [0.55, 0.8], [-2600, 0]);
    const mouseIntroImgFadeIn = useTransform(scrollYProgress, [0.65, 0.95], ["-5%", "5%"]);
    const mouseIntroTextFadeIn = useTransform(scrollYProgress, [0.65, 0.95], ["100%", "0%"]);

    return (
        <section
            ref={ sectionRef }
            className="relative w-full h-[300vh]"
        >
            <div className="sticky top-0 h-screen p-3">
                <div className="w-full h-full rounded-lg overflow-hidden grid">
                    <video
                        ref={videoRef}
                        muted
                        playsInline
                        className="col-start-1 row-start-1 w-full h-full object-cover"
                    >
                        <source
                            src="https://assets.nintendo.com/video/upload/q_auto/f_auto/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/videos/NS2-logo-desktop-5s.webm"
                            type="video/webm"
                        />
                    </video>

                    <motion.div
                        style={ {y:snapIntroFadeIn} }
                        className="relative w-full h-screen bg-red-300 flex col-start-1 row-start-1 px-5 items-center"
                    >
                        <div className="absolute w-full max-w-1/2 h-full left-0 flex items-center jusity-center overflow-hidden">
                            <motion.img
                                style={{ x: snapIntroImgFadeIn }}
                                className="absolute w-auto h-full max-w-none right-0"
                                src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_2600/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/system-angled"
                            />
                        </div>     

                        <div className="absolute w-full max-w-1/2 h-full right-0 p-10 flex items-center jusity-center ">
                            <motion.div
                                className="w-auto h-full min-h-100 max-h-280 rounded-lg p-10
                                flex flex-col items-start justify-center gap-5
                                text-white font-bold
                                bg-gradient-to-b from-red-700 to-red-300"
                                style={{ y: snapIntroTextFadeIn }}
                            >
                                <h2 className="text-4xl">
                                    Joy-Con 2 controllers connect…in a <span className="font-italic">snap</span>
                                </h2>
                                <video
                                    autoPlay
                                    muted
                                    playsInline
                                    className="w-auto h-auto rounded-lg object-contain"
                                >
                                    <source
                                        src="https://assets.nintendo.com/video/upload/q_auto/f_auto/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/videos/Joy-Con-2-section-1-attach-and-detach-h264.webm"
                                        type="video/webm"
                                    />
                                </video>
                                <p>
                                    The Joy-Con 2 controllers are designed to attach and detach with ease. Strong magnets keep the controllers firmly attached to the system. Simply press the release button on the back to disengage the magnetic lock—and off they come.
                                </p>
                                <button className="w-40 h-auto rounded-lg text-xl font-bold bg-red-800 px-5 py-3 cursor-pointer
                                        outline outline-white
                                        hover:scale-105 hover:bg-red-900 transition duration-300"
                                >
                                    Learn more
                                </button>
                            </motion.div>
                        </div>                        

                    </motion.div>

                    <motion.div
                        style={{ x: mouseIntroFadeIn }}
                        className="relative w-full h-screen bg-cyan-400 flex col-start-1 row-start-1 items-center"
                    >
                        <div className="absolute w-full h-1/2 top-0 flex items-center jusity-center">
                            <motion.img
                                style={{ x: mouseIntroImgFadeIn }}
                                className="absolute w-full h-auto max-h-none bottom-0"
                                src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_1300/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/joycon-hand-blue"
                            />
                        </div>

                        <div className="absolute w-full max-w-1/2 h-full left-0 p-10 flex items-center jusity-center ">
                            <motion.div
                                className="w-auto h-full min-h-100 max-h-280 rounded-lg p-10
                                flex flex-col items-start justify-center gap-5
                                text-white font-bold
                                bg-gradient-to-b from-cyan-700 to-cyan-300"
                                style={{ y: mouseIntroTextFadeIn }}
                            >
                                <h2 className="text-4xl">
                                    Smooth mouse controls with Joy-Con 2
                                </h2>
                                <video
                                    autoPlay
                                    muted
                                    playsInline
                                    className="w-full h-auto rounded-lg object-contain"
                                >
                                    <source
                                        src="https://assets.nintendo.com/video/upload/q_auto/f_auto/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/videos/Joy-Con-2-section-2-mouse-controls-h264.webm"
                                        type="video/webm"
                                    />
                                </video>
                                <p>
                                    The mouse sensor on the side of each Joy-Con 2 controller lets you turn surfaces like a table or your lap into a mouse pad.<br/>
                                    <br />
                                    Both Joy-Con 2 controllers can be used for mouse controls at the same time, opening up additional ways to play—like using both hands to control two mouse controllers simultaneously.<br />
                                    <br />
                                    Only in compatible games.
                                </p>
                                <button className="w-40 h-auto rounded-lg text-xl font-bold bg-cyan-800 px-5 py-3 cursor-pointer
                                        outline outline-white
                                        hover:scale-105 hover:bg-cyan-900 transition duration-300"
                                >
                                    Learn more
                                </button>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}