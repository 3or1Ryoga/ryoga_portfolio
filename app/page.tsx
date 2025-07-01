"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"

const greetings = ["Hello", "こんにちは", "Bonjour", "¡Hola!", "你好", "안녕하세요"]

export default function HomePage() {
  const [currentGreeting, setCurrentGreeting] = useState(0)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => {
        if (prev === greetings.length - 1) {
          setTimeout(() => setShowContent(true), 1000)
          return prev
        }
        return prev + 1
      })
    }, 600)

    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section with Greeting Animation */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />

        {!showContent ? (
          <div className="relative z-10 text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-[#E7D0A9] animate-pulse">
              {greetings[currentGreeting]}
            </h1>
          </div>
        ) : (
          <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center animate-fade-in">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  UX Designer
                  <span className="block text-[#E7D0A9]">& Developer</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                  クライアント様との対話を大切にし、
                  <br />
                  最後まで寄り添うWeb制作を心がけています。
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() => scrollToSection("about")}
                  className="bg-[#E7D0A9] text-black hover:bg-[#D7B26B] px-8 py-3 text-lg font-semibold"
                >
                  About Me
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => scrollToSection("services")}
                  className="border-[#E7D0A9] text-[#E7D0A9] hover:bg-[#E7D0A9] hover:text-black px-8 py-3 text-lg"
                >
                  Services
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden">
                <Image src="/placeholder.svg?height=500&width=400" alt="Profile" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </div>
          </div>
        )}

        {showContent && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-8 w-8 text-[#E7D0A9]" />
          </div>
        )}
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            About <span className="text-[#E7D0A9]">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#E7D0A9]">丁寧なヒアリングから始まる、心に響くWeb制作</h3>
              <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                <p>
                  私は、単にWebサイトを作るだけでなく、クライアント様の想いやビジョンを深く理解し、
                  それを形にすることを大切にしています。
                </p>
                <p>
                  デザインからコーディングまで一貫して手がけ、お客様が本当に求めているものを
                  丁寧なヒアリングを通じて見つけ出します。
                </p>
                <p>プロジェクトの最初から最後まで、お客様に寄り添い続けることで、 期待を超える成果物をお届けします。</p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#E7D0A9]">Skills & Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Web Design",
                  "UI/UX Design",
                  "HTML/CSS",
                  "JavaScript",
                  "React",
                  "Next.js",
                  "Responsive Design",
                  "SEO Optimization",
                ].map((skill) => (
                  <div key={skill} className="bg-gray-800 p-3 rounded-lg text-center">
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Services Preview */}
      <section id="services" className="py-20 px-6 bg-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="text-[#E7D0A9]">Services</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            デザインからコーディング、保守・運用まで、Webサイト制作に関わる全てのプロセスをサポートします。
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-900 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-[#E7D0A9] mb-4">Design</h3>
              <p className="text-gray-300">ユーザー体験を重視した、美しく機能的なデザインを制作します。</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-[#E7D0A9] mb-4">Development</h3>
              <p className="text-gray-300">最新の技術を使用し、高品質なWebサイトを構築します。</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-[#E7D0A9] mb-4">Support</h3>
              <p className="text-gray-300">公開後の保守・運用まで、長期的にサポートいたします。</p>
            </div>
          </div>

          <Link href="/services">
            <Button className="bg-[#E7D0A9] text-black hover:bg-[#D7B26B] px-8 py-3 text-lg font-semibold">
              詳しく見る
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            <span className="text-[#E7D0A9]">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* {[1, 2, 3].map((item) => (
              
            ))} */}
            <div className="group cursor-pointer">
              <div className="relative h-64 bg-gray-800 rounded-xl overflow-hidden mb-4">
                <Image
                  src={`/placeholder.svg?height=256&width=384`}
                  alt={`Portfolio1`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-[#E7D0A9] font-semibold">View Project</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2"></h3>
              <p className="text-gray-400">Web Design & Development</p>
            </div>
            <div className="group cursor-pointer">
              <div className="relative h-64 bg-gray-800 rounded-xl overflow-hidden mb-4">
                <Image
                  src={`/placeholder.svg?height=256&width=384`}
                  alt={`Portfolio1`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-[#E7D0A9] font-semibold">View Project</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2"></h3>
              <p className="text-gray-400">Web Design & Development</p>
            </div>
            <div className="group cursor-pointer">
              <div className="relative h-64 bg-gray-800 rounded-xl overflow-hidden mb-4">
                <Image
                  src={`/placeholder.svg?height=256&width=384`}
                  alt={`Portfolio1`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-[#E7D0A9] font-semibold">View Project</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2"></h3>
              <p className="text-gray-400">Web Design & Development</p>
            </div>
            
            
            
          </div>

          <Link href="/portfolio">
            <Button className="bg-[#E7D0A9] text-black hover:bg-[#D7B26B] px-8 py-3 text-lg font-semibold">
              全ての実績を見る
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#E7D0A9] to-[#D7B26B]">
        <div className="max-w-4xl mx-auto text-center text-black">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">作りたいものはありませんか？</h2>
          <p className="text-xl mb-8 opacity-80">あなたのアイデアを形にするお手伝いをさせてください。</p>
          <Link href="/contact">
            <Button className="bg-black text-[#E7D0A9] hover:bg-gray-800 px-8 py-3 text-lg font-semibold">
              お問い合わせ
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
