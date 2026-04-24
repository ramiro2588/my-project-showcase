export type ProjectCategory = "university" | "freelance";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  year: string;
  descriptionEn: string;
  descriptionEs: string;
  stack: string[];
  repo?: string;
  live?: string;
  isPrivate?: boolean;
  highlight?: boolean;
}

export const projects: Project[] = [
  {
    id: "tacua",
    title: "Tacua — Landing Page",
    category: "freelance",
    year: "2025",
    descriptionEn:
      "One-day landing page built for a friend's project. Simple, fast and focused on a clear call to action.",
    descriptionEs:
      "Landing page hecha en un día para el proyecto de un amigo. Simple, rápida y enfocada en un call-to-action claro.",
    stack: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/ramiro2588/tacua-project",
  },

  {
    id: "devops",
    title: "DevOps — Microservices Pipeline",
    category: "university",
    year: "2023",
    descriptionEn:
      "DevOps coursework: infrastructure as code (HCL/Terraform) provisioning a microservices architecture with shipping, products, payments, orders and a webapp front-end.",
    descriptionEs:
      "Trabajo de DevOps: infraestructura como código (HCL/Terraform) que provisiona una arquitectura de microservicios con shipping, products, payments, orders y un webapp front-end.",
    stack: ["HCL", "Terraform", "Docker", "Microservices", "CI/CD"],
    repo: "https://github.com/ramiro2588/DevOps"
  },
  {
    id: "shipping-service",
    title: "Shipping Service",
    category: "university",
    year: "2023",
    descriptionEn: "Java microservice handling shipping logistics, part of the DevOps microservices architecture.",
    descriptionEs: "Microservicio Java de gestión de envíos, parte de la arquitectura de microservicios del proyecto DevOps.",
    stack: ["Java", "Spring", "REST"],
    repo: "https://github.com/ramiro2588/shipping-service-example",
  },
  {
    id: "products-service",
    title: "Products Service",
    category: "university",
    year: "2023",
    descriptionEn: "Java microservice exposing the product catalog API.",
    descriptionEs: "Microservicio Java que expone la API del catálogo de productos.",
    stack: ["Java", "Spring", "REST"],
    repo: "https://github.com/ramiro2588/products-service-example",
  },
  {
    id: "payments-service",
    title: "Payments Service",
    category: "university",
    year: "2023",
    descriptionEn: "Java microservice for payment processing.",
    descriptionEs: "Microservicio Java para procesamiento de pagos.",
    stack: ["Java", "Spring", "REST"],
    repo: "https://github.com/ramiro2588/payments-service-example",
  },
  {
    id: "orders-service",
    title: "Orders Service",
    category: "university",
    year: "2023",
    descriptionEn: "Java microservice managing customer orders end-to-end.",
    descriptionEs: "Microservicio Java que gestiona órdenes de clientes de extremo a extremo.",
    stack: ["Java", "Spring", "REST"],
    repo: "https://github.com/ramiro2588/orders-service-example",
  },
  {
    id: "webapp",
    title: "WebApp Front-end",
    category: "university",
    year: "2023",
    descriptionEn: "EJS-based web client that consumes the microservices and surfaces the e-commerce experience.",
    descriptionEs: "Cliente web basado en EJS que consume los microservicios y presenta la experiencia de e-commerce.",
    stack: ["EJS", "Node.js", "Express"],
    repo: "https://github.com/ramiro2588/webapp",
  },

  {
    id: "obl-ayed1",
    title: "Algorithms & Data Structures I",
    category: "university",
    year: "2022",
    descriptionEn:
      "Java implementation of fundamental data structures and algorithms (lists, trees, sorting). Coursework for AyED 1 at ORT.",
    descriptionEs:
      "Implementación en Java de estructuras de datos y algoritmos fundamentales (listas, árboles, ordenamiento). Obligatorio de AyED 1 en ORT.",
    stack: ["Java", "Data Structures", "Algorithms"],
    repo: "https://drive.google.com/drive/folders/1fZaGn6lBoaT7c0wVFmAX0OT4LfVCw5m7?usp=drive_link"
  },
  {
    id: "obl-ayed2",
    title: "Expedición — Educational Game Server",
    category: "university",
    year: "2022",
    descriptionEn:
      "Server for an online educational game for children. Players explore the world while a server tracks players, world state and game rules. Built with custom data structures designed for high-traffic scenarios.",
    descriptionEs:
      "Servidor de un juego online educativo para niños. Los jugadores exploran el mundo mientras el servidor mantiene el registro de jugadores, estado del mundo y reglas del juego. Construido con estructuras de datos pensadas para alto tráfico.",
    stack: ["Java", "Custom Data Structures", "Server Architecture"],
    repo: "https://drive.google.com/drive/folders/1GOHsfOL9p4XGGVISWAUfDHJkoGIIELMb?usp=sharing"
  },
  {
    id: "obl-bd2",
    title: "Database Design — BD2",
    category: "university",
    year: "2022",
    descriptionEn:
      "Full database project: ER model, table & index design, complex queries, stored procedures, functions and triggers.",
    descriptionEs:
      "Proyecto completo de base de datos: modelo entidad-relación, diseño de tablas e índices, consultas complejas, procedures, funciones y disparadores.",
    stack: ["SQL", "MER", "Stored Procedures", "Triggers"],
    repo: "https://drive.google.com/drive/folders/1w6XiCG4UrqTl9tBuaAEOn5qgcZy4cFv5?usp=sharing",
  },
  {
    id: "obl-dyda",
    title: "Application Design — DyDA",
    category: "university",
    year: "2022",
    descriptionEn:
      "Java desktop application with Swing GUI applying design patterns and OOP best practices. Coursework for Diseño y Desarrollo de Aplicaciones.",
    descriptionEs:
      "Aplicación de escritorio en Java con GUI Swing aplicando patrones de diseño y buenas prácticas de POO. Obligatorio de Diseño y Desarrollo de Aplicaciones.",
    stack: ["Java", "Swing", "Design Patterns", "OOP"],
    repo: "https://drive.google.com/drive/folders/1TjU9ayp4KCVfyEHN-4ZaE-Sm28IJlf8m?usp=sharing",
  },
  {
    id: "obl-p3",
    title: "P3 — Layered C# Application",
    category: "university",
    year: "2022",
    descriptionEn:
      "Full layered C# .NET application with API, DataAccess, Domain and MVC layers. Backed by SQL Server.",
    descriptionEs:
      "Aplicación C# .NET completa con arquitectura en capas: API, DataAccess, Domain y MVC. Persistencia en SQL Server.",
    stack: ["C#", ".NET", "MVC", "SQL Server", "Web API"],
    repo: "https://drive.google.com/drive/folders/1ayGwsn6X81kqrWQBATpfQKuBE_k_wyl_?usp=sharing"
  },
];
