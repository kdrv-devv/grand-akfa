export default function AboutSection() {
  return (
    <section id="about" className="bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">GrandAkfa haqida</h2>
            <p className="text-lg text-muted-foreground mb-6 text-pretty">
              GrandAkfa kompaniyasida biz innovatsion yechimlar va ajoyib xizmat orqali mukammallikni taqdim etishga
              sodiqmiz. Bizning professional jamoamiz har bir loyihaga ko'p yillik tajriba va ekspertizani olib keladi.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Bizning Missiyamiz</h3>
                <p className="text-muted-foreground text-pretty">
                  Bizneslarni o'z maqsadlariga erishish va mijozlar kutganlaridan oshib ketishga yordam beradigan ilg'or
                  yechimlarni taqdim etish.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Bizning Vizyonimiz</h3>
                <p className="text-muted-foreground text-pretty">
                  Innovatsiya, sifat va mijozlar muvaffaqiyatiga sodiqlik bilan tanilgan professional xizmatlarning
                  yetakchi provayderi bo'lish.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:pl-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-muted rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Yakunlangan Loyihalar</div>
              </div>
              <div className="text-center p-6 bg-muted rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Jamoa A'zolari</div>
              </div>
              <div className="text-center p-6 bg-muted rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Yillik Tajriba</div>
              </div>
              <div className="text-center p-6 bg-muted rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">99%</div>
                <div className="text-sm text-muted-foreground">Mijoz Mamnuniyati</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
