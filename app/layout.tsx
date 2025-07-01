import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Web Designer & Developer - Portfolio",
  description:
    "プロフェッショナルなWeb制作サービスを提供。デザインからコーディングまで、お客様に寄り添うWeb制作を心がけています。",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className="font-sans antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
