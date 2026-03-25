import { useEffect, useRef, useState } from "react"

export function Philosophy() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="philosophy" className="py-32 lg:py-40 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div
            className={`relative aspect-[4/5] bg-sand overflow-hidden transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <img
              src="/minimalist-japanese-interior-design-with-natural-w.jpg"
              alt="Минималистичный образ с натуральными тканями"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Overlay accent */}
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-terracotta/80" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p
              className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              О бренде
            </p>

            <h2
              className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] text-foreground mb-8 text-balance transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Одежда как
              <span className="italic"> второй</span>
              <br />
              язык
            </h2>

            <div
              className={`space-y-6 text-muted-foreground leading-relaxed transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p>
                Мы создаём вещи, которые говорят без слов. Каждый силуэт, каждая линия — это осознанный выбор в пользу женщины, которая знает себе цену и ценит тишину хорошего кроя.
              </p>
              <p>
                Lumière — это не тренды. Это <em className="text-foreground">одежда-состояние</em>: мягкая льняная рубашка в пять утра, элегантный прямой силуэт на важной встрече,
                платье, в котором хочется задержаться подольше.
              </p>
            </div>

            {/* Stats */}
            <div
              className={`grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border transition-all duration-1000 delay-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div>
                <p className="font-serif text-3xl text-foreground mb-1">100%</p>
                <p className="text-xs tracking-widest uppercase text-muted-foreground">Натуральные ткани</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-foreground mb-1">4</p>
                <p className="text-xs tracking-widest uppercase text-muted-foreground">Коллекции в год</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-foreground mb-1">Ручная</p>
                <p className="text-xs tracking-widest uppercase text-muted-foreground">Работа</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
