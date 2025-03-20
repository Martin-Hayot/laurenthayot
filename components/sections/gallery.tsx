"use client";
import { Clapperboard } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

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
    {
        id: 8,
        url: "https://picsum.photos/690/300",
    },
    {
        id: 9,
        url: "https://picsum.photos/700/300",
    },
];

const Gallery = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [hoveredImage, setHoveredImage] = useState<number | null>(null);

    return (
        <section className="h-[100vh]">
            <div className="p-12">
                <h2 className="text-2xl">[ Gallery ]</h2>
                <div className="grid grid-cols-3 gap-4 mt-4 w-full">
                    {images.map((image) => (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: "50%" }}
                            animate={{ scale: 1, y: "0%" }}
                            whileInView={{ opacity: 1 }}
                            onHoverStart={() => {
                                setIsHovered(true);
                                setHoveredImage(image.id);
                            }}
                            onHoverEnd={() => {
                                setIsHovered(false);
                                setHoveredImage(null);
                            }}
                            transition={{
                                duration: 0.5,
                                ease: "easeInOut",
                            }}
                            key={image.id}
                            className="relative flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg"
                        >
                            <Image
                                src={image.url}
                                alt={`Image ${image.id}`}
                                width={600}
                                height={300}
                                priority
                                draggable="false"
                                style={{
                                    opacity:
                                        isHovered && image.id === hoveredImage
                                            ? 0.5
                                            : 1,
                                    scale:
                                        isHovered && image.id === hoveredImage
                                            ? 1.05
                                            : 1,
                                    transition: "all 0.2s ease-in-out",
                                }}
                                className="w-full h-full object-cover rounded-lg"
                            />
                            <div className="absolute inset-0 w-full h-full">
                                {/* Overlay effect on hover */}
                                {isHovered && hoveredImage === image.id && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{
                                            delay: 0.1,
                                            duration: 0.3,
                                            ease: "easeInOut",
                                        }}
                                        className="w-full h-full p-2 text-xl font-bold"
                                    >
                                        <div className="text-white p-3 flex flex-row items-center">
                                            <Clapperboard className="w-6 h-6" />
                                            <span className="ml-2">
                                                Video Title
                                            </span>
                                        </div>
                                        <div className="text-white max-w-[60%] p-3 text-base">
                                            Lorem, ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Repudiandae, iste? Lorem ipsum dolor
                                            sit amet consectetur adipisicing
                                            elit. Quisquam, quae.
                                        </div>
                                        <div className="absolute bottom-4 left-4 w-full">
                                            Laurent Hayot
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
