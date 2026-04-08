import { useParams } from 'react-router-dom';
import { Construction, ArrowLeft } from 'lucide-react';
import Button from '../components/ui/Button';

const titleMap = {
  'ready-made': 'Ready-made MLM System',
  'start-business': 'Start your MLM Business',
  'compensation-plans': 'Compensation Plans',
  'binary-plan': 'Binary Plan',
  'binary-system': 'Binary System',
  'board-plan-system': 'Board Plan System',
  'generation-plan': 'Generation Plan',
  'gift-plan': 'Gift Plan',
  'hybrid-plan': 'Hybrid Plan',
  'matrix-plan': 'Matrix Plan',
  'matrix-plan-system': 'Matrix Plan System',
  'monoline-plan': 'Monoline Plan',
  'party-plan': 'Party Plan',
  'spill-over-binary-plan': 'Spill Over Binary Plan',
  'stair-step-plan': 'Stair Step Plan',
  'unilevel-plan': 'Unilevel Plan',
  'unilevel-plan-system': 'Unilevel Plan System',
  'australian-x-up-plan': 'Australian X Up Plan',
  'australian-binary-plan': 'Australian Binary Plan',
};

export default function UnderDevelopmentPage() {
  const { subpage, plan } = useParams();
  const slug = plan || subpage;
  const title = titleMap[slug] || slug;

  return (
    <section className="min-h-screen flex items-center justify-center bg-darker">
      <div className="text-center px-4">
        <Construction className="w-20 h-20 text-primary mx-auto mb-6" />
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h1>
        <p className="text-white/60 text-lg mb-8 max-w-md mx-auto">
          This page is currently under development. Please check back soon!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button to="/solutions/mlm">
            <ArrowLeft className="w-4 h-4" /> Back to MLM Solutions
          </Button>
        </div>
      </div>
    </section>
  );
}
