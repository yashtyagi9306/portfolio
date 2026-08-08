// ============================================================
// "What I do" - the service / focus areas shown on the home page.
// ============================================================

const services = [
  {
    num: '01',
    tag: 'Research',
    title: 'User Research & Insights',
    description:
      'Uncovering user needs, mapping pain points, defining personas, and conducting usability testing to ensure design decisions are backed by real user behavior.',
  },
  {
    num: '02',
    tag: 'Design',
    title: 'UI/UX & Interaction Design',
    description:
      'Crafting clean, accessible, intuitive interfaces with visual hierarchy, micro-interactions, and high-fidelity mockups using Figma and modern design tools.',
  },
  {
    num: '03',
    tag: 'Prototyping',
    title: 'Wireframing & Prototyping',
    description:
      'Transforming product concepts into low to high-fidelity wireframes and interactive prototypes to validate user flows before production.',
  },
  {
    num: '04',
    tag: 'Systems',
    title: 'Design Systems & UI Libraries',
    description:
      'Building scalable, modular design systems with reusable components, clear typography guidelines, color palettes, and accessibility standards.',
  },
  {
    num: '05',
    tag: 'Frontend',
    title: 'Frontend Implementation',
    description:
      'Translating UI/UX designs into pixel-perfect, responsive React.js and Tailwind CSS interfaces, ensuring state management and usability are built in.',
  },
];

export function getServices() {
  return services;
}

// Default export is the getter (pages import it as `getServices`).
export default getServices;

// Also expose the raw array for direct consumers.
export { services };

