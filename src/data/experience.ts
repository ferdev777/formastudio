export interface ExperienceItem {
  id: string;
  company: string;
  location: string;
  role: { es: string; en: string };
  description: { es: string; en: string };
  period: { start: string; end: string | null };
  stack: string[];
  current?: boolean;
  type: "work" | "education";
}

export const experience: ExperienceItem[] = [
  {
    id: "synapxix",
    company: "Synapxix",
    location: "Remoto",
    role: {
      es: "Technical Team Lead",
      en: "Technical Team Lead",
    },
    description: {
      es: "Lideré el desarrollo de una plataforma educativa cognitiva para aprendizaje adaptativo bajo una arquitectura de monorepo Nx. Implementé el backend en NestJS con Prisma y PostgreSQL, integrando un motor de economía (XP, recompensas), perfiles cognitivos (psicometría) y Google Generative AI para personalizar la experiencia educativa. Desarrollé el frontend en Angular con Chart.js para el panel docente y las interfaces de juego.",
      en: "Led the development of a cognitive educational platform for adaptive learning under an Nx monorepo architecture. Implemented the backend in NestJS with Prisma and PostgreSQL, integrating an economy engine (XP, rewards), cognitive profiling, and Google Generative AI to personalize the educational experience. Developed the frontend in Angular utilizing Chart.js for the teacher dashboard and game interfaces.",
    },
    period: { start: "Sep 2025", end: null },
    stack: ["TypeScript", "NestJS", "Angular", "Nx", "Prisma", "PostgreSQL", "Google GenAI", "Chart.js"],
    current: true,
    type: "work",
  },
  {
    id: "nexosdi",
    company: "NexosDI (neops)",
    location: "Remoto",
    role: {
      es: "Fullstack Developer – AI & Automation",
      en: "Fullstack Developer – AI & Automation",
    },
    description: {
      es: "Desarrollo del AI Studio, una plataforma corporativa que centraliza herramientas de IA y automatización. Implementé orquestación de agentes con Langflow y procesos de automatización robustos usando Autopilots y n8n desplegados en la nube. Diseñé la arquitectura de datos integrando PostgreSQL, bases de datos vectoriales (Qdrant) y en grafo (Neo4j) para gestionar la identidad y el contexto de las aplicaciones.",
      en: "Developed AI Studio, a corporate platform centralizing AI and automation tools. Implemented agent orchestration with Langflow and robust automation processes using Autopilots and n8n deployed in the cloud. Designed the data architecture integrating PostgreSQL, vector databases (Qdrant), and graph databases (Neo4j) to manage identity and application context.",
    },
    period: { start: "Sep 2025", end: null },
    stack: ["TypeScript", "Langflow", "n8n", "Qdrant", "Neo4j", "PostgreSQL", "Cloud Run"],
    current: true,
    type: "work",
  },
  {
    id: "nocios",
    company: "Nocios SRL",
    location: "Remoto",
    role: {
      es: "Fullstack Developer",
      en: "Fullstack Developer",
    },
    description: {
      es: "Desarrollé y mantuve aplicaciones fullstack para clientes internos y externos. Optimicé consultas y modelos de base de datos PostgreSQL. Colaboré en la integración de APIs RESTful con frameworks Angular y React.",
      en: "Developed and maintained fullstack applications for internal and external clients. Optimized PostgreSQL database queries and models. Collaborated in integrating RESTful APIs with Angular and React.",
    },
    period: { start: "Abr 2023", end: "Jul 2025" },
    stack: ["Python", "TypeScript", "NestJS", "Angular", "React", "PostgreSQL", "AWS"],
    type: "work",
  },
  {
    id: "uader",
    company: "UADER",
    location: "Concepción del Uruguay, ER",
    role: {
      es: "Licenciatura en Sistemas de Información",
      en: "Information Systems Engineering",
    },
    description: {
      es: "Carrera de grado en curso (2022 - 2027) enfocada en arquitectura de software, bases de datos y sistemas de información.",
      en: "Bachelor's degree in progress (2022 - 2027) focused on software architecture, databases, and information systems.",
    },
    period: { start: "2022", end: "2027" },
    stack: [],
    type: "education",
  },
  {
    id: "cert-claude",
    company: "Anthropic / Claude",
    location: "Online",
    role: {
      es: "Certificaciones de Claude",
      en: "Claude Certifications",
    },
    description: {
      es: "Múltiples certificaciones y capacitaciones sobre el uso de modelos de Anthropic y prompting avanzado.",
      en: "Multiple certifications and training on Anthropic models and advanced prompting techniques.",
    },
    period: { start: "2025", end: "2025" },
    stack: [],
    type: "education",
  },
  {
    id: "cert-english",
    company: "UBA",
    location: "Universidad de Buenos Aires",
    role: {
      es: "Inglés B2",
      en: "B2 English Certification",
    },
    description: {
      es: "Certificación oficial nivel B2 otorgada por la UBA.",
      en: "Official B2 level certification granted by UBA.",
    },
    period: { start: "2024", end: "2024" },
    stack: [],
    type: "education",
  },
  {
    id: "cert-python",
    company: "Udemy & Nicolás Schurmann",
    location: "Online",
    role: {
      es: "Certificaciones Backend & Python",
      en: "Backend & Python Certifications",
    },
    description: {
      es: "Capacitaciones completadas: Python Sin Fronteras (Nicolás Schurmann) y Python, Flask, MySQL, HTML, CSS (Udemy).",
      en: "Completed courses: Python Sin Fronteras (Nicolás Schurmann) and Python, Flask, MySQL, HTML, CSS (Udemy).",
    },
    period: { start: "2023", end: "2023" },
    stack: [],
    type: "education",
  }
];
