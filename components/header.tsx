"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/aifec.png" alt="AIFEC Africa Logo" width={150} height={50} />
        </Link>

        <div className="hidden md:flex md:items-center md:space-x-8">
          <nav className="flex items-center space-x-8">
            <Link href="/about" className="text-lg text-foreground/60 hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="/gallery" className="text-lg text-foreground/60 hover:text-foreground transition-colors">
              Gallery
            </Link>
            <Link href="/news" className="text-lg text-foreground/60 hover:text-foreground transition-colors">
              News
            </Link>
            <Link href="/blog" className="text-lg text-foreground/60 hover:text-foreground transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-lg text-foreground/60 hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>
          <ThemeToggle />
          <Button asChild size="lg">
            <Link href="/register">Register Now</Link>
          </Button>
        </div>

        <button
          className="block md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isOpen && (
          <div className="absolute top-20 left-0 right-0 bg-background border-b md:hidden">
            <nav className="container py-4 flex flex-col space-y-4">
              <Link href="/about" className="text-foreground/60 hover:text-foreground">
                About
              </Link>
              <Link href="/gallery" className="text-foreground/60 hover:text-foreground">
                Gallery
              </Link>
              <Link href="/news" className="text-foreground/60 hover:text-foreground">
                News
              </Link>
              <Link href="/blog" className="text-foreground/60 hover:text-foreground">
                Blog
              </Link>
              <Link href="/contact" className="text-foreground/60 hover:text-foreground">
                Contact
              </Link>
              <Button asChild className="w-full">
                <Link href="/register">Register Now</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

