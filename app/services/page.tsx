import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, MessageCircle, Palette, Code, Rocket } from "lucide-react"

export default function ServicesPage() {
  const processSteps = [
    {
      icon: MessageCircle,
      title: "お問い合わせ",
      description: "専用フォームからご連絡いただきます。",
    },
    {
      icon: MessageCircle,
      title: "ヒアリング",
      description: "オンラインミーティングで、ご要望や目的を詳しくお伺いします。",
    },
    {
      icon: Palette,
      title: "ご提案・仮サイト制作",
      description: "ヒアリング内容を基に、サイトの構成案と仮デザインを制作します。",
    },
    {
      icon: Code,
      title: "修正・開発",
      description: "お客様が納得するまで、デザインや機能の修正を重ねます。",
    },
    {
      icon: Rocket,
      title: "納品・公開",
      description: "最終確認後、サイトを公開し、運用方法をご説明します。",
    },
  ]

  const services = [
    {
      title: "Webデザイン",
      description:
        "ユーザー体験を重視した、美しく機能的なデザインを制作します。ブランドイメージに合わせたオリジナルデザインをご提案いたします。",
      features: ["UI/UXデザイン", "レスポンシブデザイン", "ブランディング", "プロトタイプ制作"],
    },
    {
      title: "コーディング",
      description:
        "最新の技術を使用し、SEOに配慮した高品質なWebサイトを構築します。どのデバイスでも快適に閲覧できるサイトを制作します。",
      features: ["HTML/CSS", "JavaScript", "React/Next.js", "SEO最適化"],
    },
    {
      title: "保守・運用",
      description:
        "サイト公開後も継続的にサポートいたします。定期的な更新やセキュリティ対策で、安心してサイトを運営していただけます。",
      features: ["定期更新", "セキュリティ対策", "バックアップ", "技術サポート"],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-[#E7D0A9]">Services</span>
          </h1>
          {/* <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">ホームページ制作サービス</p> */}
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">提供サービス</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-[#E7D0A9] mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-[#E7D0A9] mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">料金について</h2>
          <div className="bg-gray-900 p-8 rounded-xl">
            <h3 className="text-3xl font-bold text-[#E7D0A9] mb-4">料金：応相談 / お見積り</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              料金はご要望に応じて柔軟に対応いたします。
              <br />
              プロジェクトの規模や内容によって最適なプランをご提案させていただきますので、
              <br />
              まずはお気軽にご相談ください。
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      {/* <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">制作の流れ</h2>

          <div className="grid md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#E7D0A9] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-black" />
                </div>
                <div className="bg-gray-800 p-6 rounded-xl h-full">
                  <h3 className="text-lg font-bold text-[#E7D0A9] mb-3">{step.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-8 h-0.5 bg-[#E7D0A9] transform translate-x-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Limitations */}
      <section className="py-20 px-6 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">ご注意事項</h2>
          <div className="bg-red-900/20 border border-red-500/30 p-6 rounded-xl">
            <p className="text-gray-300 leading-relaxed">
              ※ECサイト（オンラインストア）や大規模なデータベースを要する動的サイトなど、
              高度なシステム開発を伴うご依頼は現在お受けしておりません。あらかじめご了承ください。
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#E7D0A9] to-[#D7B26B]">
        <div className="max-w-4xl mx-auto text-center text-black">
          <h2 className="text-4xl font-bold mb-6">プロジェクトを始めませんか？</h2>
          <p className="text-xl mb-8 opacity-80">
            まずはお気軽にお問い合わせください。詳しいお見積りをご提案いたします。
          </p>
          <a href="/contact">
            <Button className="bg-black text-[#E7D0A9] hover:bg-gray-800 px-8 py-3 text-lg font-semibold">
              お問い合わせ・お見積り
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </section>
    </div>
  )
}
