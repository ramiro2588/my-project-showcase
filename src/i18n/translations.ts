export type Lang = "en" | "es";

export const translations = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "// hello world, I'm",
      name: "Ramiro González Shkurti",
      role: "Full-Stack Developer & NetSuite Technical Consultant",
      tagline:
        "Building efficient, scalable solutions across front-end, back-end and ERP integrations.",
      cta: "View projects",
      ctaContact: "Get in touch",
      location: "Montevideo, Uruguay",
      available: "Available for opportunities",
    },
    about: {
      title: "About me",
      kicker: "/about",
      p1: "I'm a developer with experience in both front-end and back-end, focused on building efficient, scalable, and high-performance solutions.",
      p2: "Passionate about innovation, continuous learning, and collaborating with teams to deliver high-quality results. Currently working as an Oracle NetSuite Technical Consultant after 3 years building MEAN-stack applications at TCS.",
      stats: [
        { value: "3+", label: "Years as developer" },
        { value: "10+", label: "Projects shipped" },
        { value: "2", label: "Languages spoken" },
      ],
    },
    skills: {
      title: "Tech stack",
      kicker: "/skills",
      groups: [
        { name: "Frontend", items: ["Angular", "JavaScript", "HTML/CSS", "UX/UI"] },
        { name: "Backend",  items: ["Node.js", "C# / .NET", "Java", "REST APIs"] },
        { name: "Data",     items: ["SQL", "Databases", "Modeling (MER)"] },
        { name: "ERP / Cloud", items: ["Oracle NetSuite", "SuiteScript", "SuiteFlow"] },
        { name: "DevOps",   items: ["CI/CD", "Docker", "Linux"] },
        { name: "Other",    items: ["Agile / Scrum", "AI integrations"] },
      ],
    },
    experience: {
      title: "Experience",
      kicker: "/experience",
      items: [
        {
          role: "Technical Consultant",
          company: "Oracle NetSuite",
          period: "Mar 2025 — Present",
          desc: "Customization, integration and maintenance of the NetSuite ERP. Develop technical solutions using SuiteScript, SuiteFlow and APIs. Translate business requirements into technical specs, perform scripting and data migration.",
          tags: ["SuiteScript", "SuiteFlow", "APIs", "Data Migration"],
        },
        {
          role: "Software Developer",
          company: "TATA Consultancy Services",
          period: "May 2022 — Mar 2025",
          desc: "Designed, implemented and maintained MEAN Stack applications in agile teams. Optimized processes, ensured quality and scalability, and contributed to continuous improvement through agile methodologies.",
          tags: ["MongoDB", "Express", "Angular", "Node.js", "Scrum"],
        },
        {
          role: "Telephone Operator",
          company: "MO&PC & Capta SAS",
          period: "Dec 2019 — May 2022",
          desc: "Customer service call center: handled incoming calls, resolved inquiries and complaints, provided personalized support ensuring satisfaction through clear communication.",
          tags: ["Customer Service", "Communication"],
        },
      ],
    },
    education: {
      title: "Education",
      items: [
        { school: "Universidad ORT Uruguay", degree: "Analista en Tecnologías de la Información", period: "2021 — 2024" },
        { school: "Instituto BIOS, Montevideo", degree: "Diseño Web UX-UI", period: "2020" },
      ],
    },
    projects: {
      title: "Selected work",
      kicker: "/projects",
      filters: { all: "All", work: "Work", university: "University", freelance: "Freelance" },
      viewCode: "View code",
      viewLive: "Live",
      private: "Private repo",
    },
    contact: {
      title: "Let's build something",
      kicker: "/contact",
      desc: "Open to new opportunities, collaborations and interesting conversations. The fastest way to reach me is via email.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      locationLabel: "Location",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    footer: {
      built: "Built with React, Tailwind & lots of",
      rights: "All rights reserved.",
    },
  },

  es: {
    nav: {
      about: "Sobre mí",
      skills: "Skills",
      experience: "Experiencia",
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      greeting: "// hola mundo, soy",
      name: "Ramiro González Shkurti",
      role: "Desarrollador Full-Stack & Consultor Técnico NetSuite",
      tagline:
        "Construyo soluciones eficientes y escalables en front-end, back-end e integraciones con ERP.",
      cta: "Ver proyectos",
      ctaContact: "Contactarme",
      location: "Montevideo, Uruguay",
      available: "Disponible para oportunidades",
    },
    about: {
      title: "Sobre mí",
      kicker: "/sobre-mi",
      p1: "Soy desarrollador con experiencia en front-end y back-end, enfocado en construir soluciones eficientes, escalables y de alto rendimiento.",
      p2: "Apasionado por la innovación, el aprendizaje continuo y el trabajo en equipo para entregar resultados de calidad. Actualmente me desempeño como Consultor Técnico Oracle NetSuite, después de 3 años construyendo aplicaciones MEAN en TCS.",
      stats: [
        { value: "3+", label: "Años como dev" },
        { value: "10+", label: "Proyectos entregados" },
        { value: "2", label: "Idiomas" },
      ],
    },
    skills: {
      title: "Stack",
      kicker: "/skills",
      groups: [
        { name: "Frontend", items: ["Angular", "JavaScript", "HTML/CSS", "UX/UI"] },
        { name: "Backend",  items: ["Node.js", "C# / .NET", "Java", "APIs REST"] },
        { name: "Datos",    items: ["SQL", "Bases de Datos", "Modelado (MER)"] },
        { name: "ERP / Cloud", items: ["Oracle NetSuite", "SuiteScript", "SuiteFlow"] },
        { name: "DevOps",   items: ["CI/CD", "Docker", "Linux"] },
        { name: "Otros",    items: ["Agile / Scrum", "Integraciones IA"] },
      ],
    },
    experience: {
      title: "Experiencia",
      kicker: "/experiencia",
      items: [
        {
          role: "Consultor Técnico",
          company: "Oracle NetSuite",
          period: "Mar 2025 — Presente",
          desc: "Customización, integración y mantenimiento del ERP NetSuite. Desarrollo soluciones técnicas con SuiteScript, SuiteFlow y APIs. Traduzco requerimientos de negocio en especificaciones técnicas, scripting y migración de datos.",
          tags: ["SuiteScript", "SuiteFlow", "APIs", "Migración de datos"],
        },
        {
          role: "Software Developer",
          company: "TATA Consultancy Services",
          period: "May 2022 — Mar 2025",
          desc: "Diseño, implementación y mantenimiento de aplicaciones MEAN Stack en equipos ágiles. Optimización de procesos, calidad y escalabilidad, contribuyendo a la mejora continua mediante metodologías ágiles.",
          tags: ["MongoDB", "Express", "Angular", "Node.js", "Scrum"],
        },
        {
          role: "Operador Telefónico",
          company: "MO&PC & Capta SAS",
          period: "Dic 2019 — May 2022",
          desc: "Call center de atención al cliente: gestión de llamadas entrantes, resolución de consultas y reclamos, soporte personalizado garantizando satisfacción mediante comunicación clara y eficiente.",
          tags: ["Atención al cliente", "Comunicación"],
        },
      ],
    },
    education: {
      title: "Educación",
      items: [
        { school: "Universidad ORT Uruguay", degree: "Analista en Tecnologías de la Información", period: "2021 — 2024" },
        { school: "Instituto BIOS, Montevideo", degree: "Diseño Web UX-UI", period: "2020" },
      ],
    },
    projects: {
      title: "Proyectos destacados",
      kicker: "/proyectos",
      filters: { all: "Todos", work: "Trabajo", university: "Universidad", freelance: "Freelance" },
      viewCode: "Ver código",
      viewLive: "Live",
      private: "Repo privado",
    },
    contact: {
      title: "Construyamos algo",
      kicker: "/contacto",
      desc: "Abierto a nuevas oportunidades, colaboraciones y conversaciones interesantes. La forma más rápida de contactarme es por email.",
      emailLabel: "Email",
      phoneLabel: "Teléfono",
      locationLabel: "Ubicación",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    footer: {
      built: "Hecho con React, Tailwind y mucho",
      rights: "Todos los derechos reservados.",
    },
  },
} as const;

export type Translation = (typeof translations)["en"];
