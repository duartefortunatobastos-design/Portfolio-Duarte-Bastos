import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "pt" | "en";

/** Número com indicativo internacional, sem + nem espaços (ex: 351912345678). */
export const WHATSAPP_PHONE = "351939743678";

export const WHATSAPP_MESSAGE =
  "Boas, tudo bem?\nVi o seu portfólio e gostaria de falar consigo.";

export function getWhatsAppHref(phone = WHATSAPP_PHONE, message = WHATSAPP_MESSAGE) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

type Dict = {
  nav: {
    about: string;
    story: string;
    work: string;
    skills: string;
    sports: string;
    connect: string;
    menu: string;
    close: string;
  };
  hero: {
    name: string;
    tagline1: string;
    tagline2: string;
    desc1: string;
    desc2: string;
    ctaProjects: string;
    ctaAbout: string;
    scroll: string;
  };
  about: {
    kicker: string;
    title1: string;
    title2: string;
    lead: string;
    blocks: { title: string; body: string }[];
    closing: string;
    highlightsTitle: string;
    highlights: string[];
    location: { value: string; label: string };
    valuesTitle: string;
    values: string[];
  };
  story: {
    kicker: string;
    title1: string;
    title2: string;
    items: { year: string; title: string; body: string }[];
  };
  projects: {
    kicker: string;
    title1: string;
    title2: string;
    intro: string;
    viewProject: string;
    code: string;
    items: {
      title: string;
      description: string;
      tech: string[];
      liveUrl: string;
      codeUrl: string;
    }[];
  };
  skills: {
    kicker: string;
    title1: string;
    title2: string;
    technicalTitle: string;
    otherTitle: string;
    learningLabel: string;
    languagesLabel: string;
    tech: string[];
    learning: string[];
  };
  sports: {
    kicker: string;
    title1: string;
    title2: string;
    intro: string;
    categories: { sport: string; highlights: string[] }[];
  };
  contact: {
    kicker: string;
    title1: string;
    title2: string;
    intro: string;
    linksLabel: string;
    social: { github: string; instagram: string; whatsapp: string };
  };
  footer: { name: string; rights: string; socialLabel: string };
  toggle: string;
  cookies: {
    title: string;
    descriptionBefore: string;
    descriptionMiddle: string;
    privacyLink: string;
    cookieLink: string;
    close: string;
    accept: string;
  };
  legal: {
    backHome: string;
    privacy: {
      kicker: string;
      title: string;
      subtitle: string;
      meta: {
        domain: { label: string; value: string };
        lastUpdated: { label: string; value: string };
        owner: { label: string; value: string };
      };
      sections: {
        title: string;
        intro?: string;
        bullets?: string[];
        body?: string;
        bodyBeforeEmail?: string;
        bodyAfterEmail?: string;
        cookiePolicyBefore?: string;
        cookiePolicyAfter?: string;
      }[];
      contactEmail: string;
      disclaimer: string;
    };
    cookies: {
      kicker: string;
      title: string;
      subtitle: string;
      meta: {
        domain: { label: string; value: string };
        lastUpdated: { label: string; value: string };
        badge: string;
      };
      sections: {
        title: string;
        intro?: string;
        bullets?: string[];
        body?: string;
        bodyBeforeEmail?: string;
        bodyAfterEmail?: string;
      }[];
      contactEmail: string;
      disclaimer: string;
    };
  };
};

const pt: Dict = {
  nav: {
    about: "Sobre",
    story: "História",
    work: "Projetos",
    skills: "Competências",
    sports: "Desporto",
    connect: "Contactos",
    menu: "Menu",
    close: "Fechar",
  },
  hero: {
    name: "Duarte Bastos",
    tagline1: "Desenvolvedor & Atleta",
    tagline2: "A Disciplina Constrói o Sucesso",
    desc1: "Desenvolvedor em formação, apaixonado por software, redes e cibersegurança.",
    desc2: "Atleta multidesportivo — Taekwondo, futebol e atletismo com foco e resiliência.",
    ctaProjects: "Ver Projetos",
    ctaAbout: "Sobre Mim",
    scroll: "Role",
  },
  about: {
    kicker: "Sobre Mim",
    title1: "Quem",
    title2: "sou eu",
    lead: "Desenvolvedor em formação, com 18 anos, concluí o 12.º ano no Curso Profissional de Técnico de Gestão e Programação de Sistemas Informáticos. Desde cedo, tenho vindo a conciliar o interesse pela tecnologia com uma prática desportiva de elevada exigência competitiva.",
    blocks: [
      {
        title: "Desporto",
        body: "Ao longo de mais de uma década de prática em Taekwondo e futebol, desenvolvi disciplina, foco e resiliência — competências que procuro aplicar de forma consistente também no desenvolvimento de software. Para além disso, participo em algumas provas de atletismo às vezes, para matar o gosto de correr, onde já obtive muito bons resultados.",
      },
      {
        title: "Tecnologia",
        body: "Paralelamente ao desporto, tenho uma grande paixão pela área da tecnologia e da programação. Interesso-me por áreas como programação, redes, cibersegurança e desenvolvimento de software. Ao longo do curso que tirei nos 3 anos de TGPSSI, adquiri conhecimentos em várias linguagens de programação.",
      },
    ],
    closing:
      "Atualmente, procuro evoluir numa área que me motiva, com foco na procura de novos desafios profissionais.",
    highlightsTitle: "Destaques",
    highlights: ["18 anos", "Programador", "Atleta"],
    location: { value: "PT", label: "Baseado em Portugal" },
    valuesTitle: "Valores",
    values: ["Disciplina", "Consistência", "Evolução"],
  },
  story: {
    kicker: "A Minha História",
    title1: "A minha",
    title2: "jornada",
    items: [
      {
        year: "Dos 4 anos aos 9 anos",
        title: "Taekwondo",
        body: "Iniciei no Taekwondo — onde aprendi disciplina e a verdadeira competição, onde obtive os meus primeiros resultados a nível distrital e ibérico. Uma base que moldou a minha mentalidade.",
      },
      {
        year: "Dos 9 anos ao 18 anos",
        title: "Futebol",
        body: "Passei pelo futebol, onde aprendi dedicação, espírito competitivo e trabalho de equipa.",
      },
      {
        year: "TGPSSI",
        title: "Técnico de Gestão e Programação de Sistemas Informáticos",
        body: "Entrei no 10º ano no curso, com o objetivo de aprender uma área que sempre gostei — a área da informática, envolvendo tudo sobre este mundo e a área da programação. Aprendi PHP, JavaScript, Python, HTML, CSS e as bases da informática.",
      },
    ],
  },
  projects: {
    kicker: "Projetos",
    title1: "O que",
    title2: "desenvolvi",
    intro:
      "Projetos reais — da PAP a soluções para clientes — com foco em funcionalidade, design e código limpo.",
    viewProject: "Ver Projeto",
    code: "Código",
    items: [
      {
        title: "Site PAP",
        description:
          "Projeto de Aptidão Profissional do curso TGPSI. Website completo com gestão de conteúdos, base de dados e interface responsiva.",
        tech: ["PHP", "JavaScript", "HTML", "CSS", "MySQL"],
        liveUrl: "#",
        codeUrl: "https://github.com/duartefortunatobastos-design/PAP-LONE-WOLF---DUARTE-BASTOS",
      },
      {
        title: "Portfólio Duarte Bastos",
        description:
          "Portfólio pessoal, com secções de sobre mim, a minha história, projetos, skills e contacto, em PT e EN.",
        tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
        liveUrl: "https://duartefortunatobastos-design.github.io/PORTFOLIO/",
        codeUrl: "https://github.com/duartefortunatobastos-design/PORTFOLIO",
      },
      {
        title: "Projeto para ASAPOL",
        description:
          "Website desenvolvido para Sindicato da Polícia de Segurança Pública, com foco em presença online, usabilidade, painel para os sócios e sistema de candidatura.",
        tech: ["PHP", "JavaScript", "HTML", "CSS", "MySQL"],
        liveUrl: "https://duartefortunatobastos-design.github.io/SITE-ASAPOL--Duarte-Bastos/",
        codeUrl: "https://github.com/duartefortunatobastos-design/SITE-ASAPOL--Duarte-Bastos",
      },
    ],
  },
  skills: {
    kicker: "Competências",
    title1: "Capacidade",
    title2: "técnica",
    technicalTitle: "Técnicas",
    otherTitle: "Outras",
    learningLabel: "Gostaria de aprender:",
    languagesLabel: "Linguagens",
    tech: ["PHP", "JavaScript", "C++", "C#", "Python", "HTML & CSS"],
    learning: ["Redes", "Cibersegurança"],
  },
  sports: {
    kicker: "Desporto & Conquistas",
    title1: "O meu",
    title2: "diferencial",
    intro:
      "Mais do que código — anos de desporto a moldar disciplina, foco e vontade de competir. O que me distingue de outros perfis técnicos.",
    categories: [
      {
        sport: "Taekwondo",
        highlights: [
          "5x campeão distrital",
          "2x vice-campeão ibérico",
          "1º Dan",
        ],
      },
      {
        sport: "Futebol",
        highlights: [
          "Campeão Distrital 2018/2019",
          "Campeão Sesimbra Summer Cup 2018",
          "Campeão Moçarria Cup 2023/2024",
        ],
      },
      {
        sport: "Atletismo",
        highlights: [
          "Campeão do Trofeu de Atletismo do Seixal",
          "+10x - 1º lugar em provas no concelho",
          "+10x - 1º lugar em Corta matos",
        ],
      },
    ],
  },
  contact: {
    kicker: "Contactos",
    title1: "Entra em",
    title2: "contacto",
    intro:
      "Queres falar sobre um projeto, colaboração ou oportunidade? Contacta-me pelas redes ou envia-me uma mensagem no WhatsApp.",
    linksLabel: "Links",
    social: {
      github: "https://github.com/duartefortunatobastos-design",
      instagram: "https://www.instagram.com/13.bastos/",
      whatsapp: getWhatsAppHref(),
    },
  },
  footer: {
    name: "Duarte Bastos",
    rights: "Todos os direitos reservados.",
    socialLabel: "Redes sociais",
  },
  toggle: "EN",
  cookies: {
    title: "Privacidade e cookies",
    descriptionBefore:
      "Sempre que entras ou atualizas o site, mostramos esta informação sobre privacidade e cookies. Consulta a",
    descriptionMiddle: "e a",
    privacyLink: "Política de Privacidade",
    cookieLink: "Política de Cookies",
    close: "Fechar",
    accept: "Aceitar",
  },
  legal: {
    backHome: "Voltar ao portfólio",
    privacy: {
      kicker: "Legal",
      title: "Política de Privacidade",
      subtitle:
        "Como este portfólio trata os dados — com base no que o website realmente utiliza.",
      meta: {
        domain: {
          label: "Website",
          value: "duartefortunatobastos-design.github.io/PORTFOLIO",
        },
        lastUpdated: { label: "Última atualização", value: "15 de julho de 2026" },
        owner: { label: "Proprietário", value: "Duarte Bastos" },
      },
      contactEmail: "duartefortunatobastos@gmail.com",
      sections: [
        {
          title: "1. Quem somos",
          bodyBeforeEmail:
            "Este portfólio é operado por Duarte Bastos (DB13 Website Desenvoloper / DB13 Server Solutions). É um website estático de apresentação pessoal, em português e inglês. Pode contactar-nos através do e-mail ",
          bodyAfterEmail: ".",
        },
        {
          title: "2. Dados que o website trata diretamente",
          body: "O código deste website não recolhe formulários, não utiliza ferramentas de analytics, não cria perfis de visitantes e não guarda cookies nem armazenamento local no seu navegador. A escolha de idioma (PT/EN) existe apenas durante a sessão de navegação e não é guardada automaticamente quando fecha o separador.",
        },
        {
          title: "3. Alojamento e registos técnicos",
          body: "O website é publicado através do GitHub Pages. Como qualquer serviço de alojamento, o GitHub pode processar dados técnicos padrão (por exemplo, endereço IP, pedido da página, data/hora e informação do navegador) nos seus próprios registos de infraestrutura. Não temos acesso a um painel de analytics nem enviamos notificações de visitas a partir deste portfólio.",
        },
        {
          title: "4. Contacto e redes sociais",
          body: "O website não inclui formulários de contacto. Se nos contactar por e-mail, WhatsApp, Instagram ou GitHub — através dos links disponíveis na secção de contactos — tratamos apenas as informações que nos enviar voluntariamente (por exemplo, nome, mensagem ou detalhes de um projeto).",
        },
        {
          title: "5. Cookies e armazenamento local",
          cookiePolicyBefore:
            "Este website não define cookies HTTP próprios nem utiliza armazenamento local. Mostramos um aviso informativo com links para esta página e para a ",
          cookiePolicyAfter:
            " sempre que abre ou atualiza o site.",
        },
        {
          title: "6. Ligações para sites externos",
          body: "O portfólio contém links para GitHub, Instagram, WhatsApp e projetos externos. Ao clicar nesses links, passa para plataformas de terceiros com políticas de privacidade próprias, sobre as quais não controlamos o tratamento de dados.",
        },
        {
          title: "7. Os seus direitos",
          bodyBeforeEmail:
            "Ao abrigo da legislação aplicável de proteção de dados, pode solicitar o acesso, retificação, eliminação ou limitação do tratamento dos seus dados pessoais. Para efetuar um pedido, contacte-nos através do e-mail ",
          bodyAfterEmail: ".",
        },
        {
          title: "8. Alterações a esta política",
          body: "Esta política pode ser atualizada quando o website ou os serviços forem alterados. A versão mais recente estará sempre disponível nesta página.",
        },
      ],
      disclaimer:
        "Nota: Este texto descreve o funcionamento atual deste portfólio. Para validação jurídica formal, consulte um profissional de direito qualificado.",
    },
    cookies: {
      kicker: "Legal",
      title: "Política de Cookies",
      subtitle:
        "Informação sobre cookies e armazenamento local utilizados neste portfólio.",
      meta: {
        domain: {
          label: "Website",
          value: "duartefortunatobastos-design.github.io/PORTFOLIO",
        },
        lastUpdated: { label: "Última atualização", value: "15 de julho de 2026" },
        badge: "Sem rastreio",
      },
      contactEmail: "duartefortunatobastos@gmail.com",
      sections: [
        {
          title: "1. O que são cookies?",
          body: "Os cookies e o armazenamento local (local storage) são pequenos fragmentos de informação guardados no seu navegador. Podem ser utilizados para memorizar preferências ou garantir o funcionamento básico de um website.",
        },
        {
          title: "2. O que este website utiliza",
          body: "Este website não define cookies HTTP próprios nem guarda informação no armazenamento local do navegador. Mostramos um aviso informativo com links para a Política de Privacidade e para esta página sempre que o site é aberto ou atualizado. Os botões «Aceitar» e «Fechar» apenas ocultam o aviso durante essa visita.",
        },
        {
          title: "3. O que este website não utiliza",
          body: "Não utilizamos cookies ou ferramentas de analytics, marketing, publicidade, mapas de calor, identificadores de visitante/sessão criados por nós, nem notificações de visitas via Discord ou outros webhooks.",
        },
        {
          title: "4. Alojamento",
          body: "O website é servido pelo GitHub Pages. O fornecedor de alojamento pode manter registos técnicos padrão de infraestrutura (por exemplo, IP, página pedida e data/hora), independentemente das escolhas feitas neste portfólio.",
        },
        {
          title: "5. Como controlar o armazenamento",
          body: "Como este portfólio não utiliza cookies próprios nem armazenamento local, não há preferências guardadas no navegador para apagar. Se no futuro forem adicionadas ferramentas que utilizem cookies, esta política será atualizada.",
        },
        {
          title: "6. Contacto",
          bodyBeforeEmail:
            "Se tiver alguma dúvida sobre cookies ou privacidade, contacte-nos através do e-mail ",
          bodyAfterEmail: ".",
        },
      ],
      disclaimer:
        "Nota: Este aviso reflete o funcionamento atual deste portfólio. Para total conformidade legal, reveja-o com um profissional de direito qualificado.",
    },
  },
};

const en: Dict = {
  nav: {
    about: "About",
    story: "Story",
    work: "Work",
    skills: "Skills",
    sports: "Sports",
    connect: "Connect",
    menu: "Menu",
    close: "Close",
  },
  hero: {
    name: "Duarte Bastos",
    tagline1: "Developer & Athlete",
    tagline2: "Discipline Builds Success",
    desc1: "Developer in training with a passion for software, networking, and cybersecurity.",
    desc2: "Multi-sport athlete — taekwondo, football, and athletics with focus and resilience.",
    ctaProjects: "View Projects",
    ctaAbout: "About Me",
    scroll: "Scroll",
  },
  about: {
    kicker: "About Me",
    title1: "Who",
    title2: "I am",
    lead: "I am a developer in training, aged 18, and I have completed the 12th grade in the Professional Course in IT Systems Management and Programming. From an early age, I have sought to combine an interest in technology with a demanding competitive sports background.",
    blocks: [
      {
        title: "Sport",
        body: "Over more than a decade of practice in taekwondo and football, I have developed discipline, focus, and resilience — competencies I aim to apply consistently in software development as well. I also take part in athletics events from time to time, to satisfy my urge to run, and have already achieved strong results.",
      },
      {
        title: "Technology",
        body: "Alongside sport, I have a strong passion for technology and programming. I am interested in areas such as programming, networking, cybersecurity, and software development. Over the three-year TGPSSI course I completed, I gained knowledge in several programming languages.",
      },
    ],
    closing:
      "At present, I seek to grow in a field that motivates me, with a focus on new professional challenges.",
    highlightsTitle: "Highlights",
    highlights: ["18 years old", "Developer", "Athlete"],
    location: { value: "PT", label: "Based in Portugal" },
    valuesTitle: "Values",
    values: ["Discipline", "Consistency", "Growth"],
  },
  story: {
    kicker: "My Story",
    title1: "My",
    title2: "journey",
    items: [
      {
        year: "From age 4 to 9",
        title: "Taekwondo",
        body: "I began Taekwondo — where I learned discipline and true competition, and earned my first district and Iberian results. A foundation that shaped my mindset.",
      },
      {
        year: "From age 9 to 18",
        title: "Football",
        body: "I went through football, where I learned dedication, a competitive spirit, and teamwork.",
      },
      {
        year: "TGPSSI",
        title: "Professional Course in IT Systems Management and Programming",
        body: "I entered the course in 10th grade with the goal of learning a field I've always loved — IT, covering everything about this world and programming. I learned PHP, JavaScript, Python, HTML, CSS, and the fundamentals of computing.",
      },
    ],
  },
  projects: {
    kicker: "Projects",
    title1: "What I've",
    title2: "built",
    intro:
      "Real projects — from my PAP to client work — focused on functionality, design, and clean code.",
    viewProject: "View Project",
    code: "Code",
    items: [
      {
        title: "PAP Website",
        description:
          "Professional Aptitude Project for my TGPSI course. Full website with content management, database, and responsive UI.",
        tech: ["PHP", "JavaScript", "HTML", "CSS", "MySQL"],
        liveUrl: "#",
        codeUrl: "https://github.com/duartefortunatobastos-design/PAP-LONE-WOLF---DUARTE-BASTOS",
      },
      {
        title: "Duarte Bastos Portfolio",
        description:
          "Personal portfolio with about me, my story, projects, skills, and contact sections, in PT and EN.",
        tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
        liveUrl: "https://duartefortunatobastos-design.github.io/PORTFOLIO/",
        codeUrl: "https://github.com/duartefortunatobastos-design/PORTFOLIO",
      },
      {
        title: "ASAPOL Project",
        description:
          "Website built for the Public Security Police union, focused on online presence, usability, a member area, and an application system.",
        tech: ["PHP", "JavaScript", "HTML", "CSS", "MySQL"],
        liveUrl: "https://duartefortunatobastos-design.github.io/SITE-ASAPOL--Duarte-Bastos/",
        codeUrl: "https://github.com/duartefortunatobastos-design/SITE-ASAPOL--Duarte-Bastos",
      },
    ],
  },
  skills: {
    kicker: "Skills",
    title1: "Technical",
    title2: "ability",
    technicalTitle: "Technical",
    otherTitle: "Other",
    learningLabel: "I'd like to learn:",
    languagesLabel: "Languages",
    tech: ["PHP", "JavaScript", "C++", "C#", "Python", "HTML & CSS"],
    learning: ["Networking", "Cybersecurity"],
  },
  sports: {
    kicker: "Sports & Achievements",
    title1: "My",
    title2: "edge",
    intro:
      "More than code — years of sport shaping discipline, focus, and a drive to compete. What sets me apart from other technical profiles.",
    categories: [
      {
        sport: "Taekwondo",
        highlights: [
          "5x district champion",
          "2x Iberian vice-champion",
          "1st Dan",
        ],
      },
      {
        sport: "Football",
        highlights: [
          "District Champion 2018/2019",
          "Sesimbra Summer Cup Champion 2018",
          "Moçarria Cup Champion 2023/2024",
        ],
      },
      {
        sport: "Athletics",
        highlights: [
          "Seixal Athletics Trophy Champion",
          "+10x - 1st-place finishes in municipal events",
          "+10x - 1st-place finishes in Corta Matos",
        ],
      },
    ],
  },
  contact: {
    kicker: "Contact",
    title1: "Get in",
    title2: "touch",
    intro:
      "Want to talk about a project, collaboration, or opportunity? Reach me on social media or send me a WhatsApp message.",
    linksLabel: "Links",
    social: {
      github: "https://github.com/duartefortunatobastos-design",
      instagram: "https://www.instagram.com/13.bastos/",
      whatsapp: getWhatsAppHref(),
    },
  },
  footer: {
    name: "Duarte Bastos",
    rights: "All rights reserved.",
    socialLabel: "Social media",
  },
  toggle: "PT",
  cookies: {
    title: "Privacy & cookies",
    descriptionBefore:
      "Whenever you open or refresh the site, we show this privacy and cookies notice. Read the",
    descriptionMiddle: "and",
    privacyLink: "Privacy Policy",
    cookieLink: "Cookie Policy",
    close: "Close",
    accept: "Accept",
  },
  legal: {
    backHome: "Back to portfolio",
    privacy: {
      kicker: "Legal",
      title: "Privacy Policy",
      subtitle: "How this portfolio handles data — based on what the website actually uses.",
      meta: {
        domain: {
          label: "Website",
          value: "duartefortunatobastos-design.github.io/PORTFOLIO",
        },
        lastUpdated: { label: "Last updated", value: "15 July 2026" },
        owner: { label: "Owner", value: "Duarte Bastos" },
      },
      contactEmail: "duartefortunatobastos@gmail.com",
      sections: [
        {
          title: "1. Who we are",
          bodyBeforeEmail:
            "This portfolio is operated by Duarte Bastos (DB13 Website Developer / DB13 Server Solutions). It is a static personal showcase website in Portuguese and English. You can contact us at ",
          bodyAfterEmail: ".",
        },
        {
          title: "2. Data this website handles directly",
          body: "This website's code does not collect forms, does not use analytics tools, does not build visitor profiles, and does not store cookies or local storage in your browser. The language choice (PT/EN) exists only during your browsing session and is not saved automatically when you close the tab.",
        },
        {
          title: "3. Hosting and technical logs",
          body: "The website is published through GitHub Pages. Like any hosting service, GitHub may process standard technical data (for example, IP address, page request, date/time, and browser information) in its own infrastructure logs. We do not have access to an analytics dashboard and this portfolio does not send visit notifications.",
        },
        {
          title: "4. Contact and social media",
          body: "The website does not include contact forms. If you contact us by email, WhatsApp, Instagram, or GitHub — through the links in the contact section — we only process the information you voluntarily send (for example, your name, message, or project details).",
        },
        {
          title: "5. Cookies and local storage",
          cookiePolicyBefore:
            "This website does not set its own HTTP cookies or use local storage. We show an informational notice with links to this page and our ",
          cookiePolicyAfter: " whenever you open or refresh the site.",
        },
        {
          title: "6. External links",
          body: "The portfolio contains links to GitHub, Instagram, WhatsApp, and external projects. When you click those links, you move to third-party platforms with their own privacy policies, which we do not control.",
        },
        {
          title: "7. Your rights",
          bodyBeforeEmail:
            "Under applicable data protection law, you may request access, rectification, erasure, or restriction of processing of your personal data. To make a request, contact us at ",
          bodyAfterEmail: ".",
        },
        {
          title: "8. Changes to this policy",
          body: "This policy may be updated when the website or services change. The latest version will always be available on this page.",
        },
      ],
      disclaimer:
        "Note: This text describes how this portfolio currently works. For formal legal validation, consult a qualified legal professional.",
    },
    cookies: {
      kicker: "Legal",
      title: "Cookie Policy",
      subtitle: "Information about cookies and local storage used on this portfolio.",
      meta: {
        domain: {
          label: "Website",
          value: "duartefortunatobastos-design.github.io/PORTFOLIO",
        },
        lastUpdated: { label: "Last updated", value: "15 July 2026" },
        badge: "No tracking",
      },
      contactEmail: "duartefortunatobastos@gmail.com",
      sections: [
        {
          title: "1. What are cookies?",
          body: "Cookies and local storage are small pieces of information stored in your browser. They can be used to remember preferences or support basic website functionality.",
        },
        {
          title: "2. What this website uses",
          body: "This website does not set its own HTTP cookies or store information in your browser's local storage. We show an informational notice with links to the Privacy Policy and this page whenever the site is opened or refreshed. The Accept and Close buttons only hide the notice for that visit.",
        },
        {
          title: "3. What this website does not use",
          body: "We do not use analytics, marketing, or advertising cookies/tools, heatmaps, visitor/session identifiers created by us, or visit notifications via Discord or other webhooks.",
        },
        {
          title: "4. Hosting",
          body: "The website is served by GitHub Pages. The hosting provider may keep standard infrastructure technical logs (for example, IP, requested page, and date/time), regardless of the choices made in this portfolio.",
        },
        {
          title: "5. How to control storage",
          body: "Because this portfolio does not use its own cookies or local storage, there are no saved browser preferences to delete. If cookie-based tools are added in the future, this policy will be updated.",
        },
        {
          title: "6. Contact",
          bodyBeforeEmail:
            "If you have any questions about cookies or privacy, contact us at ",
          bodyAfterEmail: ".",
        },
      ],
      disclaimer:
        "Note: This notice reflects how this portfolio currently works. For full legal compliance, review it with a qualified legal professional.",
    },
  },
};

const DICTS: Record<Lang, Dict> = { pt, en };

type Ctx = { lang: Lang; t: Dict; toggle: () => void };
const LangContext = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("pt");
  const value: Ctx = {
    lang,
    t: DICTS[lang],
    toggle: () => setLang((l) => (l === "pt" ? "en" : "pt")),
  };
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
