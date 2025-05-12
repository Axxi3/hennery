'use client';

import React, { JSX, useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import processSteps from '../../assets/Process';
import Tag from '../ui/Tag';

export default function Process(): JSX.Element {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end']
  });

  const x = useTransform(scrollYProgress, [0, 1], ['43%', '-40%']);

  return (
    <div  className="md:h-[550dvw] w-full md:mb-0 mb-[80px]" id="process" ref={targetRef}>
      <div className="w-full sticky top-7 md:h-screen mt-[180px] flex flex-col gap-[15px] justify-center">
        {/* Section Title */}
        <div className="w-full flex items-center justify-center gap-2">
          <Tag>How it Works?</Tag>
        </div>

        <div className="w-full">
          <p className="lg:text-[42px] md:text-[35px] text-[28px] tracking-tighter leading-[43px] text-center">
            We handle everything, from content creation to platform adaptation
          </p>
        </div>

        {/* Sticky Card Section for Desktop */}
        <div className="w-full md:flex hidden justify-center mt-10 scrollbar-hide overflow-hidden">
          <motion.div style={{ x }} className="flex gap-5 md:px-5 px-0 scrollbar-hide">
            {processSteps.map((item, index) => (
              <div
                key={index}
                className="w-[100vw] flex flex-col md:flex-row items-center justify-center md:px-6 py-9 rounded-xl"
              >
                <div className="rounded-3xl overflow-hidden flex items-center justify-center w-[200px] h-[200px] md:w-[250px] md:h-[250px] bg-[#000]"
                 style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='40' height='40' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='rgba(107, 114, 128, 0.2)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
                    backgroundSize: "40px 40px",
                  }}>
              
                  <img
                    src={item.icon.src}
                    alt=""
                    className="mix-blend-screen w-[120px] md:w-[100px] h-auto"
                  />
                </div>
                <div className="flex flex-col justify-between w-full md:w-[50%] pl-0 md:pl-8 mt-6 md:mt-0 text-center md:text-left">
                  <div className="text-[28px] md:text-[35px] opacity-75">0{index + 1}</div>
                  <h3 className="text-[22px] md:text-[26px] tracking-tight">{item.tag}</h3>
                  <p className="text-[14px] md:text-[18px] opacity-75">{item.body}</p>
                  <p className="text-[14px] md:text-[15px] rounded-4xl flex w-fit px-4 py-1 mt-5 text-black bg-[#49AA3B] mx-auto md:mx-0">
                    {item.output}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Mobile View */}
        <div className="w-full md:hidden flex flex-col gap-10 justify-center mt-10 overflow-hidden">
          {processSteps.map((item, index) => (
            <div
              key={index}
              className="w-full flex flex-col items-center justify-center px-6 py-9 rounded-xl"
            >
              <div className="rounded-3xl flex items-center justify-center w-[200px] h-[200px] md:w-[250px] md:h-[250px] bg-[#000]">
                <img
                  src={item.icon.src}
                  alt=""
                  className="mix-blend-screen w-[120px] md:w-[150px] h-auto"
                />
              </div>
              <div className="flex flex-col justify-between w-full px-4 mt-6 text-center">
                <div className="text-[28px] md:text-[35px] opacity-75">0{index + 1}</div>
                <h3 className="text-[22px] md:text-[26px] tracking-tight">{item.tag}</h3>
                <p className="text-[16px] md:text-[18px] opacity-75">{item.body}</p>
               <p className="text-[14px] md:text-[15px] rounded-4xl flex w-fit px-4 py-1 mt-5 text-black bg-[#49AA3B] mx-auto">
  Output: {item.output}
</p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
