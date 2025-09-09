'use client';

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

const initialProducts = [
  { id: 1, title: "AKFA PLAST 6000", image: "/akfa.jpg" },
  { id: 2, title: "AKFA PLAST & THERMO", image: "/mativiy2.jpg" },
  { id: 3, title: "AKFA PLAST 7000", image: "/turvoq.jpg" },
  { id: 4, title: "ENGELBERG THERMO 7000", image: "/thermooo.jpg" },


]

const productBatches = [
  [
    { id: 5, title: "AKFA GLASS", image: "/verandas.jpg" },
    { id: 6, title: "AKFA PLAST 6000", image: "/vuuuu.jpg" },
    { id: 7, title: "ENGELBERG", image: "/trrt.jpg" },
    { id: 8, title: "AKFA ALDOKS", image: "/alumin.jpg" },
    { id: 9, title: "AKFA PLAST 6000 TRIO", image: "/zolakfaplast.jpg" },
    { id: 10, title: "ENGELBERG THERMO", image: "/thero2.jpg" },
    { id: 11, title: "AKFA", image: "/images.jpeg" },
    { id: 12, title: "AKFA PLAST 6000", image: "/mativiy3.jpg" },
  ]
]

export default function ProductsSection() {
  const [products, setProducts] = useState(initialProducts)
  const [currentBatchIndex, setCurrentBatchIndex] = useState(0)
  const [showViewMore, setShowViewMore] = useState(true)

  const handleViewMore = () => {
    if (currentBatchIndex < productBatches.length) {
      setProducts([...products, ...productBatches[currentBatchIndex]])
      setCurrentBatchIndex(currentBatchIndex + 1)

      if (currentBatchIndex + 1 >= productBatches.length) {
        setShowViewMore(false)
      }
    }
  }

  return (
    <section id="products" className="bg-muted py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Bizning Mahsulotlarimiz</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">

          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{product.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {product.matn}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {showViewMore && (
          <div className="text-center mt-12">
            <Button onClick={handleViewMore} size="lg" className="text-lg px-8 py-3">
              Ko'proq ko'rish
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
