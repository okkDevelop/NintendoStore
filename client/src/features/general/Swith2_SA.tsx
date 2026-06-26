import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Switch2_SA() {
    const sectionRef = useRef(null);

    // Track the scroll progress of the entire 500vh container (0 to 1)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    // Optional: Smooth out the scroll input slightly
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    // --- PHASE 1: First Intro Text (Scroll 0.2 to 0.4) ---
    const intro1Opacity = useTransform(smoothProgress, [0.05, 0.15, 0.2, 0.25], [0, 1, 1, 0]);
    const intro1Y = useTransform(smoothProgress, [0.08, 0.15, 0.25], ["50vh", "10vh", "10vh"]);

    // --- PHASE 2: Second Intro Text & Charging Case (Scroll 0.4 to 0.6) ---
    const intro2Opacity = useTransform(smoothProgress, [0.3, 0.35, 0.45, 0.5], [0, 1, 1, 0]);

    // Case starts low off-screen, then glides up directly over the console matrix
    const caseY = useTransform(smoothProgress, [0.3, 0.5], [600, 40]);
    const caseOpacity = useTransform(smoothProgress, [0.3, 0.45], [0, 1]);

    // --- PHASE 3: TV Pop up (Scroll 0.6 to 0.8) ---
    const tvScale = useTransform(smoothProgress, [0.5, 0.55, 0.6, 0.7], [0.5, 1.1, 1, 2]);
    const tvOpacity = useTransform(smoothProgress, [0.5, 0.55, 0.75, 0.8], [0, 1, 1, 0]);
    const tvX = useTransform(smoothProgress, [0.6, 0.7], ["80%", "70%"]);
    const tvY = useTransform(smoothProgress, [0.75, 0.8], [0, -200]);

    // --- PHASE 4: Global Scaling and Final Positioning (Scroll 0.8 to 1.0) ---
    const globalScale = useTransform(smoothProgress, [0.6, 0.7], [1, 0.5]);
    const globalX = useTransform(smoothProgress, [0.6, 0.7], [0, -350]);
    const globalOpacity = useTransform(smoothProgress, [0.75, 0.8], [1, 0]);
    const globalY = useTransform(smoothProgress, [0.75, 0.8], [0, -200]);

    // Final Intro Text (Mirrors Phase 1)
    const finalIntroOpacity = useTransform(smoothProgress, [0.6, 0.65, 0.75, 0.8], [0, 1, 1, 0]);
    const finalIntroY = useTransform(smoothProgress, [0.65, 0.7], [500, 200]);

    const adjustingY = useTransform(smoothProgress, [0.8, 0.85], [500, -100]);

    const adjustingOpacity1 = useTransform(smoothProgress, [0.8, 0.82, 0.84], [0, 1, 0]);
    const adjustingOpacity2 = useTransform(smoothProgress, [0.84, 1], [0, 1]);
    const adjustingOpacity3 = useTransform(smoothProgress, [0.84, 0.86, 0.88], [0, 1, 0]);
    const adjustingOpacity4 = useTransform(smoothProgress, [0.86, 1], [0, 1]);
    const adjustingOpacity5 = useTransform(smoothProgress, [0.88, 0.9, 0.92], [0, 1, 0]);
    const adjustingOpacity6 = useTransform(smoothProgress, [0.9, 1], [0, 1]);
    const adjustingOpacity7 = useTransform(smoothProgress, [0.92, 0.94, 0.96], [0, 1, 0]);
    const adjustingOpacity8 = useTransform(smoothProgress, [0.94, 1], [0, 1]);
    const adjustingOpacity9 = useTransform(smoothProgress, [0.94, 0.96, 1], [0, 1, 1]);


    return (
        <section ref={sectionRef} className="relative w-full h-[500vh] py-10 bg-gradient-to-l from-black via-gray-700 to-black flex flex-col items-center gap-4">
            {/* Master Sticky Canvas */}
            <div className="sticky top-[calc(50vh-170px)] w-full h-85 flex justify-center items-center overflow-visible select-none">

                <motion.div
                    style={{ opacity: intro1Opacity, y: intro1Y }}
                    className="absolute bottom-[-100px] z-50 w-full max-w-350 px-10
                        text-white font-bold
                        flex flex-row items-center justify-center"
                >
                    <h2
                        className="text-2xl flex flex-1 items-center text-start jusity-center text-6xl font-bold leading-normal">
                        Bigger screen,
                        <br />
                        same thicknesss
                    </h2>

                    <div className="py-5 flex flex-1 flex-col gap-3">
                        <p className="text-lg"
                        >
                            Go big with a 7.9-inch screen that lets you enjoy smooth gameplay anytime, anywhere.<br />
                            <br />
                            Play with greater detail and clarity thanks to a high-definition LCD display featuring support for HDR, VRR, and up to 120 fps in compatible games.
                        </p>
                        <button className="w-40 h-auto rounded-lg text-xl font-bold bg-red-500 px-5 py-3 cursor-pointer">
                            Learn more
                        </button>
                    </div>
                </motion.div>

                {/* SECOND INTRO TEXT: Top Position */}
                <motion.div
                    style={{ opacity: intro2Opacity }}
                    className="absolute top-[-220px] text-5xl text-white font-bold z-50 text-center w-full"
                >
                    <h3>
                        Dock included <br />
                        Connect the Nintendo Switch 2 dock to a
                        <br />TV and...<br />
                    </h3>
                </motion.div>

                <motion.div
                    style={{ opacity: finalIntroOpacity, y: finalIntroY }}
                    className="absolute bottom-[-100px] z-50 w-full max-w-350 px-10
                        text-white font-bold
                        flex flex-col items-center justify-center gap-5"
                >
                    <h2
                        className="flex flex-1 items-center text-start jusity-center text-4xl font-bold leading-normal">
                        …step into high-res worlds on your big screen.
                    </h2>

                    <p className="text-md">
                        Use the included dock to connect the Nintendo Switch 2 system to your TV and unleash even greater detail.
                    </p>

                    <button className="w-40 h-auto rounded-lg text-xl font-bold bg-red-500 px-5 py-3 cursor-pointer">
                        Learn more
                    </button>

                    <button className="w-70 h-auto rounded-lg bg-black px-5 py-3 
                                        text-xl font-bold cursor-pointer
                                        outline outline-white"
                    >
                        Check out more games
                    </button>
                </motion.div>

                {/* GLOBAL DEVICE WORKSPACE BUNDLE */}
                <motion.div
                    style={{ scale: globalScale, x: globalX, y: globalY, opacity: globalOpacity }}
                    className="relative flex items-center justify-center overflow-visible"
                >
                    {/* Left Joy-Con */}
                    <motion.img
                        src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_200/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/Joy-Con-L"
                        className="h-85 absolute object-contain z-10 left-[-96px]"
                    />

                    {/* Right Joy-Con */}
                    <motion.img
                        src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_200/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/Joy-Con-R"
                        className="h-85 absolute object-contain z-10 right-[-96px]"
                    />

                    {/* Core Console Display Unit */}
                    <div className="relative h-85 aspect-[16/9] flex items-center justify-center">
                        <motion.img
                            src="https://assets.nintendo.com/image/upload/q_auto:best/f_auto/dpr_2.0/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/System"
                            className="relative h-full object-contain pointer-events-none z-20"
                        />
                        <motion.video
                            autoPlay
                            loop
                            muted
                            playsInline
                            src="https://assets.nintendo.com/video/upload/q_auto/f_auto/c_scale,w_800/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/videos/HW-features-Handheld-Mode-DKB-7s.webm"
                            className="absolute w-[90%] object-contain z-30"
                        />
                    </div>

                    {/* DYNAMIC COMPONENT: Charging Case Overlay */}
                    <motion.img
                        style={{ y: caseY, opacity: caseOpacity }}
                        src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_600/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/Dock-light"
                        className="absolute h-84 w-auto object-contain z-30 pointer-events-none bottom-[-20px]"
                        alt="Charging Case Overlay"
                    />

                    <motion.div
                        style={{ x: tvX, y: tvY, scale: tvScale, opacity: tvOpacity }}
                        className="absolute -top-40 right-[-150px] w-200 h-full flex flex-col items-center justify-end z-0"
                    >
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            src="https://assets.nintendo.com/video/upload/q_auto/f_auto/c_scale,w_800/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/videos/HW-features-TV-Mode-Montage.webm"
                            className="flex-1 w-auto object-contain object-top outline outline-black outline-10"
                        />
                        <img
                            className="flex-1 w-auto object-contain object-bottom"
                            src="https://assets.nintendo.com/image/upload/q_auto:best/f_auto/dpr_1.0//ncom/en_US/gaming-systems/switch-2/features/tv-stand"
                        />
                    </motion.div>
                </motion.div>
                <motion.div
                    style={{ y: adjustingY }}
                    className="absolute h-200 aspect-[16/9] flex items-center justify-center pointer-events-none"
                >
                    {/* All layered absolute frames inside a unified space */}
                    <motion.img style={{ opacity: adjustingOpacity1 }} className="absolute h-full object-contain" src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_1200/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/kickstand/kick-01" />
                    <motion.img style={{ opacity: adjustingOpacity2 }} className="absolute h-full object-contain" src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_1200/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/kickstand/kick-02" />
                    <motion.img style={{ opacity: adjustingOpacity3 }} className="absolute h-full object-contain" src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_1200/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/kickstand/kick-03" />
                    <motion.img style={{ opacity: adjustingOpacity4 }} className="absolute h-full object-contain" src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_1200/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/kickstand/kick-04" />
                    <motion.img style={{ opacity: adjustingOpacity5 }} className="absolute h-full object-contain" src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_1200/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/kickstand/kick-05" />
                    <motion.img style={{ opacity: adjustingOpacity6 }} className="absolute h-full object-contain" src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_1200/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/kickstand/kick-06" />
                    <motion.img style={{ opacity: adjustingOpacity7 }} className="absolute h-full object-contain" src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_1200/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/kickstand/kick-07" />
                    <motion.img style={{ opacity: adjustingOpacity8 }} className="absolute h-full object-contain" src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_1200/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/kickstand/kick-08" />
                    <motion.img style={{ opacity: adjustingOpacity9 }} className="absolute h-full object-contain" src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_1200/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/features/kickstand/kick-09" />
                </motion.div>
            </div>
        </section>
    );
}