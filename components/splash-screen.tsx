"use client";
import { motion } from "motion/react";

const SplashScreen = () => {
    const texts = [
        "Laurent Hayot",
        "Video Editor",
        "Post Producer",
        "Film Director",
    ];

    const config = {
        letterStaggerDelay: 0.02, // Delay between each letter's animation
        textDisplayDuration: 0.5, // How long each completed text stays visible
        transitionGap: 0.1, // Gap between text transitions
        animationDuration: 1, // Duration of each letter's animation
        lastTextPermanent: true, // Whether the last text stays visible or animates out
    };

    // Function to calculate delay for a specific letter in a specific text
    const calculateDelay = (textIndex: number, letterIndex: number) => {
        let delay = 0;

        // Add delay for all previous texts
        for (let i = 0; i < textIndex; i++) {
            // Each previous text contributes:
            // 1. Its own letter animations
            // 2. Display duration for the completed text
            delay +=
                texts[i].length * config.letterStaggerDelay +
                config.textDisplayDuration;
        }

        // Add stagger delay for current letter
        delay += letterIndex * config.letterStaggerDelay;

        return delay;
    };

    // Function to calculate when a text becomes visible
    const calculateTextVisibility = (textIndex: number) => {
        // Text should start fading in right before its first letter starts animating
        return calculateDelay(textIndex, 0) - 0.1;
    };

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#FFF0D7]"
        >
            <motion.div className="relative w-full text-4xl overflow-hidden font-bold text-center text-black h-12">
                {texts.map((text, textIndex) => (
                    <motion.div
                        key={`text-${textIndex}`}
                        className={textIndex > 0 ? "absolute inset-0" : ""}
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: [0, 0, 1, 1],
                        }}
                        transition={{
                            duration: 0.4,
                            times: [0, 0.49, 0.5, 1],
                            delay: calculateTextVisibility(textIndex),
                        }}
                    >
                        {text.split("").map((letter, letterIndex) => (
                            <motion.span
                                key={`text-${textIndex}-letter-${letterIndex}`}
                                initial={{ y: "100%" }}
                                animate={{
                                    y:
                                        textIndex === texts.length - 1 &&
                                        config.lastTextPermanent
                                            ? [
                                                  "100%", // Start below
                                                  0, // Come to position
                                                  0, // Stay in position
                                              ]
                                            : [
                                                  "100%", // Start below
                                                  0, // Come to position
                                                  0, // Stay in position
                                                  "-100%", // Move up out of view
                                              ],
                                }}
                                style={{
                                    lineHeight: 1.3,
                                }}
                                transition={{
                                    duration: config.animationDuration,
                                    times:
                                        textIndex === texts.length - 1 &&
                                        config.lastTextPermanent
                                            ? [0, 0.3, 1]
                                            : [0, 0.3, 0.8, 1],
                                    delay: calculateDelay(
                                        textIndex,
                                        letterIndex
                                    ),
                                    ease: "easeInOut",
                                }}
                                className="inline-block"
                            >
                                {letter === " " ? "\u00A0" : letter}
                            </motion.span>
                        ))}
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default SplashScreen;
