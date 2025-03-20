"use client";

import { motion, useMotionValue, useTransform } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const images = [
    {
        id: 1,
        url: "https://picsum.photos/600/300",
    },
    {
        id: 2,
        url: "https://picsum.photos/620/300",
    },
    {
        id: 3,
        url: "https://picsum.photos/630/300",
    },
    {
        id: 4,
        url: "https://picsum.photos/640/300",
    },
    {
        id: 5,
        url: "https://picsum.photos/600/300",
    },
    {
        id: 6,
        url: "https://picsum.photos/640/300",
    },
    {
        id: 7,
        url: "https://picsum.photos/680/300",
    },
];

const Professions = () => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const [width, setWidth] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isDragging, setIsDragging] = useState(false); // Track drag state

    const calculateWidth = () => {
        if (sliderRef.current) {
            const scrollWidth = sliderRef.current.scrollWidth;
            const offsetWidth = sliderRef.current.offsetWidth;
            setWidth(scrollWidth - offsetWidth);
        }
    };

    useEffect(() => {
        calculateWidth(); // Initial calculation

        const handleResize = () => {
            calculateWidth(); // Recalculate on window resize
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Transform x value to progress percentage
    const progressWidth = useTransform(x, [-width, 0], [100, 0]);

    useEffect(() => {
        progressWidth.on("change", (value) => setProgress(value));
    }, [progressWidth]);

    return (
        <section className="h-[100vh] w-full flex flex-col justify-center items-center">
            <h2 className="text-5xl text-center mb-8">Professions</h2>

            <div className="w-full overflow-hidden">
                <motion.div
                    ref={sliderRef}
                    drag="x"
                    dragConstraints={{ left: -width, right: 0 }}
                    dragElastic={0.1} // Reduce elasticity
                    dragTransition={{ power: 0.3, timeConstant: 100 }} // Reduce momentum
                    className="flex gap-6 cursor-grab"
                    style={{ x }}
                    whileTap={{ cursor: "grabbing" }}
                    onDragStart={() => setIsDragging(true)}
                    onDragEnd={() => setIsDragging(false)}
                >
                    {images.map((image) => (
                        <motion.div
                            key={image.id}
                            className="min-w-[40vw] p-[3vw]"
                            animate={{ scale: isDragging ? 0.75 : 1 }} // Scale down on drag
                            transition={{
                                type: "tween",
                                stiffness: 150,
                                damping: 10,
                            }}
                        >
                            <figure className="relative pb-[50%] overflow-hidden">
                                <Image
                                    src={image.url}
                                    alt="image"
                                    fill
                                    draggable={false}
                                    className="object-cover"
                                />
                            </figure>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Progress Bar */}
            <div className="w-[20vw] h-1 mt-8 bg-neutral-500/90">
                <motion.div
                    style={{ width: `${progress}%` }}
                    className="h-full bg-white"
                />
            </div>
        </section>
    );
};

export default Professions;
