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
      es: "Lidero un equipo fullstack en el desarrollo de productos SaaS escalables. Defino la arquitectura técnica, implemento pipelines CI/CD en AWS e integro capacidades de IA mediante RAG y APIs de modelos de lenguaje.",
      en: "Lead a fullstack team developing scalable SaaS products. Define technical architecture, implement CI/CD pipelines on AWS, and integrate AI capabilities via RAG pipelines and LLM APIs into production systems.",
    },
    period: { start: "2023", end: null },
    stack: ["TypeScript", "Python", "FastAPI", "AWS Lambda", "Docker", "PostgreSQL", "Pinecone", "OpenAI"],
    current: true,
    type: "work",
  },
  {
    id: "freelance",
    company: "Freelance",
    location: "Remoto",
    role: {
      es: "Desarrollador Fullstack & IA",
      en: "Fullstack & AI Developer",
    },
    description: {
      es: "Desarrollo de aplicaciones web end-to-end para clientes en distintas industrias. APIs REST y GraphQL, funciones serverless en AWS Lambda, automatización con n8n y sistemas de contenido con IA.",
      en: "End-to-end web application development across multiple industries. REST and GraphQL APIs, serverless functions on AWS Lambda, n8n automation workflows, and AI-powered content systems.",
    },
    period: { start: "2021", end: "2023" },
    stack: ["TypeScript", "Python", "Flask", "Serverless", "MongoDB", "n8n", "AWS"],
    type: "work",
  },
  {
    id: "uader",
    company: "UADER",
    location: "Concepción del Uruguay, ER",
    role: {
      es: "Licenciatura en Sistemas",
      en: "Systems Engineering",
    },
    description: {
      es: "Carrera de ingeniería en sistemas con foco en arquitectura de software, algoritmos y sistemas distribuidos. Graduación estimada 2027.",
      en: "Systems engineering degree focused on software architecture, algorithms, and distributed systems. Expected graduation 2027.",
    },
    period: { start: "2022", end: "2027" },
    stack: [],
    type: "education",
  },
];
