import AnimatedSection from '../ui/AnimatedSection';
import StatCounter from '../ui/StatCounter';

const stats = [
  { value: 100, suffix: '+', label: 'Projects Completed' },
  { value: 50, suffix: '+', label: 'Happy Clients' },
  { value: 10, suffix: '+', label: 'Years Experience' },
  { value: 9, suffix: '', label: 'Solutions Offered' },
];

export default function StatsBar() {
  return (
    <section className="py-16 bg-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <StatCounter key={stat.label} {...stat} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
