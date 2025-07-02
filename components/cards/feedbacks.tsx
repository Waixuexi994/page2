"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Feedbacks = (): JSX.Element => {
  return (
    <div className="w-full flex items-center justify-center mt-10 md:mt-40 mb-10">
      <div className="w-full mx-auto max-w-7xl flex justify-between gap-5">
        <div className="flex gap-6 lg:flex-row flex-col h-full lg:h-[1000px] w-full">
          <div className="space-y-6 w-full">
            <Card
              quote="APICore.ai让我们的AI产品开发成本降低了70%。统一的API接口让我们能够快速切换不同的AI模型，而不需要修改代码。99.9%的可用性保障也让我们非常放心。真正做到了为开发者而生！"
              name="张伟"
              role="CTO, 智能科技有限公司"
              src="/assets/avatar/avatar.png"
              className="lg:h-2/3 bg-white shadow-[0px_14px_30px_0px_#0000000D,0px_54px_54px_0px_#0000000A,0px_122px_73px_0px_#00000008,0px_217px_87px_0px_#00000003,0px_340px_95px_0px_#00000000]"
            />
            <Card
              quote="从官方API迁移到APICore.ai只用了5分钟，每月节省了数万元的API费用。技术支持团队非常专业。"
              name="李明"
              role="独立开发者"
              src="https://images.unsplash.com/photo-1638347419042-40d24bb64d0d?q=80&w=3130&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="lg:h-1/3"
            />
          </div>
          <div className="space-y-6 w-full">
            <Card
              quote="SOC 2 Type II认证让我们的企业客户非常满意。API的响应速度比官方更快，真是意外之喜！"
              name="Sarah Chen"
              role="首席架构师, TechVision Inc."
              src="https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&w=3445&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="lg:h-1/3"
            />
            <Card
              quote="支持300+模型的统一API让我们可以轻松测试不同的AI模型，找到最适合我们业务的解决方案。流式传输支持和详细的使用分析让我们的开发效率大幅提升。真心推荐给所有AI开发者！"
              name="王小美"
              role="AI产品负责人, 未来动力科技"
              src="https://images.unsplash.com/photo-1502323777036-f29e3972d82f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="lg:h-2/3"
            />
          </div>
          <div className="space-y-6 w-full">
            <Card
              quote="24/7技术支持让我们非常安心。之前凌晨2点遇到问题，5分钟就得到了解决。这是真正的企业级服务！"
              name="James Rodriguez"
              role="技术总监, 全球解决方案公司"
              src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="lg:h-1/3"
            />

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className={
                "flex 2xl:h-2/3 h-[600px] gap-4 justify-center items-end w-full rounded-[35px] bg-[url('/assets/video_banner.png')] bg-cover p-10 bg-[#F5F5F5]"
              }
            >
              <button className="rounded-xl border border-white text-white w-fit text-lg font-semibold bg-white/50 px-8 py-3 flex items-center justify-center">
                观看评测视频
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;

const Card: React.FC<{
  className?: string;
  quote?: string;
  src?: string;
  name?: string;
  role?: string;
}> = ({
  className,
  quote = "The ",
  src = "/assets/avatar/avatar.png",
  name = "Manu Arora",
  role = "Founder of Aceternity",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      className={cn(
        "flex flex-col gap-4 md:min-h-[600px] xl:min-h-[400px] h-full justify-between w-full rounded-[35px] border border=[#DBDCDE] p-10 bg-[#F5F5F5]",
        className
      )}
    >
      <p className="text-sm md:text-lg text-[#3C3C3C] md:leading-8 font-normal mb-8 max-h-36">
        {quote}
      </p>
      <div className="flex items-center gap-4">
        <Image
          className="rounded-lg aspect-square object-cover"
          src={src}
          alt="avatar"
          width="50"
          height="50"
        />
        <div className="flex flex-col">
          <p className="text-sm md:text-base text-[#4D4D4D] font-normal">
            {name}
          </p>
          <p className="text-xs md:text-sm text-[#1F2534] font-normal">
            {role}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
