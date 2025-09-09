"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import akfalogo from "@/public/akfalogo.png"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="bg-background shadow-xl border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            {/* <h1 className="text-2xl font-bold text-foreground">GrandAkfa</h1> */}
            <img src="/akfalogo.png" alt="" width={100} height={20} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-foreground hover:text-muted-foreground transition-colors">
              Bosh sahifa
            </a>
            <a href="#products" className="text-foreground hover:text-muted-foreground transition-colors">
              Mahsulotlar
            </a>
            <a href="#about" className="text-foreground hover:text-muted-foreground transition-colors">
              Biz haqimizda
            </a>
            <a href="#contact" className="text-foreground hover:text-muted-foreground transition-colors">
              Aloqa
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              <a
                href="#home"
                className="block px-3 py-2 text-foreground hover:text-muted-foreground transition-colors"
                onClick={toggleMenu}
              >
                Bosh sahifa
              </a>
              <a
                href="#products"
                className="block px-3 py-2 text-foreground hover:text-muted-foreground transition-colors"
                onClick={toggleMenu}
              >
                Mahsulotlar
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-foreground hover:text-muted-foreground transition-colors"
                onClick={toggleMenu}
              >
                Biz haqimizda
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-foreground hover:text-muted-foreground transition-colors"
                onClick={toggleMenu}
              >
                Aloqa
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
