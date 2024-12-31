"use client"


import { motion } from "framer-motion"
import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

// Sample image data (replace with actual gallery images)
const galleryImages = [
  { src: "/placeholder.svg?height=400&width=600", alt: "Conference Hall" },
  { src: "/placeholder.svg?height=400&width=600", alt: "Keynote Speaker" },
  { src: "/placeholder.svg?height=400&width=600", alt: "Networking Event" },
  { src: "/placeholder.svg?height=400&width=600", alt: "Exhibition Area" },
  { src: "/placeholder.svg?height=400&width=600", alt: "Panel Discussion" },
  { src: "/placeholder.svg?height=400&width=600", alt: "Awards Ceremony" },
  { src: "/placeholder.svg?height=400&width=600", alt: "Gala Dinner" },
  { src: "/placeholder.svg?height=400&width=600", alt: "Workshops" },
  { src: "/placeholder.svg?height=400&width=600", alt: "Breakout Session" },
]

export default function GalleryPage() {
  //const [selectedImage, setSelectedImage] = useState<string | null>(null)

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
          className="text-5xl font-bold text-center mb-10 text-foreground"
          variants={fadeIn}
        >
          Gallery
        </motion.h1>

        <motion.p
          className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto"
          variants={fadeIn}
        >
          Explore moments from our past events and get a glimpse of what to expect at AIFEC Africa.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          variants={{
            animate: { transition: { staggerChildren: 0.1 } }
          }}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="relative overflow-hidden rounded-lg bg-card shadow-lg"
            >
              <Dialog>
                <DialogTrigger asChild>
                  <div className="cursor-pointer transition-transform duration-300 hover:scale-105">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={600}
                      height={400}
                      className="object-cover w-full h-64"
                    />
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-lg font-semibold">{image.alt}</span>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-3xl bg-background">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1200}
                    height={800}
                    className="object-contain w-full h-full"
                  />
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

