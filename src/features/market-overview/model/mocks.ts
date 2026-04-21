import type { HomePageContract } from '../../../shared/types/contracts'

export const homePageMock: HomePageContract = {
  hero: {
    kicker: 'Auction intelligence platform',
    title: 'BIDBIDERS builds confidence before every bid.',
    lead: 'A new generation marketplace for finding, evaluating, and securing cars with transparent calculations and fast decision loops.',
  },
  metrics: [
    { id: 'readiness', label: 'Offer readiness', value: '97.2%' },
    { id: 'decision-time', label: 'Average decision time', value: '14 min' },
    { id: 'risk-events', label: 'Risk events caught', value: '1,428' },
  ],
  highlights: [
    {
      id: 'scenario-search',
      title: 'Search that thinks in scenarios',
      description: 'Filter by margin, repair risk, or delivery speed. BIDBIDERS turns listing noise into short decision-ready sets.',
    },
    {
      id: 'contract-discipline',
      title: 'Evaluation with contract discipline',
      description: 'Every lot keeps its own fact trail: estimator inputs, tax logic, and revision timestamps.',
    },
    {
      id: 'operator-flow',
      title: 'Operator workflows, not static pages',
      description: 'Managers, analysts, and buyers work on one timeline with task ownership and clear transfer points.',
    },
  ],
  launchSteps: [
    {
      id: 'seed-inventory',
      order: '01',
      title: 'Seed inventory',
      description: 'Connect source feeds and normalize lot structure.',
    },
    {
      id: 'valuation-lanes',
      order: '02',
      title: 'Run valuation lanes',
      description: 'Calculate scenario totals and confidence intervals.',
    },
    {
      id: 'decision-board',
      order: '03',
      title: 'Push decision board',
      description: 'Prioritize lots by risk, value, and urgency.',
    },
    {
      id: 'execution-handoff',
      order: '04',
      title: 'Logistics and shipping',
      description: 'Prepare container loading, documents, and shipment.',
    },
    {
      id: 'vehicle-handover',
      order: '05',
      title: 'Vehicle handover',
      description: 'Support customs and final delivery in client city.',
    },
  ],
  finalCall: {
    title: 'Build the first production sprint for BIDBIDERS.COM',
    description: 'We already have reference intelligence and contract assumptions. Next step is implementation in focused vertical slices.',
  },
}
