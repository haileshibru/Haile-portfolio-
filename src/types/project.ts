export interface ProjectData {
  id: string;
  title: string;
  shortTitle: string;
  category: string;
  categoryGroup: 'all' | 'education' | 'social' | 'transport' | 'career' | 'display';
  description: string;
  longDescription: string;
  problem: string;
  solution: string;
  technologies: string[];
  keyFeatures: string[];
  role: string;
  status: 'Completed / Deployed' | 'In Active Development' | 'Production Ready';
  image: string;
  accentColor: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  builtBy: string;
  releaseYear: string;
}

export type ProjectFilterCategory = 'all' | 'education' | 'social' | 'transport' | 'career' | 'display';
