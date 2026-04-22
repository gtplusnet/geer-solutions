import { Users, Target, Award, Heart } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';

const values = [
  { icon: Target, title: 'Agile Team Dynamics', desc: 'We’re a team and we’re always evolving. There is no problem we can’t solve when we’re together.' },
  { icon: Users, title: 'After Sales Support', desc: 'We have daily Support Team online 24/7, so just call us, chat us, if you want to reach us.' },
  { icon: Award, title: 'Communication', desc: 'Every code we make, every break we take, every meal we bake, every shimmy we shake, we’ll be updating you.' },
  { icon: Heart, title: 'Consultants that cares', desc: 'We want you to stay. Stay with us and we’ll take care of you. We love long term relationship' },
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
            <h2 className="text-3xl font-bold text-darker mb-6">Who we are</h2>
            <p className="text-text text-lg leading-relaxed max-w-3xl">
              <b>Geer IT Solutions, Inc. (GISI)</b> is a software development company specializing in transforming businesses with an extensive set of pinnacle digital solutions. We understand the complexities of modern markets and translate them into real business solutions. We focus on a consultative, business-first approach in everything we do, to solve challenges for every company and individual. We strategically enhance our clients’ environments with the right digital solutions, diverse expertise, compassion, and a deep understanding of the client’s vision
            </p>
          </AnimatedSection>

          <AnimatedSection className="mb-16">
            <h2 className="text-3xl font-bold text-darker mb-6">Mission</h2>
            <p className="text-text text-lg leading-relaxed max-w-3xl">
              To provide top-class digital solutions to solve complex problems for businesses. We strive to be more than just your average technology company. We hope to reflect community, diversity, and integrity starting from the people we hire, our strategic partnerships, the best-in-class solutions we implement, to our exceptional delivery practices.
            </p>
          </AnimatedSection>

          <AnimatedSection className="mb-16">
            <h2 className="text-3xl font-bold text-darker mb-6">Vision</h2>
            <p className="text-text text-lg leading-relaxed max-w-3xl">
              Best-in-class Information Technology Services Company, Offering Tailor-Made Software, Superior IT Solutions to People and Business Everywhere. Being the top-class technology company does not mean being the biggest but it does mean being the best in terms of product value, customer service, employee talent, and consistent growth.
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
