'use client';   

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import { partnersLogos } from "@/assets/constants";




export default function LogoTicker() {
    return <section className="py-12 overflow-x-clip ">
        <div className="w-full lg:px-15">
            <h3 className="text-center text-white/60 text-xl">Already chosen by these market leaders</h3>
            <div className="flex overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <motion.div 
                animate={{
                    x:"-50%",
                }}
                transition={{
                    duration:30,
                    ease:"linear",
                    repeat: Infinity,
                }}
                className="flex flex-none gap-24 pr-24">
                    {
                        Array.from({length: 2}).map((_, i)=>(
                            <React.Fragment key={i}>
                             {partnersLogos.map((logo, index) => (
                       <Image src={logo.image} key={index} width={125} height={28} alt={logo.name} />
                    ))}
                            </React.Fragment>
                    
                        ))}
                   
                </motion.div>
            </div>
        </div>
    </section>;
}
