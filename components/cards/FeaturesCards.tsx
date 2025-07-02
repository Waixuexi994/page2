"use client";

import React from "react";
import { CloudIcon, ProfileSearch, SymbolsSpeed } from "../icons";
import { motion } from "motion/react";

const FeaturesCards = (): JSX.Element => {
  const features = [
    {
      title:
        "统一API接口，单一端点访问300+AI模型，无需多家集成。",
      icon: <ProfileSearch />,
    },
    {
      title:
        "闪电般快速，全球基础设施提供低延迟、高吞吐量的API服务。",
      icon: <SymbolsSpeed />,
    },
    {
      title:
        "99.9%可用性保障，SOC 2 Type II认证，企业级安全保护。",
      icon: <CloudIcon />,
    },
  ];
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-4xl mx-auto grid lg:grid-cols-3 lg:grid-rows-1 grid-cols-1 grid-rows-3 gap-10 align-center">
        {features.map((feature, idx) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: idx * 0.1 }}
            className="space-y-4  flex items-center justify-center flex-col"
          >
            <div className="size-14 flex items-center justify-center">
              {feature.icon}
            </div>
            <p className="text-center max-w-xs mx-auto">{feature.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesCards;
