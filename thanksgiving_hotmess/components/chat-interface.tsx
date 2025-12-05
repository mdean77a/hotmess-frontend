"use client"

import { useState, useRef, useEffect } from "react"
import { ArrowUpIcon, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface ChatInterfaceProps {
  formData: {
    familyCount: string
    opinionatedAunts: string
    politicalUncles: string
    pieCrisis: string
  }
}

interface Message {
  role: "user" | "assistant"
  content: string
}

export default function ChatInterface({ formData }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Initial greeting based on form data
  useEffect(() => {
    const initialGreeting = `🦃 *Turkey flaps wings frantically* 

OH HONEY, I SEE YOUR SITUATION! ${formData.familyCount} relatives, ${formData.opinionatedAunts} opinionated aunts, ${formData.politicalUncles} political uncles, and you're at "${formData.pieCrisis}" level pie anxiety?!

Listen up, because THIS turkey has seen some STUFF. I've been in ovens, I've been chased by relatives with carving knives, I've witnessed decades of family drama. If anyone can coach you through this Thanksgiving hot mess, it's ME!

What's your biggest worry right now? Spill the cranberry sauce! 🍂`

    setMessages([{ role: "assistant", content: initialGreeting }])
  }, [formData])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput("")
    setMessages((prev) => [...prev, { role: "user", content: userMessage }])
    setIsLoading(true)

    try {
      // Construct context-aware message for the coach
      const contextMessage = `I'm the HotMessCoach - a stressed, sarcastic, but ultimately supportive turkey helping someone through Thanksgiving. Their situation: ${formData.familyCount} family members, ${formData.opinionatedAunts} opinionated aunts, ${formData.politicalUncles} political uncles, and ${formData.pieCrisis} pie anxiety. They just said: "${userMessage}". Give them funny, supportive, practical advice with personality. Use emojis. Keep it under 150 words.`

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: contextMessage }),
      })

      if (!response.ok) throw new Error("Failed to get response")

      const data = await response.json()
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }])
    } catch (error) {
      console.error("[v0] Error calling chat API:", error)
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "🦃 *Turkey has technical difficulties* \n\nOof! My feathers got in a tangle with the API. Try again in a moment, or just remember: deep breaths, wine exists, and you can always hide in the bathroom! 😅",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-turkey-light via-cranberry-light to-stuffing-light p-4">
      <div className="max-w-4xl mx-auto h-[calc(100vh-2rem)] flex flex-col">
        {/* Header */}
        <div className="text-center py-4 mb-4">
          <h1 className="font-sans text-2xl md:text-4xl font-bold text-turkey-dark">🦃 Your HotMessCoach Session</h1>
          <p className="text-sm text-gravy-dark mt-1">This turkey is ready to help you survive!</p>
        </div>

        {/* Chat Container */}
        <Card className="flex-1 overflow-hidden flex flex-col bg-white/95 backdrop-blur shadow-xl border-2 border-turkey">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] md:max-w-[75%] rounded-2xl px-4 py-3 ${
                    message.role === "user"
                      ? "bg-cranberry text-white"
                      : "bg-stuffing text-gravy-dark border-2 border-turkey"
                  }`}
                >
                  <p className="text-sm md:text-base whitespace-pre-wrap leading-relaxed">{message.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[75%] rounded-2xl px-4 py-3 bg-stuffing border-2 border-turkey">
                  <div className="flex items-center gap-2 text-gravy-dark">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span className="text-sm">Turkey is typing...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t-2 border-turkey p-4 bg-white/80">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Tell the turkey your troubles..."
                disabled={isLoading}
                className="flex-1 px-4 py-3 border-2 border-turkey rounded-xl focus:outline-none focus:ring-2 focus:ring-cranberry disabled:opacity-50 text-gravy-dark placeholder:text-gravy"
              />
              <Button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                size="icon"
                variant="outline"
                className="bg-cranberry hover:bg-cranberry-dark text-white border-cranberry-dark h-12 w-12 disabled:opacity-50"
                aria-label="Send message"
              >
                <ArrowUpIcon className="h-5 w-5" />
              </Button>
            </div>
            <p className="text-xs text-gravy text-center mt-2">Press Enter to send • You got this! 💪</p>
          </div>
        </Card>
      </div>
    </main>
  )
}
