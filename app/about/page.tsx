"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Building, Globe, Award, Zap, Target, Briefcase, TrendingUp } from 'lucide-react'

export default function AboutPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="min-h-screen bg-background">
      <motion.section
        className="container mx-auto py-20 px-4"
        initial="initial"
        animate="animate"
        variants={{
          animate: { transition: { staggerChildren: 0.1 } }
        }}
      >
        <motion.h1
          className="text-5xl font-bold text-center mb-10 text-foreground"
          variants={fadeIn}
        >
          About AIFEC Africa
        </motion.h1>
        
        <motion.p
          className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto"
          variants={fadeIn}
        >
          AIFEC Africa is the premier platform for infrastructure financing and development across the continent, bringing together industry leaders, policymakers, and innovators.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          variants={{
            animate: { transition: { staggerChildren: 0.2 } }
          }}
        >
          {[
            { icon: Users, title: "700+ Delegates", description: "From across Africa and beyond" },
            { icon: Building, title: "100+ Exhibitors", description: "Showcasing cutting-edge solutions" },
            { icon: Globe, title: "35+ Countries", description: "Represented at our events" },
            { icon: Award, title: "13 Years", description: "Of industry-leading conferences" }
          ].map((item, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Card className="h-full transition-all duration-300 hover:shadow-lg bg-card">
                <CardHeader>
                  <item.icon className="w-12 h-12 text-red-600 mb-4" />
                  <CardTitle className="text-2xl font-semibold text-foreground">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-12 mb-20"
          variants={fadeIn}
        >
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Our Mission</h2>
            <p className="text-muted-foreground mb-6">
              At AIFEC Africa, we are committed to accelerating infrastructure development across the continent by fostering meaningful connections, facilitating knowledge exchange, and showcasing innovative financing solutions. Our events serve as a catalyst for transformative projects that drive economic growth and improve lives.
            </p>
            <Button className="bg-red-600 hover:bg-red-700 text-white">Learn More</Button>
          </div>
          <div className="md:w-1/2 relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="AIFEC Africa Mission"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.section
          className="mb-20"
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold text-center mb-10 text-foreground">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: "Innovation", description: "Embracing new ideas and technologies" },
              { icon: Target, title: "Excellence", description: "Striving for the highest standards" },
              { icon: Briefcase, title: "Integrity", description: "Operating with honesty and transparency" },
              { icon: TrendingUp, title: "Impact", description: "Driving positive change in Africa" }
            ].map((value, index) => (
              <Card key={index} className="text-center bg-card">
                <CardHeader>
                  <value.icon className="w-12 h-12 mx-auto text-red-600" />
                  <CardTitle className="text-foreground">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mb-20"
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold text-center mb-10 text-foreground">Our History</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-600"></div>
            {[
              { year: "2010", event: "AIFEC Africa founded" },
              { year: "2015", event: "Expanded to cover all of Africa" },
              { year: "2020", event: "Launched virtual events platform" },
              { year: "2024", event: "Celebrating our 13th successful year" }
            ].map((item, index) => (
              <div key={index} className={`flex ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'} items-center mb-8`}>
                <div className="w-5/12"></div>
                <div className="w-2/12 flex justify-center">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-background rounded-full"></div>
                  </div>
                </div>
                <Card className="w-5/12 bg-card">
                  <CardHeader>
                    <CardTitle className="text-foreground">{item.year}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.event}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="bg-card text-foreground py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "$10B+", description: "In infrastructure investments facilitated" },
                { title: "500+", description: "Projects successfully launched" },
                { title: "20M+", description: "Lives positively impacted" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  <h3 className="text-5xl font-bold mb-4 text-red-500">{item.title}</h3>
                  <p className="text-xl text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </motion.section>
    </div>
  )
}

