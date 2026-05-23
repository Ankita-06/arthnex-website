// ─── NAVIGATION ───────────────────────────────────────────────
export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'What We Build', href: '#categories' },
  { label: 'Work', href: '#work' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Stack', href: '#stack' },
  { label: 'Team', href: '#team' },
];

// ─── MARQUEE ──────────────────────────────────────────────────
export const marqueeItems = [
  'React.js', 'Next.js', 'React Native', 'Flutter', 'TypeScript',
  'Node.js', 'Firebase', 'Supabase', 'Figma', 'Chrome Extensions',
  'SaaS Products', 'Mobile Apps', 'Web Apps', 'AI Tools', 'Chrome Extensions',
];

// ─── HERO STATS ───────────────────────────────────────────────
export const heroStats = [
  { value: '3', count: 3, label: 'Products in Development' },
  { value: '2', count: 2, label: 'Founders & Engineers' },
  { value: '∞', count: null, label: 'Problems Worth Solving' },
  { value: 'v1', count: null, label: 'This is just the beginning' },
];

// ─── ABOUT BELIEFS ────────────────────────────────────────────
export const beliefs = [
  {
    icon: '⚡',
    title: 'Speed without shortcuts',
    desc: "We ship fast. But we never ship things that'll slow us down later. Architecture is a first-class concern from day one.",
  },
  {
    icon: '🎯',
    title: 'Problems before solutions',
    desc: "Every product we build starts with a real problem. We don't build features — we solve pains that people actually feel.",
  },
  {
    icon: '🔭',
    title: 'Long-term thinking',
    desc: "We're not here to flip a project. We're here to build things that outlast trends and create genuine, compounding value.",
  },
];

// ─── CATEGORIES ───────────────────────────────────────────────
export const categories = [
  {
    icon: '🧩',
    title: 'Chrome Extensions',
    desc: 'Browser-native tools that enhance workflows directly where users work — no app switching, no friction.',
    tag: 'ScreenerLens →',
  },
  {
    icon: '🌐',
    title: 'Web Applications',
    desc: 'Full-stack web products built with Next.js and React — performant, scalable, and designed to delight.',
    tag: 'SaaS · Platforms',
  },
  {
    icon: '📱',
    title: 'Mobile Applications',
    desc: 'Cross-platform mobile apps in React Native and Flutter — native performance, shared codebase efficiency.',
    tag: 'iOS · Android',
  },
  {
    icon: '☁️',
    title: 'SaaS Platforms',
    desc: 'Subscription software products with real recurring revenue models — built to grow and scale autonomously.',
    tag: 'Coming 2025',
  },
  {
    icon: '🛠',
    title: 'Utility Tools',
    desc: 'Focused, single-purpose tools that solve one thing perfectly. Often free, always useful, sometimes viral.',
    tag: 'Developer Tools',
  },
  {
    icon: '🔬',
    title: 'Experimental Lab',
    desc: "Ideas that don't fit neat categories — AI experiments, generative products, and things we build to learn.",
    tag: 'In Development',
  },
];

// ─── WORK PROJECTS ────────────────────────────────────────────
export const projects = [
  {
    id: 'screenerlens',
    featured: true,
    status: 'live',
    statusLabel: 'Live',
    title: 'ScreenerLens',
    desc: 'A Chrome Extension that enhances how users research, screen, and evaluate content directly in their browser. Built for speed, designed for focus.',
    tags: ['Chrome Extension', 'React', 'Browser API', 'JavaScript'],
    initials: 'SL',
    artClass: '',
    link: '#',
  },
  {
    id: 'shaadiverse',
    featured: false,
    status: 'building',
    statusLabel: 'Building',
    title: 'ShaadiVerse',
    desc: 'A comprehensive wedding planning platform tailored for the South Asian market — connecting couples with vendors, planners, and communities.',
    tags: ['React Native', 'Next.js', 'Firebase'],
    initials: 'SV',
    artClass: 'shaadi-art',
    link: '#',
  },
  {
    id: 'devtools',
    featured: false,
    status: 'concept',
    statusLabel: 'Concept',
    title: 'DevTools Suite',
    desc: 'A collection of focused utility tools for developers — fast, free, and frictionless. Built for the command-line and browser alike.',
    tags: ['TypeScript', 'CLI', 'Node.js'],
    initials: 'DT',
    artClass: '',
    link: '#',
  },
];

// ─── PHILOSOPHY ───────────────────────────────────────────────
export const principles = [
  {
    num: '01',
    title: 'Architecture is never an afterthought',
    desc: 'We don’t "refactor later." We make hard architectural decisions early — even when it’s slower — because technical debt is a tax on every future feature.',
  },
  {
    num: '02',
    title: 'Design and engineering are one discipline',
    desc: 'The best software we admire blurs the line between design and code. We hold both in our heads simultaneously. Pixels and logic are not separate concerns.',
  },
  {
    num: '03',
    title: 'Performance is a feature, not a setting',
    desc: "Users notice speed even when they don't consciously think about it. We obsess over load times, animations, and interaction latency like it's the core product.",
  },
  {
    num: '04',
    title: 'Ship embarrassingly small, then grow',
    desc: 'We believe in the smallest version that proves a hypothesis. Not an MVP as an excuse to build less — but a focused experiment that teaches us what to build next.',
  },
  {
    num: '05',
    title: 'Real users over imagined ones',
    desc: 'We talk to people before we build for them. No feature leaves our hands without someone outside our team having seen it first. Assumptions are the enemy.',
  },
  {
    num: '06',
    title: 'Boring technology, exciting outcomes',
    desc: 'We reach for proven tools. React, Next.js, TypeScript, Firebase. The excitement should come from what we build with them — not from chasing the newest framework.',
  },
];

// ─── TECH STACK ───────────────────────────────────────────────
export const stackCategories = [
  {
    category: 'Frontend',
    pills: [
      { label: 'React.js', dotClass: 'pill-react' },
      { label: 'Next.js', dotClass: 'pill-next' },
      { label: 'TypeScript', dotClass: 'pill-ts' },
      { label: 'Tailwind CSS', dotClass: 'pill-tailwind' },
    ],
  },
  {
    category: 'Mobile',
    pills: [
      { label: 'React Native', dotClass: 'pill-native' },
      { label: 'Flutter', dotClass: 'pill-flutter' },
    ],
  },
  {
    category: 'Backend & Cloud',
    pills: [
      { label: 'Node.js', dotClass: 'pill-node' },
      { label: 'Firebase', dotClass: 'pill-firebase' },
      { label: 'Supabase', dotClass: 'pill-supabase' },
    ],
  },
  {
    category: 'Design & Tooling',
    pills: [
      { label: 'Figma', dotClass: 'pill-figma' },
      { label: 'Git & GitHub', dotClass: 'pill-git' },
      { label: 'Vercel', dotClass: 'pill-vercel' },
    ],
  },
];

// ─── VISION CARDS ─────────────────────────────────────────────
export const visionCards = [
  {
    icon: '🌱',
    title: 'Start Small',
    desc: 'Begin with the smallest thing that proves the idea. Validate fast, then double down.',
  },
  {
    icon: '⚙️',
    title: 'Build Right',
    desc: 'Infrastructure and architecture decisions made early define the ceiling of what you can build later.',
  },
  {
    icon: '🚀',
    title: 'Scale With Intent',
    desc: 'Growth means nothing without direction. We build products that scale the right metrics.',
  },
];

// ─── TEAM ─────────────────────────────────────────────────────
export const team = [
  {
    initials: 'U',
    image: '/team/umesh.jpg',
    gradient: 'linear-gradient(135deg, var(--accent), var(--accent2))',
    badge: '⚛️',
    name: 'Umesh',
    role: 'Co-Founder · React Engineer',
    bio: 'Full-stack React developer obsessed with product thinking. Bridges the gap between engineering and vision — always asking "why" before "how".',
    skills: ['React', 'Next.js', 'TypeScript', 'Chrome APIs', 'Figma'],
    links: [
      { type: 'github', href: 'https://github.com/Umeshkesarkar' },
      { type: 'linkedin', href: 'https://www.linkedin.com/in/umesh-kesarkar/' },
      { type: 'twitter', href: 'https://x.com/UmeshKesarkar11' },
      { type: 'link', href: 'https://umesh-portfolio-one.vercel.app/' },
    ],
  },
  {
    initials: 'A',
    image: '/team/ankita.jpg',
    gradient: 'linear-gradient(135deg, var(--accent2), #6C63FF)',
    badge: '📱',
    name: 'Ankita',
    role: 'Co-Founder · Full-Stack Engineer',
    bio: 'Mobile-first engineer specializing in cross-platform apps that feel native on both iOS and Android. Pixel-perfect UI, buttery-smooth UX.',
    skills: ['Flutter', 'Dart', 'React Native', 'Firebase', 'Node.js'],
    links: [
      { type: 'github', href: 'https://github.com/Ankita-06' },
      { type: 'linkedin', href: 'https://www.linkedin.com/in/ankita-ambekar/' },
      { type: 'twitter', href: 'https://x.com/Ankii0608' },
      { type: 'link', href: 'https://ankitaambekar-portfolio.web.app/' },
    ],
  },
];

// ─── CONTACT WAYS ─────────────────────────────────────────────
export const contactWays = [
  {
    icon: '✉️',
    title: 'Email Us',
    detail: 'hello@arthnex.com',
    href: 'mailto:hello@arthnex.com',
  },
  {
    icon: '𝕏',
    title: 'Twitter / X',
    detail: '@arthnex',
    href: '#',
  },
  {
    icon: '📍',
    title: 'Based in India',
    detail: 'Working globally · Remote-first',
    href: null,
  },
];

// ─── INQUIRY TYPES ────────────────────────────────────────────
export const inquiryTypes = [
  'Freelance / Client Project',
  'Product Collaboration',
  'Partnership',
  'Job / Work With Us',
  'Just saying hi 👋',
];
