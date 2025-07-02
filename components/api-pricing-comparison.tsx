"use client";

import React from "react";
import { motion } from "motion/react";
import Badge from "./ui/badge";
import { Check } from "lucide-react";

interface ApiPrice {
  name: string;
  description: string;
  ourPrice: string;
  officialPrice: string;
  savings: string;
}

const apiPrices: ApiPrice[] = [
  {
    name: "veo3-fast",
    description: "AI视频生成",
    ourPrice: "¥1.00",
    officialPrice: "¥10.00",
    savings: "90%"
  },
  {
    name: "gpt-4o-image",
    description: "图像理解分析",
    ourPrice: "¥0.02",
    officialPrice: "¥0.20",
    savings: "90%"
  },
  {
    name: "suno",
    description: "AI音乐创作",
    ourPrice: "¥0.43",
    officialPrice: "¥4.00",
    savings: "90%"
  },
  {
    name: "flux-kontext-pro",
    description: "专业图像生成",
    ourPrice: "¥0.12",
    officialPrice: "¥1.20",
    savings: "90%"
  }
];

export const ApiPricingComparison = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full py-20"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <div className="mb-4">
            <Badge>APICore.ai vs 其他平台</Badge>
          </div>
          <h2 className="text-4xl font-bold mb-4">价格对比一目了然</h2>
          <p className="text-lg text-gray-600">
            使用APICore.ai，享受同样的服务质量，节省高达90%的成本
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {apiPrices.map((api, index) => (
            <motion.div
              key={api.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
            >
              <div className="absolute -top-3 -right-3 bg-red-500 text-white text-sm font-bold rounded-full px-3 py-1">
                节省{api.savings}
              </div>
              
              <h3 className="text-xl font-bold mb-2">{api.name}</h3>
              <p className="text-sm text-gray-600 mb-6">{api.description}</p>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">官方价格</span>
                  <span className="text-lg line-through text-gray-400">
                    {api.officialPrice}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-emerald-600">
                    我们的价格
                  </span>
                  <span className="text-2xl font-bold text-emerald-600">
                    {api.ourPrice}
                  </span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center text-sm text-gray-600">
                  <Check className="w-4 h-4 text-emerald-500 mr-2" />
                  相同的API质量
                </div>
                <div className="flex items-center text-sm text-gray-600 mt-2">
                  <Check className="w-4 h-4 text-emerald-500 mr-2" />
                  更低的价格
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-gray-600 mb-6">
            还有300+个AI模型等你探索，全部享受超低价格
          </p>
          <a
            href="https://api.apicore.ai/pricing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-gradient-to-b from-emerald-500 to-emerald-600 text-white font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-colors"
          >
            查看完整价格表
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};