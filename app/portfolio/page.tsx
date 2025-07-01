import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink, Calendar } from "lucide-react"

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: "えんけん玉 ECサイト",
      category: "iOS App Development",
      description:
        "企業の魅力を伝えるコーポレートサイトを制作。ブランドイメージに合わせたデザインと、使いやすいナビゲーションを実現しました。https://enkendama.vercel.app/",
      image: "/kendama_3.jpeg?height=400&width=600",
      technologies: ["HTML/CSS", "JavaScript", "Responsive Design"],
      year: "2024",
    },
    {
      id: 2,
      title: "AI受託会社 LP",
      category: "iOS App Development",
      description:
        "企業の魅力を伝えるコーポレートサイトを制作。ブランドイメージに合わせたデザインと、使いやすいナビゲーションを実現しました。",
      image: "/kudoutai.jpg?height=400&width=600",
      technologies: ["HTML/CSS", "JavaScript", "Responsive Design"],
      year: "2024",
    },
    {
      id: 3,
      title: "人材紹介会社 LP",
      category: "iOS App Development",
      description:
        "企業の魅力を伝えるコーポレートサイトを制作。ブランドイメージに合わせたデザインと、使いやすいナビゲーションを実現しました。https://hitomoshi.vercel.app/ https://nexted-three.vercel.app/",
      image: "/hitomoshi.jpeg?height=400&width=600",
      technologies: ["HTML/CSS", "JavaScript", "Responsive Design"],
      year: "2024",
    },
    {
      id: 4,
      title: "教区支援会社 LP",
      category: "iOS App Development",
      description:
        "企業の魅力を伝えるコーポレートサイトを制作。ブランドイメージに合わせたデザインと、使いやすいナビゲーションを実現しました。https://hitomoshi.vercel.app/ https://nexted-three.vercel.app/",
      image: "/nexted.jpeg?height=400&width=600",
      technologies: ["HTML/CSS", "JavaScript", "Responsive Design"],
      year: "2024",
    },
    {
      id: 5,
      title: "TrashTrace（アプリ甲子園2024企業賞）",
      category: "iOS App Development",
      description:
        "企業の魅力を伝えるコーポレートサイトを制作。ブランドイメージに合わせたデザインと、使いやすいナビゲーションを実現しました。",
      image: "https://prcdn.freetls.fastly.net/release_image/19771/296/19771-296-e7b026f698fe14da179d1c094a6be028-1170x632.jpg?width=1950&height=1350&quality=85%2C75&format=jpeg&auto=webp&fit=bounds&bg-color=fff?height=400&width=600",
      technologies: ["HTML/CSS", "JavaScript", "Responsive Design"],
      year: "2024",
    },
    {
      id: 6,
      title: "デジタルスタンプラリー",
      category: "UI/UX Design",
      description:
        "クリエイターの作品を美しく展示するポートフォリオサイト。作品の魅力を最大限に引き出すレイアウトを設計しました。",
      image: "https://kgh-gakuyuukai.sakura.ne.jp/ryoga/CompCouponQR.jpg?height=400&width=600",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      year: "2024",
    },
    {
      id: 7,
      title: "GakuyukaiQR",
      category: "Web Design",
      description:
        "サービスの特徴を効果的に伝えるランディングページ。コンバージョン率向上を意識したデザインと構成を採用しました。",
      image: "https://kgh-gakuyuukai.sakura.ne.jp/ryoga/GakuyukaiQR.png?height=400&width=600",
      technologies: ["HTML/CSS", "JavaScript", "SEO"],
      year: "2023",
    },
    {
      id: 8,
      title: "NumberBomber",
      category: "Web Development",
      description:
        "レストランの雰囲気を伝える美しいサイト。メニューや店舗情報を見やすく整理し、予約機能も実装しました。",
      image: "https://kgh-gakuyuukai.sakura.ne.jp/ryoga/NumberBomber.png?height=400&width=600",
      technologies: ["WordPress", "PHP", "MySQL"],
      year: "2023",
    },
    {
      id: 9,
      title: "関西学院高等部学友会ホームページ",
      category: "Web Design & Development",
      description: "イベントの魅力を伝える特設サイト。参加者の興味を引くデザインと、申し込みフォームを統合しました。",
      image: "https://kgh-gakuyuukai.sakura.ne.jp/ryoga/kghHomePage750px.png?height=400&width=600",
      technologies: ["Vue.js", "Node.js", "MongoDB"],
      year: "2023",
    },
    {
      id: 10,
      title: "四字熟語パズル",
      category: "CMS Development",
      description:
        "個人ブロガー向けのカスタムブログサイト。記事の読みやすさを重視し、SEOに配慮した構造を実装しました。",
      image: "https://kgh-gakuyuukai.sakura.ne.jp/ryoga/yozizyukugo750px.jpg?height=400&width=600",
      technologies: ["WordPress", "Custom Theme", "SEO"],
      year: "2022",
    },
    {
      id: 11,
      title: "数理クイズ×クーポンコードシステム",
      category: "CMS Development",
      description:
        "個人ブロガー向けのカスタムブログサイト。記事の読みやすさを重視し、SEOに配慮した構造を実装しました。",
      image: "https://kgh-gakuyuukai.sakura.ne.jp/ryoga/suuriQuize750px.jpg?height=400&width=600",
      technologies: ["WordPress", "Custom Theme", "SEO"],
      year: "2022",
    },
    {
      id: 12,
      title: "関西学院高等部デジタル意見箱",
      category: "CMS Development",
      description:
        "個人ブロガー向けのカスタムブログサイト。記事の読みやすさを重視し、SEOに配慮した構造を実装しました。",
      image: "https://kgh-gakuyuukai.sakura.ne.jp/ryoga/digiopi750px.png?height=400&width=600",
      technologies: ["WordPress", "Custom Theme", "SEO"],
      year: "2022",
    },
    {
      id: 13,
      title: "顔の類似度検知ソフト",
      category: "CMS Development",
      description:
        "個人ブロガー向けのカスタムブログサイト。記事の読みやすさを重視し、SEOに配慮した構造を実装しました。",
      image: "https://kgh-gakuyuukai.sakura.ne.jp/ryoga/DetectFace%20(2).png?height=400&width=600",
      technologies: ["WordPress", "Custom Theme", "SEO"],
      year: "2022",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-[#E7D0A9]">Portfolio</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">制作実績</p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ExternalLink className="h-8 w-8 text-[#E7D0A9]" />
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-[#E7D0A9] font-medium">{project.category}</span>
                    <div className="flex items-center text-sm text-gray-400">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.year}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-700 text-xs rounded-full text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">使用技術・スキル</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { category: "Frontend", skills: ["HTML/CSS", "JavaScript", "React", "Vue.js", "Next.js"] },
              { category: "Design", skills: ["UI/UX Design", "Figma", "Adobe XD", "Photoshop", "Illustrator"] },
              { category: "Backend", skills: ["Node.js", "PHP", "Python", "MySQL", "MongoDB"] },
              { category: "Tools", skills: ["Git", "WordPress", "SEO", "Google Analytics", "Vercel"] },
            ].map((group, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-[#E7D0A9] mb-4">{group.category}</h3>
                <ul className="space-y-2">
                  {group.skills.map((skill, idx) => (
                    <li key={idx} className="text-gray-300 text-sm">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#E7D0A9] to-[#D7B26B]">
        <div className="max-w-4xl mx-auto text-center text-black">
          <h2 className="text-4xl font-bold mb-6">あなたのプロジェクトも実現しませんか？</h2>
          <p className="text-xl mb-8 opacity-80">これまでの経験を活かし、あなたの理想のWebサイトを制作いたします。</p>
          <Link href="/contact">
            <Button className="bg-black text-[#E7D0A9] hover:bg-gray-800 px-8 py-3 text-lg font-semibold">
              プロジェクトを相談する
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
