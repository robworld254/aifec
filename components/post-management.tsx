"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Post {
  id: number
  title: string
  content: string
  image: string
}

interface PostManagementProps {
  initialPosts: Post[]
  onSave: (posts: Post[]) => void
}

export function PostManagement({ initialPosts, onSave }: PostManagementProps) {
  const [posts, setPosts] = useState<Post[]>(initialPosts)
  const [editingPost, setEditingPost] = useState<Post | null>(null)

  const handleAddPost = () => {
    const newPost: Post = {
      id: Date.now(),
      title: "",
      content: "",
      image: "/placeholder.svg?height=400&width=600",
    }
    setPosts([...posts, newPost])
    setEditingPost(newPost)
  }

  const handleEditPost = (post: Post) => {
    setEditingPost(post)
  }

  const handleDeletePost = (id: number) => {
    setPosts(posts.filter((post) => post.id !== id))
    if (editingPost?.id === id) {
      setEditingPost(null)
    }
  }

  const handleSavePost = (updatedPost: Post) => {
    setPosts(posts.map((post) => (post.id === updatedPost.id ? updatedPost : post)))
    setEditingPost(null)
    onSave(posts)
  }

  return (
    <div className="space-y-8">
      <Button onClick={handleAddPost}>Add New Post</Button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          {posts.map((post) => (
            <Card key={post.id}>
              <CardHeader>
                <CardTitle>{post.title || "Untitled"}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="truncate">{post.content}</p>
                <div className="mt-4 space-x-2">
                  <Button onClick={() => handleEditPost(post)}>Edit</Button>
                  <Button variant="destructive" onClick={() => handleDeletePost(post.id)}>Delete</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {editingPost && (
          <Card>
            <CardHeader>
              <CardTitle>{editingPost.id ? "Edit Post" : "New Post"}</CardTitle>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleSavePost(editingPost)
                }}
                className="space-y-4"
              >
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={editingPost.title}
                    onChange={(e) => setEditingPost({ ...editingPost, title: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="content">Content</Label>
                  <Textarea
                    id="content"
                    value={editingPost.content}
                    onChange={(e) => setEditingPost({ ...editingPost, content: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="image">Image URL</Label>
                  <Input
                    id="image"
                    value={editingPost.image}
                    onChange={(e) => setEditingPost({ ...editingPost, image: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit">Save Post</Button>
              </form>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

