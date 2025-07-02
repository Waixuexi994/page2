"use client";

import React from "react";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full py-8 mt-20 border-t border-gray-200"
    >
      <div className="flex justify-center items-center">
        <p className="text-gray-500 text-sm">
          © 2024 APICore.ai - 专业的AI API服务平台
        </p>
      </div>
    </motion.div>
  );
};

export default Footer;
