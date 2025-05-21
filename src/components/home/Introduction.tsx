"use client";
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";


const text = `At Henry Brand Labs, we believe branding is about more than just visibility — it's about creating lasting impact.
Our team of strategists, designers, and media experts crafts custom brand strategies to build loyalty, drive engagement, and ensure long-term success.`;
const words = text.split(" "); // Split by spaces to get words

export default function Introduction() {
    const scrollTarget = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: scrollTarget,
        offset: ["start end", "end end"],
    });

    const [currentWord, setCurrentWord] = useState(0);

    const wordIndex = useTransform(scrollYProgress, [0, 0.9], [0, words.length]);

    useEffect(() => {
        const unsubscribe = wordIndex.on("change", (latest) => {
            setCurrentWord(latest); // Round down to get whole word indexes
        });
        
        return () => unsubscribe(); // Clean up subscription
    }, [wordIndex]);

    return (
        <section id="about-us" className="py-24 bg-black relative flex flex-col justify-center items-center lg:px-40">
            <div className="md:w-full container relative md:px-[4%]">
                <div className="sticky top-5 lg:top-36"> {/* Adjusted sticky positioning */}
                    <div className="flex justify-center">
                        <p className="text-[#F0CF3B] uppercase font-bold text-[14px] md:text-[18px]">Who Are We?</p>
                    </div>

                    <div className="text-2xl px-4 md:text-5xl md:leading-[55px] leading-[45px] text-center font-medium mt-8 text-white">
                        <span>Your creative process deserves better.</span>{" "}
                        <div className="min-h-[220px] md:min-h-[165px]"> {/* Fixed height container for text */}
                            {words.map((word, index) => (
                                <span 
                                    key={index} 
                                    className={twMerge(
                                        "transition-all duration-300 inline-block mr-1",
                                        index < currentWord ? "text-white" : "text-gray-500"
                                    )}
                                >
                                    {word}
                                </span>
                            ))}
                        </div>
                        <span className="text-[#F0CF3B] block mt-4">
                            That&apos;s why we started Henry Brand Labs.
                        </span>
                    </div>
                </div>
                <div className="h-[200vh]" ref={scrollTarget}></div> {/* Increased scroll space */}
            </div>
        </section>
    );
}