// TestimonialCarousel.tsx
import React, { useRef, useState, useEffect } from "react";
import type { TestimonialCardProps } from "./TestimonialCard";
import TestimonialCard from "./TestimonialCard";

interface TestimonialCarouselProps {
  testimonials: TestimonialCardProps[];
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({
  testimonials,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(1);

  // Adjust cards per slide based on screen width
  useEffect(() => {
    const updateCardsPerSlide = () => {
      const width = window.innerWidth;
      if (width >= 1024)
        setCardsPerSlide(2); // desktop: 2 per slide
      else if (width >= 640)
        setCardsPerSlide(1); // tablet: 1 per slide
      else setCardsPerSlide(1); // mobile: 1 per slide
    };

    updateCardsPerSlide();
    window.addEventListener("resize", updateCardsPerSlide);
    return () => window.removeEventListener("resize", updateCardsPerSlide);
  }, []);

  const totalSlides = Math.ceil(testimonials.length / cardsPerSlide);

  const scrollTo = (index: number) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.offsetWidth;
    scrollRef.current.scrollTo({
      left: cardWidth * index,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.offsetWidth;
    const index = Math.round(scrollRef.current.scrollLeft / cardWidth);
    setActiveIndex(index);
  };

  const prev = () => scrollTo(Math.max(activeIndex - 1, 0));
  const next = () => scrollTo(Math.min(activeIndex + 1, totalSlides - 1));

  // Group testimonials according to cardsPerSlide
  const grouped: TestimonialCardProps[][] = [];
  for (let i = 0; i < testimonials.length; i += cardsPerSlide) {
    grouped.push(testimonials.slice(i, i + cardsPerSlide));
  }

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8">
      {/* Carousel track */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-6 pb-4 hide-scrollbar"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {grouped.map((group, groupIndex) => (
          <div
            key={groupIndex}
            className="flex gap-4 shrink-0 w-full snap-start"
          >
            {group.map((person: TestimonialCardProps) => (
              <div key={person.name} className="flex-1 min-w-0">
                <TestimonialCard
                  name={person.name}
                  role={person.role}
                  quote={person.quote}
                  avatarUrl={person.avatarUrl}
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-6">
        {/* Prev button */}
        <button
          onClick={prev}
          disabled={activeIndex === 0}
          className="w-9 h-9 rounded-full border border-blue-200 flex items-center justify-center text-blue-500 hover:bg-blue-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          ‹
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {grouped.map((_, i: number) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "w-6 h-2 bg-blue-500"
                  : "w-2 h-2 bg-blue-200 hover:bg-blue-300"
              }`}
            />
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={next}
          disabled={activeIndex === totalSlides - 1}
          className="w-9 h-9 rounded-full border border-blue-200 flex items-center justify-center text-blue-500 hover:bg-blue-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
