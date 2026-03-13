export const personalInfo = {
  name: "HARI MANOJ",
  title: "Software Development Engineer - 1",
  tagline: "Full Stack Engineer specializing in scalable web applications with production-grade frontend architecture",
  email: "chemmangathari@gmail.com",
  phone: "+91 9539299899",
  github: "https://github.com/Chemmangat",
  linkedin: "https://www.linkedin.com/in/chemmangat-hari/",
};

export const metrics = [
  { value: 8, label: "Projects", sublabel: "Delivered", icon: "ProjectOutlined" },
  { value: 5, label: "B2B Solutions", sublabel: "Deployed", icon: "ShopOutlined" },
  { value: 6, label: "Weeks", sublabel: "Fastest Build", icon: "ThunderboltOutlined" },
  { value: 2, label: "Global Awards", sublabel: "Team Player", icon: "TrophyOutlined" },
  { value: 8, label: "Months to", sublabel: "Promotion", icon: "RocketOutlined" },
  { value: 1, label: "Cross-Functional", sublabel: "Team Leader", icon: "TeamOutlined" },
];

export const skills = {
  frontend: [
    { name: "Next.js", level: 95, projects: 8 },
    { name: "React", level: 95, projects: 10 },
    { name: "Redux", level: 85, projects: 6 },
    { name: "Tailwind CSS", level: 92, projects: 8 },
    { name: "TypeScript", level: 88, projects: 9 },
  ],
  cloud: [
    { name: "Azure DevOps", level: 80, projects: 5 },
    { name: "CI/CD", level: 80, projects: 6 },
    { name: "Azure Maps", level: 70, projects: 3 },
  ],
  backend: [
    { name: "Node.js", level: 65, projects: 4, note: "Working Knowledge" },
    { name: "Python", level: 60, projects: 3, note: "Working Knowledge" },
    { name: "REST APIs", level: 75, projects: 6, note: "Proficient" },
    { name: "Express.js", level: 60, projects: 3, note: "Working Knowledge" },
  ],
  testing: [
    { name: "JEST", level: 65, projects: 5 },
    { name: "Unit Testing", level: 80, projects: 7 },
  ],
  leadership: [
    "Agile/Scrum Leadership",
    "Mentoring & Code Review",
    "Stakeholder Management",
    "UI/UX Design Thinking",
  ],
};

export const projects = [
  {
    id: 1,
    title: "Enterprise AI Chat Interface",
    icon: "RobotOutlined",
    description: "Conversational AI platform with real-time document processing, WebSocket-based messaging, and advanced analytics dashboard for enterprise deployment",
    techStack: ["React 18", "Tailwind CSS", "Chart.js", "PDF.js", "Node.js", "Express", "WebSocket"],
    features: [
      "Real-time bidirectional communication using WebSocket protocol",
      "Document parsing and visualization engine with PDF.js",
      "Interactive feedback system with sentiment analysis",
      "Dynamic chart generation and data visualization",
    ],
    impact: [
      "6-week delivery timeline",
      "Full frontend architecture ownership",
      "Production deployment with monitoring",
    ],
    timeline: "6 weeks",
    role: "Frontend Lead",
  },
  {
    id: 2,
    title: "Payment-Enabled Admin Dashboard",
    icon: "CreditCardOutlined",
    description: "B2C platform with comprehensive user management, Stripe payment integration, and real-time analytics for administrative operations",
    techStack: ["Next.js 14", "Tailwind CSS", "Recharts", "Stripe API", "Node.js", "PostgreSQL", "Redis"],
    features: [
      "Role-based access control with user management system",
      "PCI-compliant payment gateway integration",
      "Real-time analytics dashboard with custom reporting",
      "Progressive Web App with offline capabilities",
    ],
    impact: [
      "Complete frontend implementation",
      "Horizontally scalable architecture",
      "Production-grade security standards",
    ],
    timeline: "8 weeks",
    role: "Full Frontend Ownership",
  },
  {
    id: 3,
    title: "Azure-Integrated Enterprise Tool",
    icon: "EnvironmentOutlined",
    description: "Geospatial data visualization platform leveraging Azure Maps SDK with performance-optimized architecture and cloud-native deployment",
    techStack: ["Next.js 14", "Azure Maps SDK", "Redux Toolkit", "TypeScript", "Azure DevOps", "Azure Functions"],
    features: [
      "Interactive mapping with Azure Maps SDK integration",
      "Code splitting and lazy loading for optimal performance",
      "Cost-optimized Azure cloud service integration",
      "Real-time data synchronization with WebSocket",
    ],
    impact: [
      "Performance and cost optimization",
      "Enterprise-scale deployment",
      "Cloud-native architecture",
    ],
    timeline: "10 weeks",
    role: "Core Contributor & Optimizer",
  },
  {
    id: 4,
    title: "Multi-Client B2B Platforms",
    icon: "BarChartOutlined",
    description: "Suite of 5+ enterprise business solutions featuring complex data visualization, multi-tenant architecture, and advanced reporting capabilities",
    techStack: ["Next.js 14", "Material-UI", "Redux Toolkit", "TypeScript", "Python FastAPI", "MongoDB"],
    features: [
      "Advanced data visualization with D3.js integration",
      "Reusable component library with design system",
      "Multi-tenant architecture with data isolation",
      "Automated reporting with multiple export formats",
    ],
    impact: [
      "5+ platforms in production",
      "Microservices architecture",
      "Enterprise client deployments",
    ],
    timeline: "Ongoing",
    role: "Lead Developer",
  },
  {
    id: 5,
    title: "Backend Integration Projects",
    icon: "ApiOutlined",
    description: "RESTful API development and third-party service integrations using Node.js and Python with microservices architecture on Azure",
    techStack: ["Node.js", "Python", "Express.js", "FastAPI", "REST APIs", "MongoDB", "Azure"],
    features: [
      "RESTful API design and implementation",
      "Third-party service integration (Stripe, SendGrid, Azure Storage)",
      "Data processing pipelines with MongoDB",
      "Microservices deployment on Azure infrastructure",
    ],
    impact: [
      "Full-stack development capability",
      "Production API integrations",
      "Backend service ownership",
    ],
    timeline: "Various",
    role: "Full Stack Developer",
  },
];

export const timeline = [
  {
    date: "Jul 2023",
    title: "Software Engineer",
    description: "Joined Terawe Technologies as Software Engineer",
    skills: ["React", "Next.js", "Tailwind CSS"],
    impact: "Began contributing to enterprise-level web applications",
  },
  {
    date: "Mar 2024",
    title: "Promoted to SDE-1",
    description: "Advanced to Software Development Engineer 1 within 8 months",
    skills: ["Leadership", "Mentoring", "Architecture", "Code Review"],
    impact: "Recognized for technical excellence and consistent delivery",
  },
  {
    date: "Dec 2024",
    title: "Global Team Player Award",
    description: "Received first global recognition for cross-functional collaboration",
    skills: ["Cross-functional Collaboration", "Team Leadership", "Communication"],
    impact: "Company-wide recognition for outstanding team contribution",
  },
  {
    date: "Dec 2025",
    title: "Second Global Award",
    description: "Earned consecutive global team player recognition",
    skills: ["Advanced Leadership", "Stakeholder Management", "Agile/Scrum"],
    impact: "Sustained excellence in collaborative project delivery",
  },
  {
    date: "Present",
    title: "Technical Lead & Mentor",
    description: "Leading cross-functional teams and mentoring junior developers",
    skills: ["Team Leadership", "Code Review", "Technical Mentoring", "Project Management"],
    impact: "8+ projects delivered, multiple teams led, 2x award recipient",
  },
];

export const valuePropositions = [
  {
    icon: "🎯",
    title: "Production-Focused Delivery",
    description: "Delivered production-ready AI interface in 6 weeks with full test coverage and documentation.",
  },
  {
    icon: "🤝",
    title: "Cross-Functional Leadership",
    description: "2x Global Team Player Award recipient. Proven track record in stakeholder management and team collaboration.",
  },
  {
    icon: "⚡",
    title: "Performance Engineering",
    description: "Architected and optimized Azure-integrated solutions for cost efficiency and sub-second load times.",
  },
  {
    icon: "🏗️",
    title: "Enterprise Architecture",
    description: "Designed and deployed B2B/B2C platforms serving production traffic with 99.9% uptime.",
  },
  {
    icon: "📚",
    title: "Continuous Growth",
    description: "Microsoft Azure certified. Promoted to SDE-1 in 8 months based on technical excellence and delivery.",
  },
];

export const certifications = [
  {
    name: "Microsoft Certified: Azure Data Engineer Associate",
    code: "DP-203",
    issuer: "Microsoft",
    date: "2024",
  },
];

export const education = {
  degree: "Bachelor of Technology",
  field: "Computer Science",
  institution: "Your University",
  year: "2023",
};
