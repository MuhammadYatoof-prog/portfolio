export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const SKILLS = {
  frontend: [
    { name: 'React', level: 90 },
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
  ],
  backend: [
    { name: 'Node.js', level: 80 },
    { name: 'Express.js', level: 75 },
  ],
  database: [
    { name: 'MongoDB', level: 80 },
      { name: 'SQL', level: 85 },
  ],
  tools: [
    { name: 'Git', level: 85 },
    { name: 'Docker', level: 60 },
    { name: 'AWS', level: 50 },
  ],
};

export const PROJECTS = [
  {
    title: 'Smart Transport System',
    description: 'A comprehensive transportation management system with real-time tracking and route optimization.',
    techStack: ['Codeigniter','Bootstrap', 'PHP', 'SQL Server', 'Google Maps API'],
    liveDemo: 'https://smart-transport-demo.vercel.app',
  },
  {
    title: 'BookStore',
    description: 'A modern e-commerce platform for browsing and purchasing books.',
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    liveDemo: 'https://bookstore.vercel.app',
  },
];

export const SOCIAL_LINKS = [
  { name: 'GitHub', href: 'https://github.com/MuhammadYatoof-prog/', icon: '🐙' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/muhammad-yatoof-467552306/', icon: '💼' },
];

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_yatoof',
  TEMPLATE_ID: 'template_portfolio',
  PUBLIC_KEY: 'your_public_key_here',
};
