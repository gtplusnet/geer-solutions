import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';

const anniversaryImages = {
  main: 'https://geersolutions.com/wp-content/uploads/2021/03/anniv-big-1.png',
  small: [
    'https://geersolutions.com/wp-content/uploads/2021/03/anniv-s-1.png',
    'https://geersolutions.com/wp-content/uploads/2021/03/anniv-s-2.png',
  ],
};

const galleryImages = [
  'https://geersolutions.com/wp-content/uploads/2021/03/event-4.png',
  'https://geersolutions.com/wp-content/uploads/2021/03/event-5.png',
  'https://geersolutions.com/wp-content/uploads/2021/03/event-3.png',
  'https://geersolutions.com/wp-content/uploads/2021/03/event-2.png',
];

export default function EventsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  function nextSlide() {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  }

  function prevSlide() {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-darker overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Behind the Curtains</h1>
            <p className="text-text-white/70 text-lg max-w-2xl">
              We hire brilliant web and app developers to deliver projects on time and maintain the
              top-notch code standard.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Anniversary Featured Event */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <AnimatedSection direction="left">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">Featured Event</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-darker mb-4">
                Celebrating a Year of a Journey
              </h2>
              <p className="text-text text-lg leading-relaxed mb-6">
                Happy 1st Anniversary to GEER IT Solutions. Good Food and Good Laugh.
              </p>
              <div className="flex gap-3">
                <span className="text-sm text-text-light bg-surface px-3 py-1 rounded-full">#Bonding</span>
                <span className="text-sm text-text-light bg-surface px-3 py-1 rounded-full">#Anniversary</span>
                <span className="text-sm text-text-light bg-surface px-3 py-1 rounded-full">#GeerSolutions</span>
              </div>
            </AnimatedSection>

            {/* Images Grid */}
            <AnimatedSection direction="right">
              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2 rounded-xl overflow-hidden shadow-lg shadow-black/10">
                  <img
                    src={anniversaryImages.main}
                    alt="Geer Solutions 1st Anniversary Celebration"
                    className="w-full aspect-video object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {anniversaryImages.small.map((src, i) => (
                  <div key={i} className="rounded-xl overflow-hidden shadow-lg shadow-black/10">
                    <img
                      src={src}
                      alt={`Anniversary photo ${i + 1}`}
                      className="w-full aspect-4/3 object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Events Gallery */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <h2 className="text-3xl font-bold text-darker mb-4">Events and Celebrations</h2>
            <p className="text-text max-w-xl">
              A look at the moments that bring our team together and celebrate our milestones.
            </p>
          </AnimatedSection>

          {/* Desktop: grid */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((src, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="relative rounded-xl overflow-hidden shadow-lg shadow-black/5 group/card cursor-pointer">
                  <img
                    src={src}
                    alt={`Event photo ${i + 1}`}
                    className="w-full aspect-3/4 object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover/card:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-darker/60 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Mobile: carousel */}
          <div className="md:hidden relative">
            <div className="rounded-xl overflow-hidden shadow-xl shadow-black/10 relative">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentSlide}
                  src={galleryImages[currentSlide]}
                  alt={`Event photo ${currentSlide + 1}`}
                  className="w-full aspect-3/4 object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </AnimatePresence>

              <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-darker" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-darker" />
              </button>
            </div>

            <div className="flex justify-center gap-2 mt-4">
              {galleryImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === currentSlide ? 'bg-primary w-6' : 'bg-border'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
