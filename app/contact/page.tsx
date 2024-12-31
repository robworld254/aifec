"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log(formData)
    alert("Thank you for your message. We'll be in touch soon!")
  }

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="min-h-screen bg-background py-20">
      <motion.div
        className="container mx-auto px-4"
        initial="initial"
        animate="animate"
        variants={{
          animate: { transition: { staggerChildren: 0.1 } }
        }}
      >
        <motion.h1
          className="text-5xl font-bold text-center mb-10"
          variants={fadeIn}
        >
          Contact Us
        </motion.h1>

        <motion.p
          className="text-xl text-center mb-16 max-w-3xl mx-auto text-muted-foreground"
          variants={fadeIn}
        >
          We&apos;re here to help. Reach out to us using the form below or through our contact details.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div variants={fadeIn}>
            <Card className="bg-card">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-background"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeIn} className="space-y-8">
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="w-6 h-6 mr-2 text-red-600" />
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">+254 (0) 123 456 789</p>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="w-6 h-6 mr-2 text-red-600" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">info@aifec.africa</p>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="w-6 h-6 mr-2 text-red-600" />
                  Address
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">123 Conference Street, Nairobi, Kenya</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Our Location</h2>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=800&width=1200"
              alt="AIFEC Africa Location"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <div className="text-white text-center">
                <h3 className="text-2xl font-bold mb-2">AIFEC Africa Headquarters</h3>
                <p>123 Conference Street, Nairobi, Kenya</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Find Us</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.819917806043!2d36.81679511475396!3d-1.2833337359570715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d22f28f0c1%3A0x3180c2550e39a19f!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2s!4v1623234536314!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

