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
