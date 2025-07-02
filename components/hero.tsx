"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import IconBoxHero from "./cards/iconBoxHero";
import Analytics from "./cards/Analytics";
import SocialMediaCard from "./cards/SocialMediaCard";
import PaperPinCard from "./cards/paperPin";
import Link from "next/link";
import { cardVariants, transition, variants } from "@/lib/data";
import { ArrowRight } from "lucide-react";

const text = "两个API访问300+AI模型，成本节省30-50%，甚至更低";

export const Hero = () => {
  const words = text.split(" ");
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="md:h-[912px] h-[710px] p-4 relative rounded-[35px] border border-[#E6E6E6] mt-5 overflow-hidden"
    >
      <div
        className="absolute -z-20 top-0 left-0 w-full h-full"
        style={{
          backgroundImage:
            "radial-gradient(circle, #e6e6e6 1px, transparent 1px)",
          backgroundSize: "10px 10px",
        }}
      />

      <div className="absolute -z-10 md:top-24 md:left-36 top-4 left-4 rotate-[-15.11deg]">
        <motion.div
          variants={{
            hidden: { opacity: 0, transform: "scale(0.8) rotate(10deg)" },
            visible: { opacity: 1, transform: "scale(1) rotate(0deg)" },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{
            delay: 0.2,
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          <IconBoxHero />
        </motion.div>
      </div>

      <div className="absolute -z-10 md:bottom-80 md:right-96 bottom-64 right-11 rotate-[14deg]">
        <motion.div
          variants={{
            hidden: { opacity: 0, transform: "scale(0.8) rotate(10deg)" },
            visible: { opacity: 1, transform: "scale(1) rotate(0deg)" },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{
            delay: 0.2,
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          <IconBoxHero />
        </motion.div>
      </div>

      <div className="absolute -z-10 md:bottom-52 bottom-36 md:-left-5 -left-14 rotate-[12deg] hidden md:block">
        <motion.div
          variants={{
            hidden: { opacity: 0, transform: "scale(1) rotate(0deg)" },
            visible: { opacity: 1, transform: "scale(0.9) rotate(5deg)" },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          <Analytics color="#e2e8f0" />
        </motion.div>
      </div>

      <div className="absolute -z-10 md:-bottom-40 -bottom-36 md:-left-20 -left-32 rotate-[20deg]">
        <motion.div
          variants={{
            hidden: { opacity: 0, transform: "scale(1) rotate(0deg)" },
            visible: { opacity: 1, transform: "scale(0.9) rotate(5deg)" },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          <SocialMediaCard className="md:[&>*]:scale-100 [&>*]:scale-[0.6]" />
        </motion.div>
      </div>

      <div className="absolute -z-10 md:-bottom-16 md:right-72 -bottom-20 right-16 rotate-[-19deg]">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          <Analytics color="#DFEBF3" />
        </motion.div>
      </div>

      <div className="absolute -z-10 md:-bottom-36 md:-right-10 -bottom-36 -right-48 rotate-[-12deg]">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          <PaperPinCard className="md:[&>*]:scale-100 [&>*]:scale-75" />
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.04 }}
        className="w-full h-5/6 flex flex-col items-center justify-center"
      >
        <h1 className="md:text-6xl text-2xl font-bold text-center md:w-4/6 w-full mt-8">
          {words.map((word, index) => (
            <React.Fragment key={index}>
              <motion.span
                className="inline-block"
                transition={transition}
                variants={variants}
              >
                {word}
              </motion.span>
              {index < words.length - 1 && " "}
            </React.Fragment>
          ))}
        </h1>
        <motion.p
          transition={transition}
          variants={variants}
          className="md:text-lg text-sm font-medium leading-[23px] text-center tracking-tight max-w-2xl mx-auto w-[95%] mt-9 text-neutral-600"
        >
          为开发者打造，为开发者服务。统一API接口，显著成本节省，
          闪电般快速，企业级安全。99.9%可用性保障。
        </motion.p>
        <Link href="https://api.apicore.ai/login" target="_blank" rel="noopener noreferrer">
          <motion.button
            transition={transition}
            variants={variants}
            style={{ boxShadow: "0px 4px 14.8px rgba(0, 0, 0, 0.2)" }}
            className="flex items-center justify-center w-56 h-12 mt-9 rounded-xl border border-emerald-700 bg-gradient-to-b from-emerald-500 to-brand text-base font-semibold text-white"
          >
            开始使用
            <ArrowRight className="h-4 w-4 ml-2" />
          </motion.button>
        </Link>
      </motion.div>
    </motion.div>
  );
};
