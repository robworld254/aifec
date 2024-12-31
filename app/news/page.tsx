"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar } from 'lucide-react'

const newsArticles = [
  {
    id: 1,
    title: "AIFEC Africa Announces Record-Breaking Attendance for 2024",
    date: "2024-01-15",
    category: "Event News",
    image: "/placeholder.svg?height=400&width=600",
    excerpt: "The upcoming AIFEC Africa 2024 conference is set to welcome over 1,000 delegates...",
    content: "The upcoming AIFEC Africa 2024 conference is set to welcome over 1,000 delegates from 35 countries, marking a significant milestone in the event's history..."
  },
  {
    id: 2,
    title: "New Partnership Announcements",
    date: "2024-01-10",
    category: "Partnerships",
    image: "/placeholder.svg?height=400&width=600",
    excerpt: "AIFEC Africa forms strategic partnerships with leading African financial institutions...",
    content: "AIFEC Africa has established new strategic partnerships with several leading African financial institutions..."
  },
]

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-serif font-bold mb-6 text-foreground">AIFEC Times</h1>
          <div className="border-b-2 border-primary w-40 mx-auto mb-4"></div>
          <p className="text-xl text-muted-foreground">Your Source for Infrastructure Finance News</p>
        </motion.div>

        <div className="grid grid-cols-12 gap-8">
          {/* Featured Article */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-12 md:col-span-8"
          >
            <Card className="overflow-hidden border-none shadow-xl bg-card">
              <div className="relative h-[400px]">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Featured news"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-red-600 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <time>January 15, 2024</time>
                </div>
                <h2 className="text-4xl font-serif font-bold mb-4 text-foreground">
                  AIFEC Africa 2024: Setting New Standards in Infrastructure Finance
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  The upcoming conference promises groundbreaking discussions on infrastructure development and innovative financing solutions...
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Sidebar News */}
          <div className="col-span-12 md:col-span-4 space-y-8">
            {newsArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              >
                <Card className="overflow-hidden border-none shadow-lg bg-card">
                  <div className="relative h-[200px]">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center text-red-600 mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      <time>{article.date}</time>
                    </div>
                    <h3 className="text-xl font-serif font-bold mb-2 text-foreground">{article.title}</h3>
                    <p className="text-muted-foreground">{article.excerpt}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Latest News Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-serif font-bold mb-8 text-center text-foreground">Latest Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Array(6).fill(null).map((_, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg bg-card">
                <div className="relative h-[200px]">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="News thumbnail"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center text-red-600 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <time>January {index + 1}, 2024</time>
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-2 text-foreground">
                    Infrastructure Development News {index + 1}
                  </h3>
                  <p className="text-muted-foreground">
                    Latest updates on infrastructure development and financing across Africa...
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

