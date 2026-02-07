export interface Project {
  title: string;
  description: string;
  url: string;
  github?: string;
  tags: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: 'Project Alpha',
    description: 'A demonstration project showcasing modern web development techniques and best practices.',
    url: 'https://hotea.github.io/project-alpha',
    github: 'https://github.com/hotea/project-alpha',
    tags: ['TypeScript', 'React', 'Vite'],
    featured: true,
  },
  {
    title: 'Data Structures & Algorithms',
    description: 'Collection of data structure and algorithm implementations with detailed explanations.',
    url: 'https://hotea.github.io/dsa',
    github: 'https://github.com/hotea/dsa',
    tags: ['Python', 'Algorithms', 'LeetCode'],
    featured: true,
  },
  {
    title: 'Dev Tools',
    description: 'A set of useful developer tools and utilities built for everyday workflow.',
    url: 'https://hotea.github.io/dev-tools',
    github: 'https://github.com/hotea/dev-tools',
    tags: ['JavaScript', 'CLI', 'Node.js'],
    featured: false,
  },
];
