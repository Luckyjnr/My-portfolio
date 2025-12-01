import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  personalInfo: {
    name: "Lucky Noah",
    title: "Backend Software Engineer",
    email: "luckykelimu@gmail.com",
    phone: "+2349033820144",
    location: "Abuja, Nigeria",
    linkedin: "https://www.linkedin.com/in/noahlucky",
    github: "https://github.com/Luckyjnr"
  },
  summary: "Backend developer with proven success at Helium Health, optimizing Node.js APIs and improving database solutions, resulting in a 25% reduction in data processing time. Expertise in AWS and Docker enhances capabilities in API security and team collaboration. Committed to driving digital transformations in healthcare through innovative technology solutions.",
  skills: [
    { category: "Backend Dev", items: ["Node.js", "Express.js", "API Design"], value: 95 },
    { category: "Databases", items: ["MongoDB", "PostgreSQL", "MySQL", "Mongoose"], value: 90 },
    { category: "Cloud & DevOps", items: ["AWS (EC2, S3, IAM)", "Docker", "CI/CD"], value: 80 },
    { category: "Security", items: ["Auth & Authorization", "JWT", "Data Encryption"], value: 85 },
    { category: "Tools", items: ["Git", "GitHub", "Postman", "Jest", "Swagger"], value: 88 },
  ],
  experience: [
    {
      id: "exp-1",
      role: "Backend Engineering Student",
      company: "Vephla University",
      period: "Dec 2024 - Current",
      description: "Advanced backend engineering program focused on enterprise-grade application development.",
      achievements: [
        "Completed real-world backend projects with a focus on API security, AWS deployment, Docker, and CI/CD.",
        "Awarded Top Performing Backend Student (2025)."
      ],
      technologies: ["Node.js", "AWS", "Docker", "CI/CD"]
    },
    {
      id: "exp-2",
      role: "Backend Developer Intern",
      company: "Helium Health",
      period: "Jan 2024 - Jan 2025",
      description: "Contributed to core EMR systems and infrastructure improvements for a leading healthcare technology provider.",
      achievements: [
        "Built and optimized Node.js/Express.js APIs and database solutions (PostgreSQL, MongoDB) for EMR systems, processing 1000+ daily patient records.",
        "Reduced data processing time by 25% through query optimization and backend refactoring.",
        "Developed user feedback APIs, improving platform adoption by 40% and enabling major feature enhancements.",
        "Supported AWS deployment, CI/CD pipelines, and collaborated on digital transformation for multiple healthcare facilities."
      ],
      technologies: ["PostgreSQL", "MongoDB", "Express.js", "AWS"]
    }
  ],
  education: [
    {
      degree: "Backend Engineering Program",
      institution: "Vephla University",
      location: "Nigeria",
      date: "Expected Dec 2025"
    },
    {
      degree: "BEng: Chemical Engineering",
      institution: "Abubakar Tafawa-Balewa University",
      location: "Nigeria",
      date: "October 2024"
    }
  ],
  awards: [
    "Top Performing Backend Student, Vephla University, 2025",
    "Helium Health Internship Completion Award, 2023"
  ],
  projects: [
    {
      id: "proj-1",
      title: "Safe Anchor",
      subtitle: "Victim support and counseling platform",
      technologies: ["Node.js", "Express.js", "MongoDB", "AWS", "Docker", "Jest"],
      points: [
        "Implemented multi-role authentication with JWT for two user roles (victims and experts).",
        "Built and maintained 20+ RESTful API endpoints using Node.js, Express.js, and MongoDB.",
        "Developed full authentication flows (registration, login, password reset, email verification) for 20+ test users.",
        "Designed an expert–victim matching system to automate support connections.",
        "Integrated email notifications for verification and system alerts.",
        "Deployed backend on AWS using Docker, and automated CI/CD with GitHub Actions.",
        "Documented APIs using Swagger, and tested endpoints with Postman, Jest, and Supertest."
      ]
    },
    {
      id: "proj-2",
      title: "EduConnect",
      subtitle: "School management and learning platform",
      technologies: ["Node.js", "Express.js", "MongoDB", "RBAC", "JWT"],
      points: [
        "Architected a modular backend with Node.js, Express.js, and MongoDB.",
        "Developed 20+ API endpoints powering school operations and LMS features.",
        "Implemented a 3-role RBAC system (Admin, Teacher, Parent) using JWT.",
        "Built core modules: student records, attendance tracking, results processing, and parent communication.",
        "Led a cross-functional team from idea to MVP.",
        "Designed APIs for LMS features, analytics dashboards, and payment integration readiness.",
        "Ensured security through validation, encryption, and activity logging."
      ]
    }
  ]
};