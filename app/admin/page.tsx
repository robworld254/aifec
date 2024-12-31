"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PostManagement } from "@/components/post-management"

// Mock initial data
const initialBlogPosts = [
  { id: 1, title: "First Blog Post", content: "This is the content of the first blog post.", image: "/placeholder.svg?height=400&width=600" },
  { id: 2, title: "Second Blog Post", content: "This is the content of the second blog post.", image: "/placeholder.svg?height=400&width=600" },
]

const initialNewsPosts = [
  { id: 1, title: "Breaking News", content: "This is an important news update.", image: "/placeholder.svg?height=400&width=600" },
  { id: 2, title: "Event Announcement", content: "A new event has been announced.", image: "/placeholder.svg?height=400&width=600" },
]

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [blogPosts, setBlogPosts] = useState(initialBlogPosts)
  const [newsPosts, setNewsPosts] = useState(initialNewsPosts)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would validate credentials against a backend
    if (username === "admin" && password === "password") {
      setIsLoggedIn(true)
    } else {
      alert("Invalid credentials")
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUsername("")
    setPassword("")
  }

  const handleSaveBlogPosts = (posts: typeof blogPosts) => {
    setBlogPosts(posts)
    // In a real application, you would save this to a backend
    console.log("Saving blog posts:", posts)
  }

  const handleSaveNewsPosts = (posts: typeof newsPosts) => {
    setNewsPosts(posts)
    // In a real application, you would save this to a backend
    console.log("Saving news posts:", posts)
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Admin Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full">Login</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
      <Tabs defaultValue="blog">
        <TabsList>
          <TabsTrigger value="blog">Blog Posts</TabsTrigger>
          <TabsTrigger value="news">News Posts</TabsTrigger>
        </TabsList>
        <TabsContent value="blog">
          <Card>
            <CardHeader>
              <CardTitle>Manage Blog Posts</CardTitle>
            </CardHeader>
            <CardContent>
              <PostManagement initialPosts={blogPosts} onSave={handleSaveBlogPosts} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="news">
          <Card>
            <CardHeader>
              <CardTitle>Manage News Posts</CardTitle>
            </CardHeader>
            <CardContent>
              <PostManagement initialPosts={newsPosts} onSave={handleSaveNewsPosts} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

