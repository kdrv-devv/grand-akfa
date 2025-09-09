export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-foreground mb-4">GrandAkfa</h3>
            <p className="text-muted-foreground mb-4 text-pretty">
              Professional yechimlar bo'yicha yetakchi provayder, mukammallik va innovatsiyalarga sodiq. Biz
              korxonalarga ilg'or texnologiyalar va ajoyib xizmat orqali maqsadlariga erishishda yordam beramiz.
            </p>
            </div>  
            
    
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Tezkor havolalar</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">
                  Bosh sahifa
                </a>
              </li>
              <li>
                <a href="#products" className="text-muted-foreground hover:text-foreground transition-colors">
                  Mahsulotlar
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                  Biz haqimizda
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Aloqa
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Aloqa ma'lumotlari</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>+998 (97) 415-77-08</p>
              <a
                href="https://t.me/grandakfauz"
                className="text-primary hover:text-primary/80 transition-colors block"
                target="_blank"
                rel="noopener noreferrer"
              >
                @grandakfauz
              </a>
              <p>
                Qo'qon shahar
                <br />
                Farg'ona, O'zbekiston
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">© 2024 GrandAkfa. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  )
}
