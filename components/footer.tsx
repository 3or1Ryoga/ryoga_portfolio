import Link from "next/link"
import { Mail, MessageCircle, Github, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#E7D0A9]">RY</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Web Designer & Developer
              <br />
              クライアント様に寄り添う
              <br />
              Web制作を心がけています。
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Navigation</h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-400 hover:text-[#E7D0A9] transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Webデザイン</li>
              <li>コーディング</li>
              <li>レスポンシブ対応</li>
              <li>保守・運用</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="flex space-x-4">
              <a href="mailto:contact@example.com" className="text-gray-400 hover:text-[#E7D0A9] transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#E7D0A9] transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#E7D0A9] transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#E7D0A9] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Web Designer & Developer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
