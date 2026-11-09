export type LiveProduct = {
  url: string;
  tagline: string;
  hero: { src: string; alt: string; width: number; height: number };
  shots: { src: string; alt: string; label: string; width: number; height: number }[];
  platforms: { name: string; href: string }[];
  highlights: { value: string; label: string }[];
  press: { outlet: string; quote: string; href: string };
  reviews: { quote: string; author: string; source: string }[];
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  clientType: string;
  challenge: string;
  solution: string;
  techStack: string[];
  results: string[];
  mockupType: 'desktop' | 'mobile';
  color: string;
  featured: boolean;
  live?: LiveProduct;
};

const UTM = '?utm_source=computrontech&utm_medium=referral&utm_campaign=showcase';

export const projects: Project[] = [
  {
    slug: 'doppelgone',
    title: 'Doppelgone',
    category: 'Our product · Duplicate photo cleaner',
    clientType: 'Consumer software · Built and run by Computron Tech',
    challenge: 'Years of backups, bursts and shared albums leave photo libraries full of copies, and cloud storage fills up. Most cleaners upload your photos to a server to compare them, work on only one platform, or delete without asking.',
    solution: 'We designed, built and run Doppelgone end to end. On-device AI finds exact duplicates, similar shots and bursts, keeps the best shot of each set and moves the rest to the library’s own trash, where they wait for 30 days. Photos never leave the device. The same engine ships as a Chrome extension for Google Photos and iCloud Photos, desktop apps for Windows and Mac, and phone apps for iPhone and Android.',
    techStack: ['TypeScript', 'Chrome Extension (MV3)', 'ONNX Runtime · WebGPU/WASM', 'Electron', 'Swift', 'Capacitor', 'Next.js', 'Vercel', 'Supabase', 'Polar'],
    results: [
      'Live on 5 platforms, in 4 app stores',
      'On-device AI: photos never leave the device',
      'Featured by MakeUseOf',
      'Paying customers and public store reviews',
    ],
    mockupType: 'desktop',
    color: '#2DD4BF',
    featured: true,
    live: {
      url: `https://doppelgone.app/${UTM}`,
      tagline: 'Get your storage back. Keep every memory.',
      hero: { src: '/doppelgone/og.png', alt: 'Doppelgone showing 4.2 GB of duplicate photos that can be freed up', width: 1200, height: 630 },
      shots: [
        { src: '/doppelgone/chrome-results.webp', alt: 'Doppelgone Chrome extension results', label: 'Chrome', width: 760, height: 1200 },
        { src: '/doppelgone/mac-results.webp', alt: 'Doppelgone Mac app results', label: 'Mac', width: 1520, height: 1360 },
        { src: '/doppelgone/win-results.webp', alt: 'Doppelgone Windows app results', label: 'Windows', width: 1520, height: 1360 },
        { src: '/doppelgone/iphone-results.webp', alt: 'Doppelgone iPhone app results', label: 'iPhone', width: 780, height: 1688 },
        { src: '/doppelgone/android-results.webp', alt: 'Doppelgone Android app results', label: 'Android', width: 824, height: 1830 },
      ],
      platforms: [
        { name: 'Chrome Web Store', href: 'https://chromewebstore.google.com/detail/pabeloccfbcecmhfagdjmdiekfcfadgb' },
        { name: 'Microsoft Store', href: 'https://apps.microsoft.com/detail/9N1K7Q08WRMT' },
        { name: 'Mac', href: `https://doppelgone.app/${UTM}` },
        { name: 'App Store', href: 'https://apps.apple.com/app/id6824153182' },
        { name: 'Google Play', href: 'https://play.google.com/store/apps/details?id=app.doppelgone.mobile' },
      ],
      highlights: [
        { value: '5', label: 'Platforms' },
        { value: '100%', label: 'On-device' },
        { value: '30-day', label: 'Undo window' },
      ],
      press: {
        outlet: 'MakeUseOf',
        quote: 'It’s about time somebody made a specific, user-controlled tool',
        href: 'https://www.makeuseof.com/google-photos-most-annoying-issue-finally-has-a-fix/',
      },
      reviews: [
        { quote: 'I wrote to the company with my thoughts and ideas, got an immediate reply and then within 6 hours had another reply with the improvements already rolled out!', author: 'David M.', source: 'Chrome Web Store' },
        { quote: 'Took about 10 minutes to review 3600+ google photos. Found 300+ duplicates. Worked as advertised.', author: 'Harry D.', source: 'Chrome Web Store' },
      ],
    },
  },
  {
    slug: 'e-commerce',
    title: 'E-Commerce Solutions',
    category: 'E-Commerce Analytics Dashboard',
    clientType: 'Retail / E-Commerce',
    challenge: 'E-commerce businesses managing hundreds of SKUs across multiple channels often drown in data spread across disparate systems. They need a single source of truth for real-time inventory levels, sales performance, and customer behavior — with predictive capabilities to optimize stock and marketing spend.',
    solution: 'We build comprehensive analytics dashboards that aggregate data from platforms like Shopify, Amazon, and warehouse management systems into a unified, real-time view. Our approach includes live inventory tracking with low-stock alerts, sales trend analysis with predictive forecasting, customer segmentation tools, and automated reporting that can save teams 15+ hours per week.',
    techStack: ['Next.js', 'PostgreSQL', 'Redis', 'Chart.js', 'Node.js', 'AWS'],
    results: ['Real-time inventory tracking across channels', 'Predictive sales forecasting', 'Automated reporting & customer segmentation'],
    mockupType: 'desktop' as const,
    color: '#3B82F6',
    featured: true,
  },
  {
    slug: 'health-wellness',
    title: 'Health & Wellness Apps',
    category: 'Health & Fitness Mobile App',
    clientType: 'Health / Wellness',
    challenge: 'Health-tech companies need cross-platform mobile apps that can track workouts, nutrition, and wellness metrics while providing personalized recommendations. The app needs to feel premium, work offline, and integrate with popular wearable devices.',
    solution: 'We design and build beautiful cross-platform mobile apps featuring workout tracking with custom routines, nutrition logging with barcode scanning, social features for accountability, and smart recommendations powered by machine learning. Our apps sync with Apple Health, Google Fit, and popular wearables.',
    techStack: ['React Native', 'Node.js', 'MongoDB', 'TensorFlow Lite', 'Firebase'],
    results: ['Cross-platform with native feel', 'Wearable device integration', 'ML-powered personalized recommendations'],
    mockupType: 'mobile' as const,
    color: '#10B981',
    featured: true,
  },
  {
    slug: 'project-management',
    title: 'Project Management Platforms',
    category: 'SaaS Project Management Platform',
    clientType: 'Technology / Agencies',
    challenge: 'Many teams need custom project management tools that combine task tracking, time logging, client portals, and team collaboration — all tailored to their specific workflow. Off-the-shelf tools are too rigid and require expensive workarounds.',
    solution: 'We build multi-tenant SaaS platforms with real-time collaboration features including kanban boards, Gantt charts, time tracking with client billing integration, client-facing portals for approvals and feedback, and team workload management. Real-time updates via WebSockets keep everyone in sync.',
    techStack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'WebSockets', 'Stripe'],
    results: ['Real-time multi-user collaboration', 'Integrated client portals & billing', 'Custom workflow automation'],
    mockupType: 'desktop' as const,
    color: '#8B5CF6',
    featured: true,
  },
  {
    slug: 'fintech',
    title: 'Financial Technology',
    category: 'Fintech Mobile Banking App',
    clientType: 'Financial Services',
    challenge: 'Fintech startups need secure, user-friendly mobile banking apps that handle instant peer-to-peer transfers, bill payments, and savings goals. Security and regulatory compliance (PCI-DSS) are non-negotiable.',
    solution: 'We deliver PCI-compliant mobile banking apps with biometric authentication, instant P2P transfers, automated savings tools, bill payment scheduling, and real-time transaction notifications. Our apps feature bank-grade encryption and are built to meet financial regulatory requirements from day one.',
    techStack: ['Flutter', 'Go', 'PostgreSQL', 'AWS', 'Redis', 'Terraform'],
    results: ['PCI-DSS compliant architecture', 'Biometric authentication & encryption', 'Real-time transaction processing'],
    mockupType: 'mobile' as const,
    color: '#F59E0B',
    featured: false,
  },
];
