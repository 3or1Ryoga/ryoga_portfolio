"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, ArrowLeft, CheckCircle, MessageCircle } from "lucide-react"

const questions = [
  {
    id: "siteType",
    question: "ご希望のサイトの種類は？",
    type: "select",
    options: ["コーポレートサイト", "ポートフォリオサイト", "ランディングページ", "ブログサイト", "その他"],
  },
  {
    id: "budget",
    question: "ご予算の目安を教えてください",
    type: "select",
    options: ["10万円未満", "10万円〜30万円", "30万円〜50万円", "50万円〜100万円", "100万円以上", "相談したい"],
  },
  {
    id: "timeline",
    question: "希望納期はいつ頃ですか？",
    type: "select",
    options: ["1ヶ月以内", "2〜3ヶ月", "3〜6ヶ月", "6ヶ月以上", "特に決まっていない"],
  },
  {
    id: "features",
    question: "特に必要な機能があれば教えてください",
    type: "select",
    options: ["お問い合わせフォーム", "ブログ機能", "予約システム", "チャットボット" , "その他", "特に決まっていない"],
  },
  {
    id: "contact",
    question: "お名前とご連絡先を教えてください",
    type: "contact",
    fields: ["name", "email", "phone"],
  },
]

// https://forms.gle/zu7tVgXrcGp11twP6

export default function ContactPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, any>>({})
  const [isCompleted, setIsCompleted] = useState(false)

  const handleAnswer = (questionId: string, answer: any) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }))
  }

  const nextStep = async () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {

      try {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ answers }), // ここでanswersオブジェクトを送信しています
        });

        if (response.ok) {
          console.log("データの保存に成功しました。");
          setIsCompleted(true);
        } else {
          const errorData = await response.json();
          console.error("サーバーエラー:", errorData.message);
          alert("データの保存に失敗しました。");
        }
      } catch (error) {
        console.error("クライアントサイドエラー:", error);
        alert("エラーが発生しました。");
      }
    
      // --- Start of New Code ---

      // // 1. Create a unique name for a temporary iframe
      // const iframeName = "hidden_iframe_for_google_form";

      // // 2. Create the hidden iframe and add it to the page
      // const iframe = document.createElement("iframe");
      // iframe.name = iframeName;
      // iframe.style.display = "none";
      // document.body.appendChild(iframe);

      // // 3. Create a form element in memory
      // const form = document.createElement("form");
      // form.method = "POST";
      // form.action = "https://docs.google.com/forms/d/e/1FAIpQLSdc2H5CVpI0d_jF09TmkNv3XyEOr3aK0pZ-cT3b2A1f6j9G7w/formResponse";
      // form.target = iframeName; // Target the form submission to the hidden iframe

      // // 4. Create hidden input fields for each piece of data
      // const formData: { [key: string]: string } = {
      //   "entry.1805051935": answers.siteType || "",
      //   "entry.183416045": answers.budget || "",
      //   "entry.1982548280": answers.timeline || "",
      //   "entry.1121081308": answers.reference || "",
      //   "entry.1481105820": answers.features || "",
      //   "entry.1857563503": `名前: ${answers.contact?.name || ""}\nメール: ${answers.contact?.email || ""}\n電話: ${answers.contact?.phone || '未入力'}`,
      // };

      // for (const key in formData) {
      //   const input = document.createElement("input");
      //   input.type = "hidden";
      //   input.name = key;
      //   input.value = formData[key];
      //   form.appendChild(input);
      // }

      // // 5. Add the form to the page and submit it
      // document.body.appendChild(form);
      // form.submit();

      // // 6. Clean up the iframe and form after a short delay
      // setTimeout(() => {
      //   document.body.removeChild(form);
      //   document.body.removeChild(iframe);
      // }, 100);

      // // 7. Assume submission was successful and move to the completion screen
      // console.log("Form data submitted via iframe.");
      // setIsCompleted(true);

      // // --- End of New Code ---
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const currentQuestion = questions[currentStep]
  const progress = ((currentStep + 1) / questions.length) * 100

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-green-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="h-10 w-10 text-white" />
          </div>

          <h1 className="text-4xl font-bold mb-6">ご入力ありがとうございました！</h1>

          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            詳細なお見積り結果をご連絡いたします。
            <br />
            より詳しいご相談は、LINEでお気軽にお話しください。
          </p>

          <div className="space-y-4">
            <Button
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg font-semibold w-full sm:w-auto"
              onClick={() => window.open("https://line.me/ti/p/3or1r", "_blank")}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              LINEで結果を受け取る
            </Button>

            <div className="text-sm text-gray-400">
              <p>または、メールでのご連絡をお待ちください。</p>
              <p>通常24時間以内にご返信いたします。</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-[#E7D0A9]">Contact</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">お問い合わせ & お見積り</p>
        </div>
      </section>

      {/* Progress Bar */}
      <div className="max-w-2xl mx-auto px-6 mb-8">
        <div className="bg-gray-800 h-2 rounded-full overflow-hidden">
          <div className="bg-[#E7D0A9] h-full transition-all duration-300 ease-out" style={{ width: `${progress}%` }} />
        </div>
        <div className="flex justify-between mt-2 text-sm text-gray-400">
          <span>
            質問 {currentStep + 1} / {questions.length}
          </span>
          <span>{Math.round(progress)}% 完了</span>
        </div>
      </div>

      {/* Question Form */}
      <section className="pb-20 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-800 p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-6 text-[#E7D0A9]">{currentQuestion.question}</h2>

            {currentQuestion.type === "select" && (
              <div className="space-y-3">
                {currentQuestion.options?.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(currentQuestion.id, option)}
                    className={`w-full p-4 text-left rounded-lg border transition-all ${
                      answers[currentQuestion.id] === option
                        ? "border-[#E7D0A9] bg-[#E7D0A9]/10 text-[#E7D0A9]"
                        : "border-gray-600 hover:border-gray-500 text-gray-300"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}

            {/* {currentQuestion.type === "text" && (
              <Input
                placeholder={currentQuestion.placeholder}
                value={answers[currentQuestion.id] || ""}
                onChange={(e) => handleAnswer(currentQuestion.id, e.target.value)}
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              />
            )}

            {currentQuestion.type === "textarea" && (
              <Textarea
                placeholder={currentQuestion.placeholder}
                value={answers[currentQuestion.id] || ""}
                onChange={(e) => handleAnswer(currentQuestion.id, e.target.value)}
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 min-h-[120px]"
              />
            )} */}

            {currentQuestion.type === "contact" && (
              <div className="space-y-4">
                <Input
                  placeholder="お名前"
                  value={answers[currentQuestion.id]?.name || ""}
                  onChange={(e) =>
                    handleAnswer(currentQuestion.id, {
                      ...answers[currentQuestion.id],
                      name: e.target.value,
                    })
                  }
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                />
                <Input
                  type="email"
                  placeholder="メールアドレス"
                  value={answers[currentQuestion.id]?.email || ""}
                  onChange={(e) =>
                    handleAnswer(currentQuestion.id, {
                      ...answers[currentQuestion.id],
                      email: e.target.value,
                    })
                  }
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                />
                <Input
                  placeholder="電話番号（任意）"
                  value={answers[currentQuestion.id]?.phone || ""}
                  onChange={(e) =>
                    handleAnswer(currentQuestion.id, {
                      ...answers[currentQuestion.id],
                      phone: e.target.value,
                    })
                  }
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                />
              </div>
            )}

            <div className="flex justify-between mt-8">
              <Button
                onClick={prevStep}
                disabled={currentStep === 0}
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                戻る
              </Button>

              <Button
                onClick={nextStep}
                disabled={
                  !answers[currentQuestion.id] ||
                  (currentQuestion.type === "contact" &&
                    (!answers[currentQuestion.id]?.name || !answers[currentQuestion.id]?.email))
                }
                className="bg-[#E7D0A9] text-black hover:bg-[#D7B26B]"
              >
                {currentStep === questions.length - 1 ? "送信" : "次へ"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="py-12 px-6 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">その他のお問い合わせ方法</h3>
          <p className="text-gray-300 mb-6">フォームでのお問い合わせが難しい場合は、直接ご連絡ください。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="ryoga3or1@gmail.com" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="border-[#E7D0A9] text-[#E7D0A9] hover:bg-[#E7D0A9] hover:text-black bg-transparent"
            >
              メールで問い合わせ
            </Button>
            </a>

            <a href="https://line.me/ti/p/3or1r" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="border-[#E7D0A9] text-[#E7D0A9] hover:bg-[#E7D0A9] hover:text-black bg-transparent"
            >
              LINEで問い合わせ
            </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
