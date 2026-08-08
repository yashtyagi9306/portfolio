// ============================================================
// Projects - single source of truth for UX Case Studies & Projects.
// ============================================================

export const CATEGORY = {
  all: 'all',
  caseStudies: 'caseStudies',
  uiUx: 'uiUx',
  frontend: 'frontend',
};

export const CATEGORY_LABELS = {
  all: 'All Work',
  caseStudies: 'UX Case Studies',
  uiUx: 'UI/UX Design',
  frontend: 'Frontend Web',
};

const projects = [
  {
    id: 1,
    slug: 'medito',
    name: 'Medito Re-Designed',
    category: CATEGORY.caseStudies,
    featured: true,
    badge: 'UX CASE STUDY · REDESIGN',
    year: '2026',
    tagline:
      'A modern UI/UX redesign of Medito, creating an intuitive, calming, and accessible meditation experience.',
    summary:
      'Independent UI/UX redesign of the Medito meditation app featuring modernized visual hierarchy, low-friction navigation, and refined night-mode accessibility.',
    overview: [
      'Medito Re-Designed is an independent UI/UX concept project that reimagines the Medito meditation experience through modern UI principles, improved user flows, and a calming visual language.',
      'The objective was to preserve Medito’s core mission of accessible meditation while enhancing daily user interactions—reducing cognitive overload, improving night-mode accessibility, and streamlining session selection.',
    ],
    facts: {
      type: 'UX Case Study & Redesign',
      platforms: 'Web · Mobile Responsive',
      stack: 'React.js · TypeScript · Vite · Tailwind CSS',
      focus: 'Information Architecture · Calming Visual Language',
    },
    tags: ['UI/UX Redesign', 'Meditation UX', 'Information Architecture', 'React.js', 'Tailwind CSS', 'TypeScript'],
    features: [
      { title: 'Modern Minimal Interface', desc: 'Calming design language with generous spatial hierarchy focused on accessible meditation.' },
      { title: 'Redesigned Home & Library', desc: 'Simplified sitemap and intuitive category browsing to help users start sessions instantly.' },
      { title: 'Sleep & Night Experience', desc: 'High-fidelity UI screens optimized for low-friction, dark-mode night use.' },
      { title: 'Before vs. After Comparison', desc: 'Interactive visual breakdown highlighting key usability and layout improvements.' },
    ],
    problemStatement:
      'The original meditation experience suffered from visual friction, dense navigation menus, and suboptimal night-mode contrast, hindering quick access to daily mindfulness routines.',
    research: [
      'Audited existing meditation app user journeys to identify navigation bottlenecks.',
      'Mapped friction points during night/sleep session selection.',
      'Established a soft, high-contrast visual system tailored for calming user routines.',
    ],
    userFlow: [
      'Home Dashboard -> Mindfulness Goal Selection -> Guided Session Player -> Progress Completion Summary.',
    ],
    wireframes: ['Low to high-fidelity UI screens exploring night-mode contrast and simplified bottom navigation.'],
    visualDesign:
      'Deep soothing color palettes with high-contrast typography, soft rounded cards, and subtle micro-interactions.',
    reflection:
      'Designing for wellness products requires removing every unnecessary micro-distraction so the interface gets out of the way of the experience.',
    image: '/projects/medito/hero.png',
    banner: '/projects/medito/hero.png',
    screens: ['/projects/medito/screen1.png', '/projects/medito/screen2.png'],
    links: {
      live: 'https://medito-re-designed.vercel.app/',
      github: 'https://github.com/yashtyagi9306/Medito-Re_Designed',
    },
  },
  {
    id: 2,
    slug: 'bloom',
    name: 'Bloom EMS',
    category: CATEGORY.uiUx,
    featured: true,
    badge: 'ENTERPRISE UX · UI DESIGN',
    year: '2026',
    tagline:
      'A role-based Employee Management System streamlining task assignment, progress tracking, and team productivity.',
    summary:
      'SaaS-inspired employee management dashboard featuring dual Admin & Employee interfaces and complete task lifecycle tracking.',
    overview: [
      'Bloom EMS is an enterprise management product designed to eliminate administrative overhead in workforce management. It provides distinct, tailored dashboards for Admins and Employees to manage task lifecycles seamlessly.',
      'The focus was placed on information architecture, role-based access control, clean data presentation, and low-friction task assignment workflows.',
    ],
    facts: {
      type: 'Enterprise SaaS Dashboard',
      platforms: 'Web · Desktop & Mobile',
      stack: 'React.js · Tailwind CSS · Context API · LocalStorage',
      focus: 'Role-Based Navigation · Task Management UX',
    },
    tags: ['Dashboard UX', 'Role-Based Access', 'React.js', 'Tailwind CSS', 'Task Workflows'],
    features: [
      { title: 'Dual Role Dashboards', desc: 'Tailored interfaces for Admins (task creation, search, stats) and Employees (accept, complete, fail).' },
      { title: 'Task Lifecycle Workflows', desc: 'Complete status management covering Active, Completed, Failed, and Reopened tasks.' },
      { title: 'Team Analytics & Search', desc: 'Real-time overview statistics and instant employee search capability.' },
      { title: 'SaaS UI Polish', desc: 'Professional toast notifications, smooth animations, empty states, and local persistence.' },
    ],
    problemStatement:
      'Enterprise management tools are often overloaded with complex menus, creating steep learning curves for employees and slowing down daily task distribution.',
    research: [
      'Mapped Admin vs Employee daily journeys to remove unnecessary administrative clicks.',
      'Designed high-visibility status indicators to convey task states at a glance.',
    ],
    userFlow: [
      'Role Authentication -> Contextual Dashboard -> Task Assignment / Status Update -> Analytics Summary.',
    ],
    wireframes: ['Structured grid layouts emphasizing quick action buttons and accessible task list filters.'],
    visualDesign:
      'Clean professional SaaS aesthetic with neutral backgrounds, accent status badges, and subtle hover micro-interactions.',
    reflection:
      'Clarity and predictable navigation in business software directly improve daily team adoption and workflow efficiency.',
    image: '/projects/bloom/hero.png',
    banner: '/projects/bloom/hero.png',
    screens: ['/projects/bloom/screen1.png', '/projects/bloom/screen2.png', '/projects/bloom/screen3.png'],
    links: {
      live: 'https://bloomems.vercel.app/',
      github: 'https://github.com/yashtyagi9306/Employee-Management-System',
    },
  },
  {
    id: 3,
    slug: 'pomodoro',
    name: 'Pomodoro Timer',
    category: CATEGORY.frontend,
    featured: true,
    badge: 'PRODUCTIVITY UX · UI',
    year: '2026',
    tagline:
      'A clean productivity app combining a 25/5 Pomodoro timer with task priorities and streak tracking.',
    summary:
      'Focused productivity interface with task management, 25/5 work-break timer cycles, priority tags, and local storage persistence.',
    overview: [
      'Pomodoro Timer is a productivity application designed to merge task tracking with a structured 25/5 work-break focus timer. It helps users eliminate distractions and maintain daily work momentum.',
      'The interface prioritizes simplicity, instant actionability, and clean visual status feedback without requiring account creation.',
    ],
    facts: {
      type: 'Productivity Application',
      platforms: 'Web · Mobile Responsive',
      stack: 'React 18 · TypeScript · Vite · CSS · LocalStorage',
      focus: 'Simple Interaction · Focused UI',
    },
    tags: ['Productivity UX', 'React.js', 'TypeScript', 'CSS', 'Vite'],
    features: [
      { title: '25/5 Pomodoro Work Cycle', desc: 'Built-in work and short-break timer modes with clear visual progress display.' },
      { title: 'Task & Priority Management', desc: 'Create, edit, complete, and filter tasks with Low, Medium, and High priority tags.' },
      { title: 'Productivity Streak Tracking', desc: 'Daily completed task counters and streak progress indicators.' },
      { title: 'Instant Local Storage Sync', desc: 'Persistent state management ensuring zero data loss across browser reloads.' },
    ],
    problemStatement:
      'Many timer tools are separated from task lists, forcing users to constantly switch between external todo apps and standalone timers.',
    research: [
      'Designed a single-screen layout keeping the active timer and task priority queue visible simultaneously.',
    ],
    userFlow: [
      'Task Creation & Priority Tagging -> Pomodoro Timer Start -> Task Completion -> Daily Streak Increment.',
    ],
    wireframes: ['Compact card interface combining timer controls with an interactive todo list.'],
    visualDesign:
      'Distraction-free interface with clean typography, high-contrast priority tags, and smooth theme support.',
    reflection:
      'Building effective utility apps comes down to stripping away friction so users can focus entirely on their work.',
    image: '/projects/pomodoro/hero.png',
    banner: '/projects/pomodoro/hero.png',
    screens: ['/projects/pomodoro/screen1.png'],
    links: {
      live: 'https://pomodoro-timer-pc.vercel.app/',
      github: 'https://github.com/yashtyagi9306/Pomodoro_Timer',
    },
  },
  {
    id: 4,
    slug: 'duel',
    name: 'Duel',
    category: CATEGORY.caseStudies,
    featured: false,
    badge: 'AI UX · INTERACTION DESIGN',
    year: '2026',
    tagline:
      'Challenge Ideas. Not People. An AI-powered debate platform with automated scoring and objective verdicts.',
    summary:
      'AI debate platform featuring AI vs AI structured arguments, multiple persona modes, and real-time AI Judge evaluation.',
    overview: [
      'Duel is an AI debate web application designed around the mantra "Challenge Ideas. Not People." It enables two autonomous AI agents to debate opposing sides of any topic, while an AI Judge evaluates the arguments objectively.',
      'The primary design challenge was translating complex multi-agent AI interactions into a clean, engaging turn-based interface that remains easy to digest for live debaters and spectators.',
    ],
    facts: {
      type: 'AI Web Platform',
      platforms: 'Web · Full-Stack',
      stack: 'React.js · Vite · Tailwind CSS · Node.js · Express · Groq API',
      focus: 'AI Verdict UX · Turn-Based Debate UI',
    },
    tags: ['AI UX', 'React.js', 'Tailwind CSS', 'Node.js', 'Groq LLM', 'Interaction Design'],
    features: [
      { title: 'AI vs AI Structured Debates', desc: 'Autonomous AI debaters presenting structured arguments across custom configurable rounds.' },
      { title: 'Multiple Debate Personas', desc: 'Configurable AI modes including Balanced, Academic, Aggressive, and Humorous.' },
      { title: 'AI Judge Verdict Breakdown', desc: 'Visual verdict cards presenting transparent scoring, logic analysis, and argument evaluations.' },
      { title: 'Turn-Based Stream UI', desc: 'Responsive live-debate interface built for readability and minimal cognitive overload.' },
    ],
    problemStatement:
      'Online discussion forums frequently degrade into unmoderated arguments lacking logical evaluation, objective scoring, or constructive feedback.',
    research: [
      'Analyzed competitive debate scoring rubrics and online discussion formats.',
      'Designed transparent AI verdict cards to build user confidence in automated argument evaluation.',
    ],
    userFlow: [
      'Topic Input & Persona Selection -> Autonomous AI Debate Rounds -> AI Judge Evaluation -> Verdict & Argument Breakdown.',
    ],
    wireframes: ['Iterative stream layouts prioritizing real-time argument readability and judge card visibility.'],
    visualDesign:
      'Dark mode aesthetic with vibrant accent highlights for debater turns and high-contrast verdict cards.',
    reflection:
      'Designing AI interactions requires establishing clear user trust through transparent evaluation criteria and structured visual hierarchy.',
    image: '/projects/duel/screen1.png',
    banner: '/projects/duel/screen1.png',
    screens: ['/projects/duel/hero.png', '/projects/duel/screen2.png'],
    links: {
      live: 'https://duel-drab.vercel.app/',
      github: 'https://github.com/yashtyagi9306/Duel',
    },
  },
  {
    id: 5,
    slug: 'laptop-showcase',
    name: 'Laptop Showcase (Aero X1)',
    category: CATEGORY.uiUx,
    featured: false,
    badge: 'PRODUCT SHOWCASE · UI DESIGN',
    year: '2026',
    tagline:
      'A sleek product showcase website presenting the Lumen Aero X1 ultrabook through modern visual storytelling.',
    summary:
      'High-impact product landing page highlighting unibody design, thermal performance specs, 3D product visuals, and configuration options.',
    overview: [
      'Laptop Showcase is a high-fidelity product presentation landing page built for the Lumen Aero X1 ultrabook. The website focuses on immersive visual presentation, high-contrast dark typography, and fluid spec comparisons.',
      'The design emphasizes product storytelling—leading users from structural unibody design details down to hardware thermals, OLED display specs, and tier pricing.',
    ],
    facts: {
      type: 'Product Showcase Site',
      platforms: 'Web · Responsive',
      stack: 'React.js · Tailwind CSS · Lovable UI · Vite',
      focus: 'Product Storytelling · Visual Presentation',
    },
    tags: ['Product Design', 'Visual UI', 'React.js', 'Tailwind CSS', 'Responsive Layout'],
    features: [
      { title: 'Minimal Product Storytelling', desc: 'Immersive dark-mode presentation with strong editorial typography and section flow.' },
      { title: 'Spec Breakdown Cards', desc: 'Structured performance grids covering 3nm SoC, thermal vapor chamber, and OLED display.' },
      { title: 'Interactive Configurator', desc: 'Tiered pre-order configuration selector (Core, Pro, Ultra).' },
      { title: 'Responsive Experience', desc: 'Fluid layout adjustments optimized across desktop, tablet, and mobile viewports.' },
    ],
    problemStatement:
      'Hardware landing pages often overwhelm users with raw technical specs rather than presenting clear product value and design craftsmanship.',
    research: [
      'Studied premium hardware landing pages to balance visual hardware hero shots with technical specification grids.',
    ],
    userFlow: [
      'Hero Unibody Showcase -> Design & Thermals -> OLED Specifications -> Pre-Order Configurator.',
    ],
    wireframes: ['Editorial dark-mode layouts emphasizing large product photography and minimalist hardware callouts.'],
    visualDesign:
      'Monochrome dark background with crisp white typography, micro subtle borders, and generous spatial rhythm.',
    reflection:
      'Product design landing pages succeed when visual hierarchy allows specs to feel lightweight rather than intimidating.',
    image: '/projects/laptop-showcase/screen1.png',
    banner: '/projects/laptop-showcase/screen1.png',
    screens: ['/projects/laptop-showcase/hero.png'],
    links: {
      live: 'https://unveil-your-gear.lovable.app/',
      github: 'https://github.com/yashtyagi9306/unveil-your-gear',
    },
  },
];

export default projects;

// ---- Selectors -------------------------------------------------

export function getProjects() {
  return projects;
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug || String(p.id) === String(slug)) || null;
}

export function getProjectsByCategory(category) {
  if (!category || category === CATEGORY.all) return projects;
  return projects.filter((p) => p.category === category);
}

export function getActiveCategories() {
  const order = ['caseStudies', 'uiUx', 'frontend'];
  const present = new Set(projects.map((p) => p.category));
  return [
    { value: CATEGORY.all, label: CATEGORY_LABELS.all },
    ...order
      .filter((c) => present.has(c))
      .map((c) => ({ value: c, label: CATEGORY_LABELS[c] || c })),
  ];
}

export function getNextProject(slug) {
  const idx = projects.findIndex((p) => p.slug === slug || String(p.id) === String(slug));
  if (idx === -1) return projects[0];
  return projects[(idx + 1) % projects.length];
}


