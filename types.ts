export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  technologies?: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  technologies: string[];
  points: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  date: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
  value: number; // For visualization (0-100)
}

export interface ResumeData {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
  };
  summary: string;
  skills: SkillGroup[];
  experience: Experience[];
  education: EducationItem[];
  projects: Project[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isLoading?: boolean;
}
