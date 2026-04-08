import { CheckCircle } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import Button from '../ui/Button';

const highlights = [
  'Expert team of Filipino developers',
  'Proven track record with 100+ projects',
  'Dedicated support and maintenance',
  'Affordable pricing for Philippine businesses',
];

export default function AboutPreview() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <h2 className="text-3xl md:text-4xl font-bold text-darker mb-6">
              Why Choose Geer Solutions?
            </h2>
            <p className="text-text text-lg mb-8 leading-relaxed">
              We are the Philippines' premier IT solutions company, dedicated to transforming businesses through innovative technology. Our team delivers high-quality, customized software solutions that drive real results.
            </p>
            <ul className="space-y-4 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-darker font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <Button to="/company">Learn More About Us</Button>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
                <p className="text-white/80 mb-6">
                  Let us help you build the perfect IT solution for your unique business needs.
                </p>
                <Button to="/contact" variant="outline" size="sm">
                  Get Started Today
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
