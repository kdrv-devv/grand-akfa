"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Send } from "lucide-react"
import Link from 'next/link'

export default function ContactSection() {
  return (
    <section id="contact" className="bg-muted py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Biz bilan bog'laning</h2>

        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-semibold text-foreground">Telefon</h3>
                      <p className="text-muted-foreground">+998 (97) 415-77-08 </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Send className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-semibold text-foreground">Telegram</h3>
                      <a
                        href="https://t.me/grandakfa_official"
                        className="text-primary hover:text-primary/80 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                         <Link href="https://t.me/Akbarj0on" target="_blank" rel="noopener noreferrer">
                        @Akbarj0on
                      </Link>
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-semibold text-foreground">Manzil</h3>
                      <p className="text-muted-foreground">
                        Qo'qon shahar
                        <br />
                        Farg'ona O'zbekiston
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Telegram Contact */}
            <Card>
              <CardHeader>
                <CardTitle>Telegram orqali bog'laning</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-4">
                  <p className="text-muted-foreground">Tezkor javob olish uchun Telegram kanalimizga qo'shiling</p>
                  <Button asChild className="w-full">
                    <a
                      href="https://t.me/grandakfa_official"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2"
                    >
                      <Send className="h-4 w-4" />
                      <Link href="https://t.me/grandakfauz" target="_blank" rel="noopener noreferrer">
                        <span>Telegram kanalga qo'shilish</span>
                      </Link>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
