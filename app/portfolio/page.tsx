import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink, Calendar } from "lucide-react"

// https://hitomoshi.vercel.app/ https://nexted-three.vercel.app/ https://enkendama.vercel.app/
export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: "えんけん玉 ECサイト",
      category: "iOS App Development",
      description:
        "企業の魅力を伝えるコーポレートサイトを制作。ブランドイメージに合わせたデザインと、使いやすいナビゲーションを実現しました。",
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
        "企業の魅力を伝えるコーポレートサイトを制作。ブランドイメージに合わせたデザインと、使いやすいナビゲーションを実現しました。",
      image: "/hitomoshi.jpeg?height=400&width=600",
      technologies: ["HTML/CSS", "JavaScript", "Responsive Design"],
      year: "2024",
    },
    {
      id: 4,
      title: "教区支援会社 LP",
      category: "iOS App Development",
      description:
        "企業の魅力を伝えるコーポレートサイトを制作。ブランドイメージに合わせたデザインと、使いやすいナビゲーションを実現しました。",
      image: "/nexted.jpeg?height=400&width=600",
      technologies: ["HTML/CSS", "JavaScript", "Responsive Design"],
      year: "2024",
    },
    {
      id: 5,
      title: "TrashTrace（アプリ甲子園2024企業賞）",
      category: "iOS App Development",
      description:
        "決勝大会に出られるだけでも光栄なことですが、企業賞を取ることができ、本当に嬉しいです。「未来が見える世界を作る」為に、抽象的な社会課題を具体的なアクションにできたことを認めて頂けたのだと思います。マイナビさん本当にありがとうございます。 正直なところ、1ヶ月で作ったアプリで賞を頂くことができるとは思っていなかったです…ただ、その期間中はベッドに入ってもコードのことが頭に浮かんで、デスクに戻るぐらい没頭していました。制作した「TrashTrace」はゴミ拾いと地上絵を紐付け、ユーザーの自発的な街の清掃を目指すアプリです。 開発の動機は、自分自身、地域清掃を挫折してしまった経験があり、少しでも多くの人が地域清掃を続けられるアプリがあれば面白いと考えたからです。また、その原因が活動にキリがないことや地域の何も形に残らないことにあると考えたので、まずは、GPSアートで地域清掃を残すことによりユーザーが自身の地域清掃を見返すことができる状況を作り、それを投稿することでユーザー間で「ありがとう」を送り合える機能を作りました。今後とも、多くの創作物を作るので応援よろしくお願いします。",
      image: "https://prcdn.freetls.fastly.net/release_image/19771/296/19771-296-e7b026f698fe14da179d1c094a6be028-1170x632.jpg?width=1950&height=1350&quality=85%2C75&format=jpeg&auto=webp&fit=bounds&bg-color=fff?height=400&width=600",
      technologies: ["HTML/CSS", "JavaScript", "Responsive Design"],
      year: "2024",
    },
    {
      id: 6,
      title: "デジタルスタンプラリー",
      category: "UI/UX Design",
      description:
        "デジタルスタンプラリーは、コンピューター部の文化祭展示として作った作品です。毎年コンピューター部は、展示室の場所の悪さから来場客がまばらという課題がありました。そこで、コンピューター部の展示室に訪れてデジタルスタンプラリーを行うことで、コンピューター部のもう一つの企画である焼きトウモロコシの割引ができるというシステムを作りました。 QRコードスキャンによる認証など、それなりにしっかりしたシステムを作ったので技術力の高さを褒められたり、焼きトウモロコシも大盛況だったりと記憶に残る文化祭でした。",
      image: "https://kgh-gakuyuukai.sakura.ne.jp/ryoga/CompCouponQR.jpg?height=400&width=600",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      year: "2024",
    },
    {
      id: 7,
      title: "GakuyukaiQR",
      category: "Web Design",
      description:
        "学友会（生徒会）としてつくったこのシステムは、Google Formsに回答するとQRコードが発行され、その人がアンケートに答えたかを認証できるシステムです。　文化祭では、このシステムをアンケートに答えたお客さんがミニゲームをしてお菓子がもらえるという企画に用いて、文化祭執行委員会と協力して文化祭の来賓者の満足度のデータを集めることに貢献しました。",
      image: "https://kgh-gakuyuukai.sakura.ne.jp/ryoga/GakuyukaiQR.png?height=400&width=600",
      technologies: ["HTML/CSS", "JavaScript", "SEO"],
      year: "2023",
    },
    {
      id: 8,
      title: "NumberBomber",
      category: "Web Development",
      description:
        "NumberBomberは、２人で遊べる爆弾仕掛けあいゲーム。数字をおすことでその数字の点数を獲得できますが、相手が前のターンに爆弾を仕掛けた場所を押したら点数が０に戻ってしまうというゲームです。シンプルなゲームですが、友達に好評だったのでデプロイしました。",
      image: "https://kgh-gakuyuukai.sakura.ne.jp/ryoga/NumberBomber.png?height=400&width=600",
      technologies: ["WordPress", "PHP", "MySQL"],
      year: "2023",
    },
    {
      id: 9,
      title: "関西学院高等部学友会ホームページ",
      category: "Web Design & Development",
      description: "1976年から三十年近くにも及ぶ関西学院高等部の学友会(生徒会のようなもの)のデータがあります。これを作ろうと思ったきっかけは、先代のホームページがスマホに対応しておらず現在はあまり見られていないことから、また、先代のホームページを作ってくださっていた先生が定年であり、もしかするとこれまでの30年以上の記録が誰にも引き継がれないまま終わりを迎えてしまうかもしれなかったからです。　そのため、このホームページはスマホにも対応するようにつくりました。そして、現在、マニュアルをつくり次の世代に渡す準備をしています。意外と、作ることよりもコードを引き継ぐことが難しいことに驚きました。がんばります！",
      image: "https://kgh-gakuyuukai.sakura.ne.jp/ryoga/kghHomePage750px.png?height=400&width=600",
      technologies: ["Vue.js", "Node.js", "MongoDB"],
      year: "2023",
    },
    {
      id: 10,
      title: "四字熟語パズル",
      category: "CMS Development",
      description:
        "自分が初めて完成させた本格的なアプリです。このアプリを作ろうと思ったきっかけは、パズルゲームというジャンルのアプリは通勤時間にもできるような短期間でクリアできる物が大半であると気づいたことにあります。ここで、私は親が自宅でじっくりとパズルアプリをしていたことを思い出し、長時間、一問を楽しめるアプリにも需要があると感じ、このアプリを作ることを決めました。ターゲット層は、30-50才ぐらいを見積もって作りました。お父さんが真剣に解いていてもかっこ良いUIを設計し、パズルの内容はマス目の中から四字熟語を見つけ出し、それらを縦四列の四字熟語の列にするというシンプルなものでありながら、全て揃えきる事が難しいものにしました。さらに、お助け機能やシンプルな操作性により、誰でもプレイしやすいアプリとなりました。　このアプリを県の総合文化祭で展示する機会があり、このアプリのおかげで一人当たりの滞在時間がとても長いブースとなりました。自分がイメージしていたユーザーの遊び方を実現することができたため本当にうれしい経験でした。このアプリを今すぐにでもAppStoreに公開したいところですが、公開するためには年単位で1万円かかるということで、３個のアプリが完成した後にAppStoreに公開したいと思います。",
      image: "https://kgh-gakuyuukai.sakura.ne.jp/ryoga/yozizyukugo750px.jpg?height=400&width=600",
      technologies: ["WordPress", "Custom Theme", "SEO"],
      year: "2022",
    },
    {
      id: 11,
      title: "数理クイズ×クーポンコードシステム",
      category: "CMS Development",
      description:
        "自分がコンピューター部と兼部している数理科学部で作った作品です。このサイトは数理科学部のみんなで作った数理クイズと文化祭企画であるカフェを同時に楽しんでもらうためにはどうすればいいかを考えた末に思いついたアイデアです。文化祭当日は、このサイトに入るためのQRコードが載っているポスターを学校中に張りました。そのＱＲコードからサイトに入り、クイズに三問正解するとコーヒーが一杯無料になるクーポンコードが出てきて、それを店で照合することでコーヒーを無料で飲むことができるようにしました。このサイトには600人以上の人が訪れてお店も大盛況でした。自分のプログラミングが実際にこんなにも多くの人に利用してもらえるのは初めての経験だったので、不思議な感情でしたが確かに満足感を得ることができました。このサイトは、データベースを活用した自分の初めての作品です。サイトの中でコードを発行するシステムは次の文化祭でも活用しようと思います。",
      image: "https://kgh-gakuyuukai.sakura.ne.jp/ryoga/suuriQuize750px.jpg?height=400&width=600",
      technologies: ["WordPress", "Custom Theme", "SEO"],
      year: "2022",
    },
    {
      id: 12,
      title: "関西学院高等部デジタル意見箱",
      category: "CMS Development",
      description:
        "自分がICT委員会として作った最初の作品です。初めは生徒が持っているICTデバイスへの意見を集める為に開発をしていまたが、最終的に、学友会本部や他の委員会でもログインしてもらうことで使ってもらえる設計にしました。このサイトでは、複数の種類の情報をデータベースに入れる為、開発に少々苦労しました。これを運用できるようにしてより良い学友会運営に繋げたいです。",
      image: "https://kgh-gakuyuukai.sakura.ne.jp/ryoga/digiopi750px.png?height=400&width=600",
      technologies: ["WordPress", "Custom Theme", "SEO"],
      year: "2022",
    },
    {
      id: 13,
      title: "顔の類似度検知ソフト",
      category: "CMS Development",
      description:
        "この作品は、自分が所属しているAI活用の夏休み課題『パイソンでAIを使って何かを作ろう』を通して作った作品です。このソフトを用いて顔の類似度を数値化できます。",
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
