export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string[];
  techStack: string[];
}

export interface ProjectItem {
  title: string;
  role: string;
  description: string;
  features: string[];
  techStack: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface EducationItem {
  university: string;
  degree: string;
  field: string;
}
