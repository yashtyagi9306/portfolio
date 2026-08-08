// ============================================================
// Articles & Insights - design thinking, UI/UX methodologies,
// and frontend architecture notes.
// ============================================================

const articles = [
  {
    title: 'Building Scalable Design Systems with Tokens & Component Specs',
    description:
      'How to establish consistent color palettes, typography scales, and reusable UI tokens that bridge the gap between design in Figma and code in React.',
    date: 'Jan 2026',
    readTime: '6 min read',
    link: 'https://linkedin.com/in/yashtyagi21',
    tags: ['Design Systems', 'Figma', 'UI Tokens'],
  },
  {
    title: 'Designing for Usability: User Flow Mapping & Accessibility First',
    description:
      'Best practices for structuring user journeys, reducing cognitive load, and adhering to WCAG standards for accessible digital experiences.',
    date: 'Dec 2025',
    readTime: '5 min read',
    link: 'https://linkedin.com/in/yashtyagi21',
    tags: ['UX Research', 'Accessibility', 'User Flow'],
  },
  {
    title: 'Architecting AI-Powered Debates: Micro-Interactions & Feedback UX',
    description:
      'Designing turn-based interfaces and real-time feedback loops that make AI scoring intuitive, transparent, and engaging for users.',
    date: 'Nov 2025',
    readTime: '7 min read',
    link: 'https://linkedin.com/in/yashtyagi21',
    tags: ['Interaction Design', 'AI UX', 'Prototyping'],
  },
];

export default articles;

export function getArticles() {
  return articles;
}

