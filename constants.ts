import { Project, ExperienceItem, Skill } from './types';

export const NAV_LINKS = [
  { name: 'Work', href: '#work' },
  { name: 'Reel', href: '#hero' }, // Reel is in Hero
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const SKILLS: Skill[] = [
  { name: 'Photoshop', category: 'Software' },
  { name: 'Illustrator', category: 'Software' },
  { name: 'Animate CC', category: 'Software' },
  { name: 'After Effects', category: 'Software' },
  { name: 'Premiere Pro', category: 'Software' },
  { name: 'Moho Pro', category: 'Software' },
  { name: 'TV Paint', category: 'Software' },
  { name: 'Blender', category: 'Software' },
  { name: 'Motion Graphics', category: 'Core' },
  { name: 'Video Editing', category: 'Core' },
  { name: 'Storyboarding', category: 'Core' },
  { name: 'Character Design', category: 'Core' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Codegrads Professional Series',
    category: 'Motion Graphics',
    image: 'https://picsum.photos/800/600?random=1',
    description: 'Educational explainer videos for professional development courses.',
  },
  {
    id: 2,
    title: 'K-12 Science Explainer',
    category: 'eLearning',
    image: 'https://picsum.photos/800/800?random=2',
    description: 'Animated biology concepts for Byline Learning Solution.',
  },
  {
    id: 3,
    title: 'The Lost Artifact',
    category: 'Storytelling',
    image: 'https://picsum.photos/800/500?random=3',
    description: 'Animatic and storyboard for a short adventure film.',
  },
  {
    id: 4,
    title: 'Cyberpunk City',
    category: '3D',
    image: 'https://picsum.photos/800/700?random=4',
    description: 'Low-poly city modeling and rendering in Blender.',
  },
  {
    id: 5,
    title: 'Math Concepts V2',
    category: 'eLearning',
    image: 'https://picsum.photos/800/600?random=5',
    description: 'Character-driven math tutorials for elementary students.',
  },
  {
    id: 6,
    title: 'Brand Identity Motion',
    category: 'Motion Graphics',
    image: 'https://picsum.photos/800/900?random=6',
    description: 'Logo reveal and transition package for a tech startup.',
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 1,
    role: 'Video Content Creator',
    company: 'Codegrads',
    period: 'Apr 2025 – Present',
    description: 'Overseeing the entire media department and creating high-impact content for professionals.',
    current: true,
  },
  {
    id: 2,
    role: 'Motion Graphic Artist',
    company: 'Byline Learning Solution',
    period: '2023 – 2025',
    description: 'Visualizing and animating educational content for Grades 1-12, ensuring high engagement.',
    current: false,
  },
  {
    id: 3,
    role: 'Freelance Storyboarder & Animator',
    company: 'Self-Employed',
    period: '2021 – 2023',
    description: 'Conceptual storytelling, client collaboration, and delivering assets for various independent projects.',
    current: false,
  },
];