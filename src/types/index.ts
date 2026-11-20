export interface Skill {
  name: string;
  category: 'core' | 'frontend' | 'backend' | 'tooling';
  proficiency: number;
  highlight?: boolean;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  architectureDetails: string[];
  techStack: string[];
  metrics: { label: string; value: string }[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  status: 'Production' | 'Live Operations' | 'Active SaaS' | 'Enterprise Ready';
}

export interface OrdaPillar {
  title: string;
  badge: string;
  description: string;
  highlights: string[];
}
