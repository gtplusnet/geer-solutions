import { Link } from 'react-router-dom';
import { Calculator, Blocks, Palette, ShoppingCart, Package, Wallet, Monitor, MessageSquare, Network, ArrowRight } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';

const iconMap = {
  Calculator, Blocks, Palette, ShoppingCart, Package, Wallet, Monitor, MessageSquare, Network,
};

import { solutions } from '../../data/solutions';

export default function ServicesOverview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-darker mb-4">
            Our Solutions
          </h2>
          <p className="text-text text-lg max-w-2xl mx-auto">
            Comprehensive IT solutions designed to streamline your business operations and drive growth.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = iconMap[solution.icon];
            return (
              <AnimatedSection key={solution.slug} delay={index * 0.1}>
                <Link
                  to={`/solutions/${solution.slug}`}
                  className="group block bg-white rounded-2xl border border-border/50 p-6 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    {Icon && <Icon className="w-6 h-6 text-primary" />}
                  </div>
                  <h3 className="text-lg font-bold text-darker mb-2">{solution.name}</h3>
                  <p className="text-text text-sm mb-4 line-clamp-2">{solution.description}</p>
                  <span className="inline-flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
