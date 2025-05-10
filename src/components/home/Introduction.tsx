"use client";
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import Tag from "../ui/Tag";

const text = `We're a team of brand builders, content creators, and media pros helping founders become trusted authorities—no ads, no gimmicks.
At Henry Brand Labs, we combine strategy and creativity to grow awareness, drive engagement, and build loyal audiences.`;
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
        <section className="py-24 relative lg:px-40">
            <div className="md:w-full container relative md:px-[4%]">
                <div className="sticky top-5 lg:top-36"> {/* Adjusted sticky positioning */}
                    <div className="flex justify-center">
                        <Tag>Introducing Techidata</Tag>
                    </div>

                    <div className="text-4xl md:text-5xl md:leading-[55px] leading-[45px] text-center font-medium mt-8 text-white">
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
                        <span className="text-[#E87811] block mt-4">
                            That&apos;s why we started Techidata.
                        </span>
                    </div>
                </div>
                <div className="h-[200vh]" ref={scrollTarget}></div> {/* Increased scroll space */}
            </div>
        </section>
    );
}