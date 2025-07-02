"use client";

import React from "react";
import Badge from "./ui/badge";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const Features = ({ className }: { className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.2 }}
      className={cn(
        "flex flex-col items-center justify-center space-y-3 my-16 md:my-24",
        className
      )}
    >
      <Badge>为生产环境而构建</Badge>
      <h1 className="md:text-4xl font-semibold mb-2 lg:text-5xl text-2xl">
        为什么开发者选择APICore.ai
      </h1>
      <p className="text-center w-72 md:w-[670px] md:text-base lg:text-lg text-sm px-1">
        由开发者打造，为开发者服务。我们提供统一API接口、显著成本节省、
        闪电般快速、企业级安全、开发者优先和24/7技术支持。
      </p>
    </motion.div>
  );
};

export default Features;
