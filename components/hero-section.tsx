import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section id="home" className="bg-background py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            <span className="text-primary">GrandAkfa</span>ga xush kelibsiz
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            Ajoyib mahsulotlar va xizmatlarni taqdim etishda ishonchli hamkoringiz. Biz innovatsiyani ishonchlilik bilan
            birlashtirib, sizning kutganlaringizdan ham oshib ketamiz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-3">
              Mahsulotlarni ko'rish
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent">
              Batafsil ma'lumot
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
