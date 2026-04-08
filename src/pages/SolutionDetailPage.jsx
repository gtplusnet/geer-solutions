import { useParams, Navigate } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';
import Button from '../components/ui/Button';
import { solutions } from '../data/solutions';

export default function SolutionDetailPage({ slug: slugProp }) {
  const params = useParams();
  const slug = slugProp || params.slug;
  const solution = solutions.find((s) => s.slug === slug);

  if (!solution) return <Navigate to="/solutions" replace />;

  return (
    <>
      <section className="relative pt-32 pb-20 bg-darker overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-[120px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{solution.name}</h1>
            <p className="text-text-white/70 text-lg max-w-2xl">{solution.description}</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <AnimatedSection>
                <h2 className="text-2xl font-bold text-darker mb-8">Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {solution.features.map((feature) => (
                    <div key={feature.title} className="bg-surface rounded-xl p-5">
                      <h3 className="font-semibold text-darker mb-1">{feature.title}</h3>
                      <p className="text-text text-sm">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection className="mt-12">
                <h2 className="text-2xl font-bold text-darker mb-6">Benefits</h2>
                <ul className="space-y-3">
                  {solution.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-text">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            </div>

            <div>
              <AnimatedSection direction="right">
                <div className="sticky top-24 bg-darker rounded-2xl p-8 text-white">
                  <h3 className="text-xl font-bold mb-2">Starting at</h3>
                  <div className="text-3xl font-bold text-primary mb-1">
                    ₱{solution.price.toLocaleString()}
                  </div>
                  <p className="text-white/50 text-sm mb-6">Timeline: {solution.timeline}</p>
                  <Button to="/contact" className="w-full">
                    Get Started <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
