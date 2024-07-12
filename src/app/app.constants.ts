import { Project } from "./types/project.interface";

export const FEATURED_ARTICLE_URL = 'https://plutonium-api.vercel.app/articles/featured';

export const LINKS = {
  github: 'https://github.com/panesardev',
  x: 'https://x.com/panesardev',
  instagram: 'https://instagram.com/panesar.dev',
  youtube: '',
  linkedin: '',
};

export const BLOG: Project = {
  name: 'Plutonium',
  description: 'Introducing a server-rendered blog platform I developed with Angular to help fellow developers learn coding techniques quickly.',
  link: 'https://plutoniumx.vercel.app',
  stack: ['angular', 'firebase', 'tailwind', 'markdown'],
  images: ['/assets/img/plutonium.png'],
};

export const PROJECTS: Project[] = [
  {
    name: 'EShopStyle',
    description: 'E-Commerce application with server-side rendering and cart management',
    link: 'https://eshopstyle.vercel.app',
    stack: ['angular', 'firebase', 'tailwind'],
    images: [
      '/assets/img/eshopstyle1.png',
      '/assets/img/eshopstyle2.png',
      '/assets/img/eshopstyle3.png',
    ],
  },
  {
    name: 'Kanban board',
    description: 'Advanced Drag & Drop Kanban board to boost your workflow & productivity',
    link: 'https://ngx-kanban.vercel.app',
    stack: ['angular', 'firebase', 'tailwind'],
    images: [
      '/assets/img/kanban1.png',
      '/assets/img/kanban2.png',
      '/assets/img/kanban3.png',
    ],
  },
];
