import { Project } from "./pages/projects/projects.component";

export const FEATURED_ARTICLE_URL = 'https://plutonium-api.vercel.app/articles/featured';

export const LINKS = {
  github: 'https://github.com/panesardev',
  x: 'https://x.com/panesardev',
  instagram: 'https://instagram.com/panesar.dev',
  youtube: '',
  linkedin: 'https://www.linkedin.com/in/sukhpreet-singh-18102000/',
};

export const BLOG: Project = {
  name: 'Plutonium',
  description: 'Introducing a server-rendered blog platform I developed with Angular to help fellow developers learn coding techniques quickly.',
  link: 'https://plutoniumx.vercel.app',
  stack: ['angular', 'firebase', 'tailwind', 'markdown'],
  image: '/img/plutonium.png',
};

export const PROJECTS: Project[] = [
  {
    name: 'VintageLuxe',
    description: 'E-Commerce application with server-side rendering and cart management',
    link: 'https://vintageluxe.vercel.app',
    stack: ['angular', 'firebase', 'tailwind'],
    image: '/img/vintageluxe.png',
  },
  {
    name: 'Kanban board',
    description: 'Advanced Drag & Drop Kanban board for your workflow & productivity',
    link: 'https://ngx-kanban.vercel.app',
    stack: ['angular', 'firebase', 'tailwind'],
    image: '/img/kanban.png',
  },
];
