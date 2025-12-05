"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import ChatInterface from "@/components/chat-interface"

export default function Home() {
  const [showChat, setShowChat] = useState(false)
  const [formData, setFormData] = useState({
    familyCount: "",
    opinionatedAunts: "",
    politicalUncles: "",
    pieCrisis: "",
  })

  const handleStartChat = () => {
    if (formData.familyCount && formData.opinionatedAunts && formData.politicalUncles && formData.pieCrisis) {
      setShowChat(true)
    }
  }

  const isFormComplete =
    formData.familyCount && formData.opinionatedAunts && formData.politicalUncles && formData.pieCrisis

  if (showChat) {
    return <ChatInterface formData={formData} />
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-turkey-light via-cranberry-light to-stuffing-light p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="font-sans text-4xl md:text-6xl font-bold text-turkey-dark mb-3 text-balance">
            🦃 HotMessCoach at Thanksgiving
          </h1>
          <p className="text-lg md:text-xl text-gravy-dark font-medium">
            Because every family gathering needs a survival strategy
          </p>
        </div>

        {/* Turkey Hero Image */}
        <div className="mb-8 md:mb-12 flex justify-center">
          <div className="relative">
            <img
              src="/large-angry-upset-turkey-with-crossed-arms-looking.jpg"
              alt="Stressed out turkey"
              className="rounded-2xl shadow-2xl border-4 border-turkey-dark"
            />
            <div className="absolute -top-4 -right-4 bg-cranberry text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg rotate-12">
              I'm STRESSED! 😤
            </div>
          </div>
        </div>

        {/* Questionnaire Card */}
        <Card className="p-6 md:p-8 bg-white/95 backdrop-blur shadow-xl border-2 border-turkey">
          <h2 className="text-2xl md:text-3xl font-bold text-turkey-dark mb-6 text-center">
            Let's Assess Your Thanksgiving Chaos Level
          </h2>

          <div className="space-y-6">
            {/* Question 1 */}
            <div className="space-y-2">
              <Label htmlFor="familyCount" className="text-base font-semibold text-gravy-dark">
                How many relatives are invading your home? 🏠
              </Label>
              <Select
                value={formData.familyCount}
                onValueChange={(value) => setFormData({ ...formData, familyCount: value })}
              >
                <SelectTrigger id="familyCount" className="border-turkey">
                  <SelectValue placeholder="Select your doom level..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-5">0-5 (Still manageable)</SelectItem>
                  <SelectItem value="6-10">6-10 (Getting spicy)</SelectItem>
                  <SelectItem value="11-15">11-15 (Prayer needed)</SelectItem>
                  <SelectItem value="16-20">16-20 (Call the National Guard)</SelectItem>
                  <SelectItem value="20+">20+ (May the force be with you)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Question 2 */}
            <div className="space-y-2">
              <Label htmlFor="opinionatedAunts" className="text-base font-semibold text-gravy-dark">
                How many opinionated aunts will judge your life choices? 👵
              </Label>
              <Select
                value={formData.opinionatedAunts}
                onValueChange={(value) => setFormData({ ...formData, opinionatedAunts: value })}
              >
                <SelectTrigger id="opinionatedAunts" className="border-turkey">
                  <SelectValue placeholder="Choose wisely..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0 (Lucky you!)</SelectItem>
                  <SelectItem value="1">1 (Survivable)</SelectItem>
                  <SelectItem value="2-3">2-3 (Time to deflect)</SelectItem>
                  <SelectItem value="4+">4+ (Consider witness protection)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Question 3 */}
            <div className="space-y-2">
              <Label htmlFor="politicalUncles" className="text-base font-semibold text-gravy-dark">
                Political uncles who "just want to talk"? 🗣️
              </Label>
              <Select
                value={formData.politicalUncles}
                onValueChange={(value) => setFormData({ ...formData, politicalUncles: value })}
              >
                <SelectTrigger id="politicalUncles" className="border-turkey">
                  <SelectValue placeholder="How many debates await?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0 (Miracle!)</SelectItem>
                  <SelectItem value="1">1 (Manageable with wine)</SelectItem>
                  <SelectItem value="2">2 (They'll debate each other)</SelectItem>
                  <SelectItem value="3+">3+ (Start preparing counter-arguments)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Question 4 */}
            <div className="space-y-2">
              <Label htmlFor="pieCrisis" className="text-base font-semibold text-gravy-dark">
                Pie-to-person ratio anxiety level? 🥧
              </Label>
              <Select
                value={formData.pieCrisis}
                onValueChange={(value) => setFormData({ ...formData, pieCrisis: value })}
              >
                <SelectTrigger id="pieCrisis" className="border-turkey">
                  <SelectValue placeholder="How stressed about dessert?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="chill">Chill (Bought from Costco)</SelectItem>
                  <SelectItem value="concerned">Concerned (Making 2-3 pies)</SelectItem>
                  <SelectItem value="panicked">Panicked (5+ homemade pies)</SelectItem>
                  <SelectItem value="crisis">CRISIS MODE (Pinterest-perfect everything)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8 flex justify-center">
            <Button
              onClick={handleStartChat}
              disabled={!isFormComplete}
              size="lg"
              variant="outline"
              className="bg-cranberry hover:bg-cranberry-dark text-white border-cranberry-dark font-bold text-lg px-8 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              I Need Help NOW! 🆘
            </Button>
          </div>

          {!isFormComplete && (
            <p className="text-center text-sm text-gravy mt-4">Please answer all questions to summon your coach</p>
          )}
        </Card>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gravy-dark">
          <p className="font-medium">
            Remember: You can't choose your family, but you CAN choose your coping strategies 💪
          </p>
        </div>
      </div>
    </main>
  )
}
