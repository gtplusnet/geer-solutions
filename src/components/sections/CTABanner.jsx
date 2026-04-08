import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import Button from '../ui/Button';

export default function CTABanner() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent" />
      <div className="absolute inset-0 bg-darker/20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Let us give life to your ideas. Get in touch today and discover how our solutions can drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/contact" size="lg" variant="outline">
              Get Started Today <ArrowRight className="w-5 h-5" />
            </Button>
            <Button to="/solutions" size="lg" variant="ghost" className="text-white hover:bg-white/10">
              View All Solutions
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
