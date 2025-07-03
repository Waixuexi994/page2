"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { CheckIcon } from "./icons";
import { motion } from "motion/react";
import { Zap } from "lucide-react";

const Pricing = (): JSX.Element => {
  const apiExamples = [
    { name: "GPT-4o", ourPrice: "¥0.02/1K tokens", officialPrice: "¥0.20/1K tokens", savings: "90%" },
    { name: "Claude 3.5", ourPrice: "¥0.03/1K tokens", officialPrice: "¥0.30/1K tokens", savings: "90%" },
    { name: "Gemini Pro", ourPrice: "¥0.01/1K tokens", officialPrice: "¥0.10/1K tokens", savings: "90%" },
  ];

  // 处理按钮点击事件
  const handleButtonClick = (action: string) => {
    switch (action) {
      case 'trial':
        window.open('https://api.apicore.ai/login', '_blank');
        break;
      case 'topup':
        window.open('https://api.apicore.ai/topup', '_blank');
        break;
      case 'contact':
        // 复制微信号到剪贴板
        navigator.clipboard.writeText('xcc99444').then(() => {
          alert('微信号 "xcc99444" 已复制到剪贴板！\n请添加微信联系销售人员。');
        }).catch(() => {
          // 如果复制失败，显示微信号
          alert('微信联系方式: xcc99444\n请手动复制此微信号联系销售人员。');
        });
        break;
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* 价格优势说明 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12 max-w-3xl"
      >
        <div className="inline-flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-full mb-6">
          <Zap className="w-4 h-4 text-emerald-600" />
          <span className="text-emerald-700 font-medium">按需付费，无需订阅</span>
        </div>
        <p className="text-lg text-gray-600">
          只需充值即可使用，无最低消费，无月费。支持300+模型，统一计费方式。
        </p>
      </motion.div>

      {/* 主要定价卡片 */}
      <div className="w-full flex flex-col lg:flex-row lg:flex items-center justify-center space-x-0 lg:space-x-10 space-y-10 lg:space-y-0">
        {/* 免费试用 */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{
            delay: 0.3,
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="h-[500px] w-full bg-[#F5F5F5] rounded-3xl p-6 lg:p-8 xl:p-12 border"
        >
          <span className="text-black text-lg font-semibold">免费试用</span>
          <div className="flex items-end gap-1 my-6">
            <span className="text-4xl md:text-5xl text-black font-bold">
              ¥0
            </span>
            <span className="text-gray-600 mb-2">/注册赠送</span>
          </div>
          <Button variant="primary" className="my-6" onClick={() => handleButtonClick('trial')}>
            立即试用
          </Button>
          <div className="space-y-3">
            {[
              "注册即送测试额度",
              "访问所有300+模型",
              "API文档和示例代码",
              "社区支持",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <CheckIcon color="#000000" />
                <p className="text-sm md:text-base">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 按需付费 */}
        <motion.div
          variants={{
            hidden: { opacity: 0, translateY: "10%" },
            visible: { opacity: 1, translateY: "0%" },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{
            delay: 0.4,
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="relative h-[600px] w-full bg-brand rounded-3xl p-6 lg:p-8 xl:p-12 border shadow-[0px_10px_23px_0px_#0000001a,0px_41px_41px_0px_#00000017]"
        >
          <div className="flex items-center justify-between">
            <span className="text-white text-lg font-semibold">按需付费</span>
            <div className="bg-white py-1 px-3 rounded-full text-sm">最受欢迎</div>
          </div>
          <div className="flex items-end gap-1 my-6">
            <span className="text-white text-2xl">充值</span>
            <span className="text-4xl md:text-5xl text-white font-bold mx-1">
              ¥100
            </span>
            <span className="text-white">起</span>
          </div>
          <Button variant="secondary" className="my-6" onClick={() => handleButtonClick('topup')}>
            立即充值
          </Button>
          
          <div className="space-y-3 mb-6">
            {[
              "比官方便宜50-90%",
              "支持300+AI模型",
              "99.9%可用性保障",
              "企业级API安全",
              "24/7技术支持",
              "详细使用分析",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <CheckIcon textColor="#2BC8FD" color="#ffffff" />
                <p className="text-white text-sm md:text-base">{item}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/10 rounded-xl p-4 mt-4">
            <p className="text-white/90 text-sm font-medium mb-2">热门API价格示例：</p>
            <div className="space-y-2">
              {apiExamples.map((api) => (
                <div key={api.name} className="flex justify-between text-xs">
                  <span className="text-white/80">{api.name}</span>
                  <span className="text-white font-medium">{api.ourPrice}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 企业方案 */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{
            delay: 0.5,
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="h-[500px] w-full bg-[#F5F5F5] rounded-3xl p-6 lg:p-8 xl:p-12 border"
        >
          <span className="text-black text-lg font-semibold">企业方案</span>
          <div className="flex items-end gap-1 my-6">
            <span className="text-3xl md:text-4xl text-black font-bold">
              定制价格
            </span>
          </div>
          <Button variant="primary" className="my-6" onClick={() => handleButtonClick('contact')}>
            联系销售
          </Button>
          <div className="space-y-3">
            {[
              "大批量折扣",
              "专属客户经理",
              "SLA服务保障",
              "私有化部署选项",
              "定制化解决方案",
              "发票和合同支持",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <CheckIcon color="#000000" />
                <p className="text-sm md:text-base">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;

const Button = ({
  children,
  variant,
  className,
  onClick,
}: {
  children: React.ReactNode;
  variant: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      style={{ boxShadow: "0px 4px 14.8px rgba(0, 0, 0, 0.2)" }}
      className={cn(
        "flex items-center justify-center w-full h-10 rounded-2xl p-6 font-medium text-lg cursor-pointer transition-transform hover:scale-105",
        variant === "primary"
          ? "bg-gradient-to-b border border-emerald-700 from-emerald-500 to-brand text-white"
          : "bg-white",
        className
      )}
    >
      {children}
    </button>
  );
};
