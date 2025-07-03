import Contact from "@/components/cards/contact";
import FeaturesCards from "@/components/cards/FeaturesCards";
import Feedbacks from "@/components/cards/feedbacks";
import ProductPreview from "@/components/cards/ProductPreview";
import FAQSection from "@/components/faq";
import Features from "@/components/features";
import Grids from "@/components/grids";
import Header from "@/components/header";
import { Hero } from "@/components/hero";
import MapSection from "@/components/mapSection";
import Pricing from "@/components/pricing";
import { ApiPricingComparison } from "@/components/api-pricing-comparison";

export const metadata = {
  title: "APICore.ai — 一站式 AI 模型接口聚合平台（低价、快速、稳定）",
  description:
    "APICore.ai 提供超过 300 个文本、图像、音频、视频 AI 模型统一调用接口，价格低至 0.0003 美元，企业级 SLA，开发效率提升 80%。",
  keywords: ["APICore", "AI 接口", "GPT4o API", "便宜 AI 接口", "一站式 AI 平台"],
  alternates: {
    canonical: "https://apicore.ai/",
  },
  openGraph: {
    title: "APICore.ai – 最好用的 AI 模型 API 聚合平台",
    description: "统一接入 300+ AI 模型，GPT4o、文生图、TTS 一次搞定",
    url: "https://apicore.ai/",
    siteName: "APICore.ai",
    images: [
      {
        url: "/og-cover.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "APICore.ai - AI 模型接口平台",
    description: "一站式 AI 接口调用平台，覆盖 GPT-4o、文生图、音频、视频等模型",
    creator: "@yourTwitterUsername", // 👈 你可以填空字符串 "", 或删掉这一行
  },
};


export default function Home() {
  return (
    <div>
      <Hero />
      <ApiPricingComparison />
      <Features />
      <FeaturesCards />
      <ProductPreview />
      <Header
        badge="核心特性"
        title="企业级AI API服务"
        subtitle="我们提供流式传输支持、高级分析、轻松集成等企业级功能，
        让您的AI应用开发更加高效。"
      />

      <Grids />
      <Header
        badge="全球服务"
        title="全球基础设施保障"
        subtitle="我们的平台在全球部署，提供99.9%可用性保障，确保您的服务始终在线"
        className="mt-40 md:mt-40"
      />
      <MapSection />
      <Header
        badge="透明定价"
        title="成本节省50-90%"
        subtitle="相比官方价格，我们提供更优惠的价格，让每个开发者都能用得起AI。"
        className="mt-3"
      />
      <Pricing />
      <Header
        badge="开发者评价"
        title="受到全球开发者信赖"
        subtitle="来自世界各地的开发者选择APICore.ai作为他们的AI API服务商。看看他们的评价。"
        className="my-10"
      />
      <Feedbacks />
      <FAQSection />
      <Contact />
    </div>
  );
}
