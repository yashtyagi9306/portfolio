// ============================================================
// Global site configuration - identity, navigation, socials,
// SEO defaults and theme options. Edit here to change the site
// everywhere; no component markup needs to change.
// ============================================================

export const identity = {
  name: 'Yash Tyagi',
  handle: 'yashtyagi21',
  role: 'UI/UX Designer',
  location: 'Ghaziabad, UP, India',
  email: 'yashtyagi3333@gmail.com',
  phone: '+91 7017822724',
  resume: 'mailto:yashtyagi3333@gmail.com',
  tagline:
    'I design intuitive user experiences, scalable design systems, and responsive interfaces that solve usability problems and delight users.',
  intro:
    'UI/UX Designer with a strong background in user-centered design, wireframing, prototyping, and design systems. I combine visual aesthetics with functional frontend development to craft seamless digital products.',
};

// Primary navigation (rendered in the navbar + footer)
export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Skills', to: '/skills' },
];

// Social / external links. `icon` maps to a key in the <Icon> component.
export const socials = [
  { label: 'LinkedIn', icon: 'linkedin', href: 'https://linkedin.com/in/yashtyagi21' },
  { label: 'GitHub', icon: 'github', href: 'https://github.com/yashtyagi9306' },
  { label: 'Email', icon: 'mail', href: 'mailto:yashtyagi3333@gmail.com' },
];

export const primaryLinks = {
  github: 'https://github.com/yashtyagi9306',
  linkedin: 'https://linkedin.com/in/yashtyagi21',
  email: 'mailto:yashtyagi3333@gmail.com',
};

// SEO defaults used by <Seo> / <Helmet>
export const seo = {
  siteUrl: 'https://www.yashtyagi.com',
  siteName: 'Yash Tyagi',
  language: 'en',
  locale: 'en_US',
  defaultTitle: 'Yash Tyagi | UI/UX Designer & Product Interface Creator',
  titleTemplate: '%s | Yash Tyagi',
  description:
    'Portfolio of Yash Tyagi, a UI/UX Designer specializing in user research, wireframing, interactive prototyping, visual design systems, and clean frontend interfaces.',
  image: 'https://www.yashtyagi.com/banner.png',
  imageAlt: 'Yash Tyagi UI/UX Designer portfolio',
  imageType: 'image/png',
  imageWidth: 1280,
  imageHeight: 720,
  twitter: '@YashT98',
  sameAs: [
    'https://github.com/yashtyagi9306',
    'https://linkedin.com/in/yashtyagi21',
  ],
  knowsAbout: [
    'UI Design',
    'UX Design',
    'User Research',
    'Wireframing',
    'Prototyping',
    'Design Systems',
    'Interaction Design',
    'Visual Design',
    'Accessibility',
    'Figma',
    'Framer',
    'Canva',
    'React.js',
    'Tailwind CSS',
    'JavaScript',
  ],
};

// Theme options exposed by the accent switcher (matches the design source).
export const accents = [
  { value: 'green', label: 'Green', color: '#0E8A66' },
  { value: 'blue', label: 'Blue', color: '#1F6FEB' },
  { value: 'cyan', label: 'Cyan', color: '#0E7490' },
];

export const footer = {
  copyright: `© ${new Date().getFullYear()} Yash Tyagi. All rights reserved.`,
  note: 'Designed & crafted with a focus on usability, clean UI, and performance.',
};

