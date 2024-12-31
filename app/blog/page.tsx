"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Heart, MessageCircle, Share2, Bookmark } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    author: {
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=100&width=100",
      role: "Infrastructure Finance Expert"
    },
    date: "2024-01-15",
    title: "The Future of Infrastructure Finance in Africa",
    content: "As we look towards the future of infrastructure development in Africa...",
    image: "/placeholder.svg?height=600&width=800",
    likes: 234,
    comments: 45,
    shares: 12
  },
  // Add more blog posts as needed
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 text-foreground">AIFEC Blog</h1>
          <p className="text-xl text-muted-foreground">Insights and Perspectives on African Infrastructure</p>
        </motion.div>

        <div className="space-y-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-none shadow-xl bg-card">
                <CardHeader className="p-6">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12 border border-border">
                      <AvatarImage src={post.author.avatar} alt={post.author.name} />
                      <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-foreground">{post.author.name}</h3>
                      <p className="text-sm text-muted-foreground">{post.author.role}</p>
                    </div>
                  </div>
                </CardHeader>
                <div className="relative h-[400px]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">{post.title}</h2>
                  <p className="text-muted-foreground mb-6">{post.content}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <Button variant="ghost" className="flex items-center space-x-2">
                        <Heart className="w-5 h-5" />
                        <span>{post.likes}</span>
                      </Button>
                      <Button variant="ghost" className="flex items-center space-x-2">
                        <MessageCircle className="w-5 h-5" />
                        <span>{post.comments}</span>
                      </Button>
                      <Button variant="ghost" className="flex items-center space-x-2">
                        <Share2 className="w-5 h-5" />
                        <span>{post.shares}</span>
                      </Button>
                    </div>
                    <Button variant="ghost">
                      <Bookmark className="w-5 h-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button className="bg-red-600 hover:bg-red-700">
            Load More Posts
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

