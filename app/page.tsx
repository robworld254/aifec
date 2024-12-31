"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Users, Building, Award, ArrowRight, MapPin, Clock } from 'lucide-react'
import Link from "next/link"
import { Countdown } from "@/components/countdown"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[80vh] flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="/home.jpg?height=1080&width=1920"
          alt="Event backdrop"
          fill
          className="object-cover"
          priority
        />
        <div className="container relative z-20 text-center text-white">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Africa Infrastructure Financing Exhibition and Conference
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
          >
            Uniting leaders to address infrastructure challenges across Africa
          </motion.p>
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              <Link href="/register">Register Now</Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Event Info Section */}
      <section className="py-12 bg-muted/40">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Event Details</h2>
            <div className="flex justify-center space-x-8">
              <div className="flex items-center">
                <Calendar className="w-6 h-6 mr-2 text-red-600" />
                <span className="text-foreground">December 3-4, 2025</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-6 h-6 mr-2 text-red-600" />
                <span className="text-foreground">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 mr-2 text-red-600" />
                <span className="text-foreground">Nairobi, Kenya</span>
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <Countdown />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <Card className="bg-red-600 border-none">
              <CardContent className="p-6 text-center text-white">
                <Calendar className="w-12 h-12 mx-auto mb-4 text-white" />
                <h3 className="text-4xl font-bold mb-2">2024</h3>
                <p className="text-sm">December 3-4</p>
              </CardContent>
            </Card>
            <Card className="bg-red-600 border-none">
              <CardContent className="p-6 text-center text-white">
                <Users className="w-12 h-12 mx-auto mb-4 text-white" />
                <h3 className="text-4xl font-bold mb-2">700+</h3>
                <p className="text-sm">Delegates</p>
              </CardContent>
            </Card>
            <Card className="bg-red-600 border-none">
              <CardContent className="p-6 text-center text-white">
                <Building className="w-12 h-12 mx-auto mb-4 text-white" />
                <h3 className="text-4xl font-bold mb-2">100+</h3>
                <p className="text-sm">Exhibitors</p>
              </CardContent>
            </Card>
            <Card className="bg-red-600 border-none">
              <CardContent className="p-6 text-center text-white">
                <Award className="w-12 h-12 mx-auto mb-4 text-white" />
                <h3 className="text-4xl font-bold mb-2">13th</h3>
                <p className="text-sm">Edition</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground"
          >
            About AIFEC Africa
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          >
            <div>
              <p className="text-lg mb-4 text-muted-foreground">
                The Africa Infrastructure Financing Exhibition and Conference is the leading European partnering event for early-stage deals and investment rounds in the Life Sciences field.
              </p>
              <p className="text-lg mb-4 text-muted-foreground">
                Our program features keynotes, case studies, panels, workshops, and networking opportunities designed to deepen understanding of PPPs and their role in delivering essential public infrastructure.
              </p>
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Conference hall"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Figures Section */}
      <section className="py-20 bg-muted/40">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground"
          >
            2024 Key Figures
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <Card className="bg-card">
              <CardContent className="p-6 text-center">
                <h3 className="text-4xl font-bold mb-2 text-foreground">1,150</h3>
                <p className="text-sm text-muted-foreground">Delegates</p>
              </CardContent>
            </Card>
            <Card className="bg-card">
              <CardContent className="p-6 text-center">
                <h3 className="text-4xl font-bold mb-2 text-foreground">35</h3>
                <p className="text-sm text-muted-foreground">Countries Represented</p>
              </CardContent>
            </Card>
            <Card className="bg-card">
              <CardContent className="p-6 text-center">
                <h3 className="text-4xl font-bold mb-2 text-foreground">3,500+</h3>
                <p className="text-sm text-muted-foreground">One-on-One Meetings</p>
              </CardContent>
            </Card>
            <Card className="bg-card">
              <CardContent className="p-6 text-center">
                <h3 className="text-4xl font-bold mb-2 text-foreground">125</h3>
                <p className="text-sm text-muted-foreground">Exhibitors</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container text-center">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Join Us at AIFEC Africa 2024
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Dont miss this opportunity to be part of Africas leading infrastructure financing event
          </motion.p>
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-red-600 hover:bg-red-50 hover:text-red-700 border-white"
            >
              <Link href="/register" className="flex items-center">
                Register Now <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

