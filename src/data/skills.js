// ============================================================
// Skills, core design tools and focus areas.
// ============================================================

import ReactIcon from '../components/images/react.webp';
import TsIcon from '../components/images/ts.webp';
import GitIcon from '../components/images/git.webp';

// Core design tools & languages - rendered as typographic chips on the home page.
export const languages = [
  { name: 'Figma', role: 'UI / Wireframing' },
  { name: 'Framer', role: 'Interactive Prototypes' },
  { name: 'React.js', role: 'Frontend UI' },
  { name: 'Tailwind CSS', role: 'Styling System' },
  { name: 'JavaScript', role: 'Web Logic' },
  { name: 'Python', role: 'Scripting' },
];

// Detailed skills - used on the Skills page.
const skills = [
  {
    icon: ReactIcon,
    name: 'UI/UX & Visual Design',
    description:
      'Designing modern, clean, user-centered digital interfaces with Figma and Framer. Focused on visual hierarchy, typography, whitespace, and micro-interactions.',
    tags: ['Figma', 'Framer', 'Wireframing', 'Prototyping', 'Visual Design'],
  },
  {
    icon: TsIcon,
    name: 'User Research & Personas',
    description:
      'Mapping out user journeys, creating user personas, evaluating pain points, and conducting structured usability thinking to solve real user problems.',
    tags: ['User Flows', 'Information Architecture', 'Pain Point Mapping', 'Usability'],
  },
  {
    icon: ReactIcon,
    name: 'Design Systems & Component Architecture',
    description:
      'Creating scalable design systems, UI component tokens, and reusable React.js + Tailwind CSS component libraries for production applications.',
    tags: ['Design Systems', 'Component Libraries', 'Style Guides', 'Tokens'],
  },
  {
    icon: ReactIcon,
    name: 'Frontend Development (Secondary)',
    description:
      'Building responsive, accessible web interfaces using React.js, Tailwind CSS, JavaScript (ES6+), HTML5, and state management.',
    tags: ['React.js', 'Tailwind CSS', 'State Management', 'REST API Integration'],
  },
  {
    icon: GitIcon,
    name: 'Branding & Creative Strategy',
    description:
      'Directing end-to-end event branding, visual assets, posters, stage branding, and promotional creatives using Figma and Canva.',
    tags: ['Branding', 'Visual Assets', 'Canva', 'Event Creatives'],
  },
  {
    icon: GitIcon,
    name: 'Developer & Collaboration Tools',
    description:
      'Using Git, GitHub, VS Code, and Power BI for team collaboration, version control, and data visualization.',
    tags: ['Git', 'GitHub', 'VS Code', 'Power BI', 'MySQL'],
  },
];

export default skills;

export function getSkills() {
  return skills;
}

