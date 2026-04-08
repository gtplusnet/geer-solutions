import { solutions } from './solutions';

const compensationPlans = [
  { label: 'Binary Plan', path: '/solutions/mlm/compensation-plans/binary-plan' },
  { label: 'Binary System', path: '/solutions/mlm/compensation-plans/binary-system' },
  { label: 'Board Plan System', path: '/solutions/mlm/compensation-plans/board-plan-system' },
  { label: 'Generation Plan', path: '/solutions/mlm/compensation-plans/generation-plan' },
  { label: 'Gift Plan', path: '/solutions/mlm/compensation-plans/gift-plan' },
  { label: 'Hybrid Plan', path: '/solutions/mlm/compensation-plans/hybrid-plan' },
  { label: 'Matrix Plan', path: '/solutions/mlm/compensation-plans/matrix-plan' },
  { label: 'Matrix Plan System', path: '/solutions/mlm/compensation-plans/matrix-plan-system' },
  { label: 'Monoline Plan', path: '/solutions/mlm/compensation-plans/monoline-plan' },
  { label: 'Party Plan', path: '/solutions/mlm/compensation-plans/party-plan' },
  { label: 'Spill Over Binary Plan', path: '/solutions/mlm/compensation-plans/spill-over-binary-plan' },
  { label: 'Stair Step Plan', path: '/solutions/mlm/compensation-plans/stair-step-plan' },
  { label: 'Unilevel Plan', path: '/solutions/mlm/compensation-plans/unilevel-plan' },
  { label: 'Unilevel Plan System', path: '/solutions/mlm/compensation-plans/unilevel-plan-system' },
  { label: 'Australian X Up Plan', path: '/solutions/mlm/compensation-plans/australian-x-up-plan' },
  { label: 'Australian Binary Plan', path: '/solutions/mlm/compensation-plans/australian-binary-plan' },
];

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Company', path: '/company' },
  {
    label: 'Solutions',
    path: '/solutions',
    children: solutions.map((s) => {
      if (s.slug === 'mlm') {
        return {
          label: s.shortName,
          path: `/solutions/${s.slug}`,
          children: [
            { label: 'Ready-made MLM System', path: '/solutions/mlm/ready-made' },
            { label: 'Start your MLM Business', path: '/solutions/mlm/start-business' },
            {
              label: 'Compensation Plans',
              path: '/solutions/mlm/compensation-plans',
              children: compensationPlans,
            },
          ],
        };
      }
      return {
        label: s.shortName,
        path: `/solutions/${s.slug}`,
      };
    }),
  },
  { label: 'Events', path: '/events' },
  { label: 'Contact', path: '/contact' },
];
