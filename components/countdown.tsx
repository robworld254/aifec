"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const targetDate = new Date('2025-07-02T09:00:00').getTime()

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <Card className="bg-red-600 text-white border-none">
        <CardContent className="p-6 text-center">
          <span className="text-4xl font-bold">{timeLeft.days}</span>
          <p className="text-sm mt-2">Days</p>
        </CardContent>
      </Card>
      <Card className="bg-red-600 text-white border-none">
        <CardContent className="p-6 text-center">
          <span className="text-4xl font-bold">{timeLeft.hours}</span>
          <p className="text-sm mt-2">Hours</p>
        </CardContent>
      </Card>
      <Card className="bg-red-600 text-white border-none">
        <CardContent className="p-6 text-center">
          <span className="text-4xl font-bold">{timeLeft.minutes}</span>
          <p className="text-sm mt-2">Minutes</p>
        </CardContent>
      </Card>
      <Card className="bg-red-600 text-white border-none">
        <CardContent className="p-6 text-center">
          <span className="text-4xl font-bold">{timeLeft.seconds}</span>
          <p className="text-sm mt-2">Seconds</p>
        </CardContent>
      </Card>
    </div>
  )
}

