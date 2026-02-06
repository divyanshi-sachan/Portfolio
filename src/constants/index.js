export const myProjects = [
  {
    id: 1,
    title: "FlowScrape",
    description:
      "A web scraping and automation platform where you build visual workflows in a drag-and-drop editor—launch browser, navigate, click, extract text, run AI extraction, or send data via webhooks—then run or schedule them with a credit-based billing model.",
    subDescription: [
      "Visual workflow editor with React Flow: add nodes from a task menu, connect inputs and outputs, and configure each step (URLs, selectors, credentials, AI prompts).",
      "Phase-based execution engine: workflows compile into ordered phases; credits are deducted per phase with optional cron scheduling for recurring runs.",
      "Draft vs published workflows, encrypted credential storage, and a dashboard for runs, logs, and credit usage over time.",
      "Built with Next.js 14, React Flow (XYFlow), Puppeteer, Clerk auth, Prisma, and optional Gemini for AI extraction tasks.",
    ],
    href: "https://cerulean-bavarois-fa689f.netlify.app/",
    logo: "",
    image: "/assets/project1.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/logos/vitejs.svg",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 4,
        name: "Prisma",
        path: "/assets/logos/sqlite.svg",
      },
    ],
  },
  {
    id: 2,
    title: "AI PDF Reader",
    description:
      "An intelligent PDF reader application powered by AI for enhanced document processing and analysis.",
    subDescription: [
      "Built an AI-powered PDF reader that can extract, analyze, and summarize document content automatically.",
      "Implemented advanced OCR technology for text extraction from scanned documents and images.",
      "Developed a React-based frontend with Tailwind CSS for an intuitive user experience.",
      "Integrated machine learning models for document classification and content understanding.",
    ],
    href: "",
    demoInProgress: true,
    logo: "",
    image: "/assets/project2.png",
    tags: [
      {
        id: 1,
        name: "AI/ML",
        path: "/assets/logos/auth0.svg",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "Python",
        path: "/assets/logos/sqlite.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Fuzzie",
    description:
      "A workflow automation platform that helps businesses connect Google Drive, Discord, Notion, and Slack in one place—so teams automate repetitive tasks, cut manual work, and focus on what drives growth.",
    subDescription: [
      "Visual drag-and-drop workflow editor (React Flow) so teams build automations without code—e.g. trigger on Drive changes, then notify via Discord, update Notion, or post to Slack.",
      "Multi-service integrations with secure auth (Clerk), subscription tiers (Stripe), and a credit system so businesses scale usage and billing predictably.",
      "Modern dashboard with dark mode, Framer Motion animations, and real-time webhooks so workflows feel responsive and reliable for daily use.",
      "Built with Next.js 14, TypeScript, Prisma, and Radix UI—designed to onboard fast and run reliably for small teams and growing companies.",
    ],
    href: "",
    demoInProgress: true,
    logo: "",
    image: "/assets/project3.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/logos/vitejs.svg",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 4,
        name: "Stripe",
        path: "/assets/logos/stripe.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Content Repurposer",
    description:
      "An AI-powered content repurposing platform that transforms long-form content into multiple formats.",
    subDescription: [
      "Built an intelligent content analysis system that extracts key insights from articles and videos.",
      "Developed automated content generation for social media posts, blog summaries, and email newsletters.",
      "Implemented natural language processing for content optimization and SEO enhancement.",
      "Created a user-friendly dashboard for content creators to manage and schedule repurposed content.",
    ],
    href: "https://content-gilt-mu.vercel.app/",
    logo: "",
    image: "/assets/project4.png",
    tags: [
      {
        id: 1,
        name: "AI/ML",
        path: "/assets/logos/cplusplus.svg",
      },
      {
        id: 2,
        name: "Python",
        path: "/assets/logos/csharp.svg",
      },
      {
        id: 3,
        name: "React",
        path: "/assets/logos/git.svg",
      },
      {
        id: 4,
        name: "Node.js",
        path: "/assets/logos/microsoft.svg",
      },
    ],
  },
  {
    id: 5,
    title: "Mojito Landing Page",
    description:
      "A modern, high-converting landing page for a premium cocktail brand with interactive animations.",
    subDescription: [
      "Designed and developed a stunning landing page with smooth scroll animations and micro-interactions.",
      "Implemented a custom cocktail recipe builder with real-time ingredient calculations.",
      "Created an immersive 3D product showcase using Three.js for enhanced user engagement.",
      "Optimized for mobile-first design with advanced CSS animations and responsive layouts.",
    ],
    href: "https://landing-page-delta-six-60.vercel.app/",
    logo: "",
    image: "/assets/project5.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/wordpress.svg",
      },
      {
        id: 2,
        name: "Three.js",
        path: "/assets/logos/html5.svg",
      },
      {
        id: 3,
        name: "CSS3",
        path: "/assets/logos/css3.svg",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/logos/vitejs.svg",
      },
    ],
  },
  {
    id: 6,
    title: "Matrimonial Website",
    description:
      "A matrimonial website for connecting profiles and families with search, filters, and match recommendations.",
    subDescription: [
      "Built user profiles, search, and filters for preferences and location.",
      "Implemented secure authentication and messaging for genuine connections.",
    ],
    href: "https://prime-group-pi.vercel.app/",
    logo: "",
    image: "/assets/project6.jpeg",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Node.js",
        path: "/assets/logos/microsoft.svg",
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 4,
        name: "MongoDB",
        path: "/assets/logos/github.svg",
      },
    ],
  },
  {
    id: 7,
    title: "Chanelweb",
    description:
      "A luxury, Chanel-inspired marketing site that helps brands tell their story through full-screen video, scroll-driven reveals, and editorial-style sections—so campaigns feel immersive and drive stronger engagement.",
    subDescription: [
      "Scroll-linked storytelling: hero revealed via expanding circular clip, sections pinned and content sliding in from sides so every scroll moment supports the narrative and keeps users engaged.",
      "Full-viewport sections with Lenis smooth scrolling and GSAP ScrollTrigger—video play/pause and scale tied to scroll position for a polished, high-end feel that elevates brand perception.",
      "Built as a static single-page site (HTML, CSS, vanilla JS) with no framework or build step—fast to ship and easy to host, ideal for campaign microsites and luxury brand touchpoints.",
    ],
    href: "https://divyanshi-sachan.github.io/E-Commerce/",
    logo: "",
    image: "/assets/project7.jpeg",
    tags: [
      {
        id: 1,
        name: "HTML5",
        path: "/assets/logos/html5.svg",
      },
      {
        id: 2,
        name: "CSS3",
        path: "/assets/logos/css3.svg",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 4,
        name: "GSAP",
        path: "/assets/logos/git.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/ali-sanati/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ali.sanatidev/reels/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Full Stack Developer Intern",
    job: "Wonder Creative Studio",
    date: "May 2025 – Aug 2025",
    contents: [
      "Built production-ready full-stack apps for real clients, including a Notion-like editor and AI contract management. Owned features end-to-end with scalable APIs and Redux.",
    ],
  },
  {
    title: "Web Developer Intern",
    job: "HTS Tech Solutions",
    date: "Jan 2025 – Apr 2025",
    contents: [
      "Architected production-grade user and admin dashboards with role-based workflows. Designed RESTful APIs and collaborated with senior engineers on stack decisions.",
    ],
  },
];
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];

export const caseStudies = [
  {
    id: "intrusion-detection",
    title: "Machine Learning–Based Intrusion Detection System",
    focus: "Cybersecurity · Real-Time ML · Enterprise Traffic",
    problem:
      "Enterprises need to detect malicious network activity in real time—distinguishing normal vs anomalous behavior and classifying attack types (DoS, brute force, infiltration, botnet)—while keeping false positives low.",
    solution:
      "Designed and implemented an IDS using the CSE-CIC-IDS2018 dataset. Built a pipeline with data preprocessing (feature scaling, imbalance handling, noise reduction), multiple ML models (Logistic Regression, Random Forest, XGBoost, SVM), and evaluation via precision, recall, F1-score, and confusion matrices. Added a real-time detection pipeline and a security dashboard for attack frequency, traffic anomalies, and severity levels.",
    impact:
      "Mimics production-level cybersecurity systems; directly applicable to healthcare and fintech platforms handling sensitive data. Demonstrates end-to-end skills in ML, cybersecurity, and system design.",
    stack: ["Python", "scikit-learn", "XGBoost", "React", "Flask", "Pandas"],
    link: "https://github.com/divyanshi-sachan/Intrusion-Detection-System",
  },
  {
    id: "electricity-consumption",
    title: "Electricity Consumption Analytics & Forecasting",
    focus: "Data Mining · Time-Series · Infrastructure Planning",
    problem:
      "Utilities and governments need to understand demand patterns across regions and sectors, forecast future consumption (5–10 years), and identify peak loads and supply–demand gaps for smart grid and infrastructure decisions.",
    solution:
      "Built a data-driven platform using U.S. EIA electricity data. Applied descriptive analytics (trends, seasonality, regional comparison), time-series forecasting (ARIMA, Prophet, LSTM), and an interactive heatmap dashboard for regional demand, temporal spikes, and sector-wise consumption. Compared models using RMSE and MAE.",
    impact:
      "Solves a real government and utility-level problem; supports smart grid planning, renewable integration, and infrastructure investment. Showcases data mining, ML, forecasting, and visualization.",
    stack: ["Python", "pandas", "scikit-learn", "XGBoost", "Prophet", "Plotly"],
    link: "https://github.com/divyanshi-sachan/Electricity-Consumption",
  },
  {
    id: "truemeds",
    title: "TrueMeds — Counterfeit Medicine Detection",
    focus: "Computer Vision · Transfer Learning · Microservices",
    problem:
      "Pharmaceutical quality control, supply chain verification, and consumer protection require reliable, real-time classification of medicine images as authentic or counterfeit.",
    solution:
      "Built an end-to-end system using transfer learning with ResNet-18 for binary image classification. Deployed a microservices stack: FastAPI ML service for inference, Express.js backend for auth and ML proxying, and a React (Vite) frontend for uploads and results. Added JWT auth, Docker support, and structured logging.",
    impact:
      "Supports pharmaceutical quality control, supply chain verification, and regulatory compliance. Demonstrates full-stack ML deployment with React, Express, FastAPI, and Docker.",
    stack: ["PyTorch", "ResNet-18", "FastAPI", "Express.js", "React", "MongoDB", "Docker"],
    link: "https://github.com/divyanshi-sachan/TrueMeds",
  },
];
