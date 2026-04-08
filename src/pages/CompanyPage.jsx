import { Users, Target, Award, Heart } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';

const values = [
  { icon: Target, title: 'Innovation', desc: 'We embrace cutting-edge technology to deliver forward-thinking solutions.' },
  { icon: Users, title: 'Collaboration', desc: 'We work closely with clients to understand and exceed their expectations.' },
  { icon: Award, title: 'Excellence', desc: 'We maintain the highest standards of quality in every project we deliver.' },
  { icon: Heart, title: 'Dedication', desc: 'We are committed to our clients\' success and long-term growth.' },
];

export default function CompanyPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-darker overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-[120px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Our Company</h1>
            <p className="text-text-white/70 text-lg max-w-2xl">
              Geer IT Solutions Inc. is the Philippines' premier IT solutions company, transforming businesses through innovative and reliable technology.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-16">
            <h2 className="text-3xl font-bold text-darker mb-6">Our Story</h2>
            <p className="text-text text-lg leading-relaxed max-w-3xl">
              Founded with a vision to empower Philippine businesses through technology, Geer IT Solutions has grown into a trusted partner for companies seeking digital transformation. We specialize in creating custom software solutions that address real business challenges and drive measurable results.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <div className="text-center p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-darker mb-2">{item.title}</h3>
                  <p className="text-text text-sm">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
