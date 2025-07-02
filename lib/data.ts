export const graphData: Array<{
  id: number;
  currentHeight?: string;
  previousHeight?: string;
}> = [
  {
    id: 1,
    currentHeight: "50px",
    previousHeight: "38px",
  },
  {
    id: 2,
    currentHeight: "101px",
    previousHeight: "67px",
  },
  {
    id: 3,
    currentHeight: "122px",
    previousHeight: "92px",
  },
  {
    id: 4,
    currentHeight: "85px",
    previousHeight: "44px",
  },
  {
    id: 5,
    currentHeight: "50px",
    previousHeight: "31px",
  },
  {
    id: 6,
    currentHeight: "106px",
    previousHeight: "80px",
  },
];

export const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
export const variants = {
  hidden: { transform: "translateY(20%)", opacity: 0 },
  visible: { transform: "translateY(0)", opacity: 1 },
};
export const cardVariants = {
  hidden: { opacity: 0, transform: "scale(0.9) rotate(5deg)" },
  visible: { opacity: 1, transform: "scale(1) rotate(0deg)" },
};

export const FAQData: {
  title: string;
  description: string;
}[] = [
  {
    title: "什么是 APICore.ai？它是如何工作的？",
    description:
      "APICore.ai 是一个 AI 平台，为开发者和企业提供先进的 AI 接口，它提供强大的 AI 接口，支持文本生成、音乐创作、视频生成等多种功能。",
  },
  {
    title: "如何开始使用APICore.ai？",
    description:
      "开始使用非常简单：1) 注册账号并获得免费额度；2) 获取API密钥；3) 使用我们的统一API端点调用任何模型。我们提供详细的文档和示例代码，支持Python、JavaScript、Java等多种编程语言。从其他平台迁移通常只需更改API端点和密钥即可。",
  },
  {
    title: "为什么APICore.ai比官方便宜这么多？",
    description:
      "我们通过以下方式实现成本优化：1) 大规模采购获得批量优惠；2) 智能路由和负载均衡降低运营成本；3) 高效的技术架构减少资源浪费。我们致力于让每个开发者都能用得起AI，而不是追求高利润。",
  },
  {
    title: "APICore.ai的安全性如何？",
    description:
      "我们非常重视安全性：1) SOC 2 Type II认证确保企业级安全标准；2) 所有API请求使用HTTPS加密传输；3) 我们不存储您的输入数据或输出结果；4) 支持IP白名单和访问控制；5) 24/7安全监控和异常检测。",
  },
  {
    title: "支持哪些AI模型？",
    description:
      "我们支持300+个AI模型，包括：GPT-4、GPT-3.5、Claude 3、Gemini Pro、LLaMA、Mistral等文本生成模型；DALL-E、Stable Diffusion、Midjourney等图像生成模型；Whisper、TTS等语音模型。我们持续更新模型列表，确保您能使用最新的AI技术。",
  },
  {
    title: "如果遇到问题怎么办？",
    description:
      "我们提供24/7技术支持：1) 在线客服即时响应；2) 详细的API文档和FAQ；3) 开发者社区互助；4) 企业客户专属技术支持。大部分问题可以在几分钟内得到解决。您也可以通过添加微信：xcc99444",
  },
];

// World Map data
export const WorldMapDotsData = [
  {
    start: {
      lat: 60.2008,
      lng: -149.4937,
    },
    end: {
      lat: -21.7975,
      lng: -60.8919,
    },
  },
  {
    start: { lat: 60.2008, lng: -149.4937 },
    end: { lat: 75.7975, lng: -42.8919 },
  },
  {
    start: { lat: -21.7975, lng: -60.8919 },
    end: { lat: 4.7223, lng: 16.1393 },
  },
  {
    start: {
      lat: 70.7975,
      lng: -42.8919,
    },
    end: {
      lat: 4.7223,
      lng: 16.1393,
    },
  },
  {
    start: {
      lat: 65.5074,
      lng: 100.1278,
    },
    end: {
      lat: 75.7975,
      lng: -42.8919,
    },
  },
  {
    start: {
      lat: 4.7223,
      lng: 16.1393,
    },
    end: {
      lat: 65.5074,
      lng: 100.1278,
    },
  },
  {
    start: {
      lat: 10.5074,
      lng: 95.1278,
    },
    end: {
      lat: 4.7223,
      lng: 16.1393,
    },
  },
];

export const WorldMapAvatarsData = [
  {
    lat: 60.2008,
    lng: -149.4937,
    url: "/assets/avatar/avatar1.png",
    size: 20,
  },
  {
    lat: -21.7975,
    lng: -60.8919,
    url: "/assets/avatar/avatar2.png",
    size: 26,
  },
  {
    lat: 75.7975,
    lng: -42.8919,
    url: "/assets/avatar/avatar3.png",
    size: 28,
  },
  {
    lat: 4.7223,
    lng: 16.1393,
    url: "/assets/avatar/avatar4.png",
    size: 30,
  },
  {
    lat: 65.5074,
    lng: 100.1278,
    url: "/assets/avatar/avatar5.png",
    size: 35,
  },
  {
    lat: 10.5074,
    lng: 95.1278,
    url: "/assets/avatar/avatar6.png",
    size: 19,
  },
];
