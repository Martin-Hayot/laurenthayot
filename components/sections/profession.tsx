"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

const images = [
    {
        id: 1,
        url: "https://picsum.photos/300/300",
    },
    {
        id: 2,
        url: "https://picsum.photos/300/300",
    },
    {
        id: 3,
        url: "https://picsum.photos/300/300",
    },
    {
        id: 4,
        url: "https://picsum.photos/300/300",
    },
    {
        id: 5,
        url: "https://picsum.photos/300/300",
    },
];

const Professions = () => {
    return (
        <section className="h-[100vh] w-full">
            <div className="mx-auto flex flex-col items-center justify-center h-full">
                <h2 className="text-7xl text-center">Professions</h2>
                <div className="w-full overflow-hidden whitespace-nowrap">
                    {images.map((image) => (
                        <div
                            className="inline-block w-[40vw] p-[3vw]"
                            key={image.id}
                        >
                            <motion.figure className="relative pb-[50%] overflow-hidden">
                                <img
                                    src={image.url}
                                    alt="image"
                                    className="object-cover absolute w-full"
                                />
                            </motion.figure>
                        </div>
                    ))}
                </div>

                {/** Slider Progress Bar*/}
                <div className="w-[20vw] h-1 m-8 bg-red-600/90"></div>
            </div>
        </section>
    );
};

export default Professions;
