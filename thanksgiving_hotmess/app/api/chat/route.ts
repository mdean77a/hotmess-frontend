import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

export async function POST(request: Request) {
  try {
    const { message } = await request.json()

    console.log("[v0] Received message:", message)

    const { text } = await generateText({
      model: openai("gpt-4o-mini"),
      prompt: message,
      temperature: 0.9,
    })

    console.log("[v0] Generated reply:", text)

    return Response.json({ reply: text })
  } catch (error) {
    console.error("[v0] Chat API error:", error)
    return Response.json(
      { error: "Failed to process chat request", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 },
    )
  }
}
