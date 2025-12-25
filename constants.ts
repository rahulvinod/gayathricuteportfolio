import { ExperienceItem, ProjectItem, SkillCategory, EducationItem } from './types';

export const PERSONAL_INFO = {
  name: "Gayathri I G",
  role: "Senior Frontend Engineer",
  email: "itsgayathriig@gmail.com",
  summary: "Over four years of software development experience specializing in designing and implementing responsive, high-performance web applications. Extensive programming skills in ReactJS, TypeScript, and JavaScript, with proficiency in unit testing methodologies."
};

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages & Core",
    skills: ["ReactJS", "TypeScript", "JavaScript", "HTML5", "CSS", "Next.js"]
  },
  {
    category: "State & Architecture",
    skills: ["Redux", "Redux Toolkit", "Zustand", "Context API", "React Flow", "GraphQL"]
  },
  {
    category: "UI & Visualization",
    skills: ["MUI", "PrimeReact UI Library", "Styled Components", "Highcharts", "Chart.js"]
  },
  {
    category: "Testing & Tools",
    skills: ["Jest", "Vitest", "React Testing Library", "Git", "JIRA", "Vite", "Contentful (CMS)"]
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Zafin (Contract via QBurst)",
    role: "Senior Engineer",
    period: "Jun 2025 - Present",
    description: [
      "Senior front-end contributor for Deal Manager, a core banking platform enabling client-specific pricing, approvals, and billing integrations.",
      "Improved performance of the busiest screen by ~70% through reduced network calls and optimized Apollo Cache strategies.",
      "Resolved critical legacy issues, significantly improving stability and reducing customer-reported defects.",
      "Strengthened UI reliability by adding Vitest-based test coverage for core components.",
      "Actively supported production releases and live issue resolution with fast turnaround."
    ],
    techStack: ["React", "TypeScript", "GraphQL", "PrimeReact", "Apollo Cache", "Vitest"]
  },
  {
    company: "QBurst",
    role: "Senior Engineer",
    period: "Aug 2021 - Present",
    description: [
      "Delivered and led front-end development across multiple internal and client-facing products spanning fintech, architecture visualization, sports management, and enterprise platforms.",
      "Enterprise System Architecture: Built an interactive system-visualization tool using React Flow, enabling live editing, node relationships, search, zooming, and architectural insights.",
      "Fihub (MVP): Developed admin, customer, and marketing portals; implemented financial dashboards with Highcharts and report exports (Excel, CSV, PDF).",
      "Sport X: Led UI development with MUI, implemented role-based access control, and built auction and player-statistics visualizations.",
      "Designed reusable component libraries, improved UX with pagination, tabbed layouts, and state management using Redux Toolkit and Zustand.",
      "Mentored junior engineers, participated in code reviews, and supported production-ready deployments."
    ],
    techStack: ["React", "TypeScript", "Next.js", "Redux Toolkit", "Zustand", "MUI", "Highcharts", "React Flow"]
  }
];

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    title: "Deal Manager (Zafin)",
    role: "Frontend Developer",
    description: "A banking software tool that helps banks digitize, govern, and automate client-specific pricing deals from negotiation and approval workflows to billing integration.",
    features: [
      "Improved performance of the busiest screen by ~70% by reducing network calls and implementing effective Apollo Cache strategies.",
      "Resolved high-priority legacy issues, contributing to improved platform stability and reduced user-reported defects.",
      "Added UI test coverage using Vitest, enhancing the reliability of core UI components.",
      "Supported production readiness and customer-facing support rotations."
    ],
    techStack: ["GraphQL", "PrimeReact UI Library", "ReactJS", "TypeScript", "Apollo Client", "Vitest"]
  },
  {
    title: "Enterprise System Architecture",
    role: "Frontend Developer",
    description: "A web-based app that showcases all internal applications developed by QBurst, along with their integrations, data flow, and project ownership.",
    features: [
      "Developed a dynamic visualization chart using React Flow with custom nodes, zooming, search, edge handling, and tooltips.",
      "Enabled features like drag-and-drop node management, live chart editing, and visual grouping with color/naming.",
      "Implemented Google login, refresh token mechanism, and project state management with Zustand.",
      "Built reusable components (toaster, route guards, dropdowns) and improved UX via tabbed views."
    ],
    techStack: ["Zustand", "React Flow", "ReactJS", "TypeScript"]
  },
  {
    title: "Fihub MVP Development",
    role: "Frontend Developer",
    description: "An intelligent financial and contract management solution aggregating data from various platforms to support financial decisions and resource allocation for startups.",
    features: [
      "Developed front-end components for admin and customer portals and the marketing website.",
      "Utilized Highcharts for data visualization, creating dynamic charts to represent various financial data effectively.",
      "Integrated Excel JS and html2canvas for exporting reports to Excel, CSV, and PDF formats.",
      "Used React Hook Form and Yup for building robust forms."
    ],
    techStack: ["Highcharts", "MUI", "Next.js", "React", "TypeScript", "Vite", "Vitest", "React Testing Library"]
  },
  {
    title: "Sport X",
    role: "Frontend Developer",
    description: "A comprehensive sports management platform featuring profile management, tournament tracking, live auctions, and real-time match updates.",
    features: [
      "Led application development using MUI templates and MUI components.",
      "Implemented role-based access control across multiple user types.",
      "Created visually compelling graphs for auction data and player statistics.",
      "Mentored junior developers and supported code reviews."
    ],
    techStack: ["MUI", "React", "Redux Toolkit", "TypeScript"]
  },
  {
    title: "Other Projects",
    role: "Frontend Developer",
    description: "Worked on multiple internal platforms and client-facing applications across domains, including social media, sales enablement, and data analytics.",
    features: [
      "Built interactive features such as markdown-based post systems, hashtag subscriptions, and announcement features.",
      "Integrated CMS-driven dynamic content and geo-based personalization for sales agents.",
      "Migrated and upgraded outdated dependencies to modern React stacks, improving performance.",
      "Implemented Firebase deployments with custom environments."
    ],
    techStack: ["React", "Redux Toolkit", "Styled Components", "TypeScript", "CMS Tool"]
  }
];

export const EDUCATION: EducationItem = {
  university: "APJ Abdul Kalam Technological University",
  degree: "Bachelor of Technology",
  field: "Electronics and Communication Engineering"
};