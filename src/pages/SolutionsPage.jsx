import { Link } from 'react-router-dom';
import { Calculator, Blocks, Palette, ShoppingCart, Package, Wallet, Monitor, MessageSquare, Network, ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';
import { solutions } from '../data/solutions';

const iconMap = {
  Calculator, Blocks, Palette, ShoppingCart, Package, Wallet, Monitor, MessageSquare, Network,
};

export default function SolutionsPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-darker overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-[120px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Solutions</h1>
            <p className="text-text-white/70 text-lg max-w-2xl">
              A type of application software that records and processes accounting transactions within functional modules such as accounts payable, accounts receivable, journal, general ledger, payroll, and trial balance. It functions as an accounting information system.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const Icon = iconMap[solution.icon];
              return (
                <AnimatedSection key={solution.slug} delay={index * 0.05}>
                  <Link
                    to={`/solutions/${solution.slug}`}
                    className="group block bg-white rounded-2xl border border-border/50 p-6 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 transition-all duration-300 h-full"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      {Icon && <Icon className="w-6 h-6 text-primary" />}
                    </div>
                    <h3 className="text-lg font-bold text-darker mb-2">{solution.name}</h3>
                    <p className="text-text text-sm mb-4">{solution.tagline}</p>
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
    </>
  );
}
