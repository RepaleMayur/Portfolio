export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Full-Stack' | 'Backend/Systems' | 'AI & ML' | 'DevOps/Tools';
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  architectureSnippet?: string;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  highlights: string[];
}

export interface TechItem {
  name: string;
  category: 'Backend & Core' | 'Frontend & UI' | 'Cloud & Systems' | 'Databases & AI';
  proficiency: number;
  iconName: string;
  description: string;
  status: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Full-time' | 'Contract' | 'Lead';
  description: string;
  achievements: string[];
  skills: string[];
}

export const PERSONAL_INFO = {
  name: 'Mayur Repale',
  title: 'Full Stack & AI Engineer',
  shortBio: 'I build production-ready web systems, AI-powered applications, and automation workflows.',
  fullBio: 'With 4+ years of software engineering experience, I specialize in building backend microservices, real-time distributed automation workflows, and responsive web applications using Python, FastAPI, React, and PostgreSQL.',
  location: 'Mumbai, India',
  timezone: 'GMT +5:30',
  availability: 'Available for Full Stack & AI Engineering Roles',
  statusTag: '🟢 Building Production Systems',
  email: 'mayurrepale55@gmail.com',
  github: 'https://github.com/RepaleMayur',
  linkedin: 'https://linkedin.com/in/mayurrepale',
  twitter: 'https://x.com/mayurrepale',
  stats: [
    { label: 'Years Experience', value: '4+' },
    { label: 'Total Projects Shipped', value: '13' },
    { label: 'Tech Debt Cut', value: '30%' },
    { label: 'API Latency Reduced', value: '20%' },
  ]
};

export const TECH_STACK: TechItem[] = [
  // Backend & Core
  { name: 'Python / FastAPI', category: 'Backend & Core', proficiency: 96, iconName: 'Terminal', description: 'Async microservices, Pydantic schemas, Dependency injection, High concurrency.', status: 'Primary Stack' },
  { name: 'Node.js / JavaScript', category: 'Backend & Core', proficiency: 94, iconName: 'Code', description: 'Event-driven architectures, Express/Nest.js, RESTful APIs.', status: 'Primary Stack' },
  { name: 'PostgreSQL & MySQL', category: 'Databases & AI', proficiency: 94, iconName: 'Database', description: 'Complex index optimization, query tuning, relational architecture.', status: 'Primary Stack' },

  // Frontend & UI
  { name: 'React.js', category: 'Frontend & UI', proficiency: 95, iconName: 'Layout', description: 'Custom hooks, component state architecture, performance tuning.', status: 'Primary Stack' },
  { name: 'Tailwind CSS', category: 'Frontend & UI', proficiency: 98, iconName: 'Palette', description: 'Custom design tokens, responsive layouts, micro-animations.', status: 'Supporting Stack' },

  // Supporting Technologies
  { name: 'PHP / CodeIgniter', category: 'Backend & Core', proficiency: 88, iconName: 'Layers', description: 'MVC architecture, RESTful API design, database retrieval.', status: 'Supporting Stack' },
  { name: 'WordPress & WooCommerce', category: 'Cloud & Systems', proficiency: 90, iconName: 'Cloud', description: 'Custom plugin development, e-commerce engines, payment gateways.', status: 'Supporting Stack' },
  { name: 'Generative AI & LLMs', category: 'Databases & AI', proficiency: 88, iconName: 'Brain', description: 'Groq API, Whisper, Edge-TTS, speech recognition and synthesis.', status: 'Active Development' }
];

export interface CaseStudy {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  filterCategory: 'FULL-STACK / BACKEND' | 'AI & AUTOMATION' | 'WORDPRESS & WEB' | 'FRONTEND';
  built: string[];
  techStack: string[];
  description: string;
  linkUrl: string;
  image: string;
  layout: 'left' | 'right' | 'full';
  featured: boolean;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'rrims',
    number: '01',
    title: 'RRIMS',
    subtitle: 'INTERVIEW MANAGEMENT SYSTEM',
    category: 'Backend / Full Stack / AI',
    filterCategory: 'FULL-STACK / BACKEND',
    built: [
      'Multi-Stage Candidate Workflows',
      'Automated Evaluation Scoring',
      'Panel Scheduling & Calendar Sync'
    ],
    techStack: ['FASTAPI', 'REACT.JS', 'POSTGRESQL', 'DOCKER'],
    description: 'Enterprise interview management system streamlining multi-stage candidate evaluations, panel scheduling, and automated scoring workflows.',
    linkUrl: 'https://github.com/RepaleMayur',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1400&auto=format&fit=crop',
    layout: 'left',
    featured: true
  },
  {
    id: 'ai-voice-assistant',
    number: '02',
    title: 'AI VOICE ASSISTANT',
    subtitle: 'SPEECH & AUTOMATION ENGINE',
    category: 'AI / Speech / Python',
    filterCategory: 'AI & AUTOMATION',
    built: [
      'Sub-500ms Audio Processing Pipeline',
      'Real-Time Speech Recognition',
      'Text-to-Speech Streaming Synthesis'
    ],
    techStack: ['PYTHON', 'GROQ AI', 'EDGE-TTS', 'WHISPER'],
    description: 'Real-time conversational AI voice assistant performing live speech-to-text transcription, query processing, and low-latency voice synthesis.',
    linkUrl: 'https://github.com/RepaleMayur',
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=1400&auto=format&fit=crop',
    layout: 'right',
    featured: true
  },
  {
    id: 'email-pdf-automation',
    number: '03',
    title: 'EMAIL & PDF AUTOMATION',
    subtitle: 'BACKEND AUTOMATION TOOL',
    category: 'Backend / Automation / Data',
    filterCategory: 'AI & AUTOMATION',
    built: [
      'Automated Inbox Monitoring',
      'OCR & PDF Data Extraction',
      'Custom Business Rule Engine'
    ],
    techStack: ['PYTHON', 'PYMUPDF', 'TESSERACT OCR', 'IMAP / SMTP'],
    description: 'Automated email and document processing pipeline that parses inbox attachments, performs OCR data extraction, applies business rules, and outputs structured records.',
    linkUrl: 'https://github.com/RepaleMayur',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop',
    layout: 'left',
    featured: true
  },
  {
    id: 'mulika-store',
    number: '04',
    title: 'MULIKA STORE',
    subtitle: 'RESPONSIVE E-COMMERCE ENGINE',
    category: 'E-Commerce / Full Stack',
    filterCategory: 'FULL-STACK / BACKEND',
    built: [
      'High-Performance E-Commerce Engine',
      'Mobile-First UI Optimization',
      'Order Management & Cart Workflows'
    ],
    techStack: ['REACT.JS', 'CODEIGNITER PHP', 'POSTGRESQL & MYSQL', 'WOOCOMMERCE'],
    description: 'Responsive e-commerce platform with optimized mobile user experience, dynamic catalog management, and payment gateway integration.',
    linkUrl: 'https://store.mulika.in/',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop',
    layout: 'right',
    featured: true
  },
  {
    id: 'highness-platform',
    number: '05',
    title: 'HIGHNESS PLATFORM',
    subtitle: 'BUSINESS MANAGEMENT PLATFORM',
    category: 'Business / Full Stack / Admin',
    filterCategory: 'FULL-STACK / BACKEND',
    built: [
      'Administrative Business Dashboard',
      'Product Inventory Management',
      'Client Inquiry Pipeline'
    ],
    techStack: ['REACT.JS', 'PHP', 'MYSQL', 'REST APIS'],
    description: 'Enterprise web management platform and administrative dashboard powering business operations, product inventory management, and client inquiries.',
    linkUrl: 'https://highnessmicroelectronics.com/',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop',
    layout: 'left',
    featured: false
  },
  {
    id: 'stone-ridge-wellness',
    number: '06',
    title: 'STONE RIDGE WELLNESS',
    subtitle: 'WELLNESS BOOKING PLATFORM',
    category: 'Client / WordPress / Booking',
    filterCategory: 'WORDPRESS & WEB',
    built: [
      'Online Appointment Scheduling',
      'Custom Service Catalog',
      'Client Feedback Integration'
    ],
    techStack: ['WORDPRESS', 'ELEMENTOR', 'PHP', 'BOOKING ENGINE'],
    description: 'Accessible wellness services booking platform achieving high user satisfaction rate and handling daily appointment bookings seamlessly.',
    linkUrl: 'https://stoneridgewellnessandaesthetics.com/',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1400&auto=format&fit=crop',
    layout: 'right',
    featured: false
  },
  {
    id: 'mipl-store-locator',
    number: '07',
    title: 'MIPL STORE LOCATOR',
    subtitle: 'OFFICIAL WORDPRESS PLUGIN',
    category: 'WordPress Plugin / Maps API',
    filterCategory: 'WORDPRESS & WEB',
    built: [
      'Google Maps API Integration',
      'Real-Time Geolocation Search',
      'Distance Calculation Engine'
    ],
    techStack: ['WP PLUGIN API', 'GOOGLE MAPS API', 'PHP', 'JAVASCRIPT'],
    description: 'Official WordPress plugin using Google Maps API with location filtering, distance calculation, and autocomplete capabilities.',
    linkUrl: 'https://wordpress.org/plugins/mipl-stockist-store-locator/',
    image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1400&auto=format&fit=crop',
    layout: 'left',
    featured: false
  },
  {
    id: 'au-skincare',
    number: '08',
    title: 'AU SKINCARE WEBSITE',
    subtitle: 'BRAND PLATFORM & SEO ENGINE',
    category: 'Brand / SEO Optimization',
    filterCategory: 'WORDPRESS & WEB',
    built: [
      'Custom Brand Design System',
      'Technical SEO Optimization',
      'Speed & Performance Tuning'
    ],
    techStack: ['WORDPRESS', 'PHP', 'TAILWIND CSS', 'SEO ENGINE'],
    description: 'WordPress platform engineered for a skincare brand, increasing organic search visibility and reducing user bounce rates.',
    linkUrl: 'https://www.auskincare.co.in/',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1400&auto=format&fit=crop',
    layout: 'right',
    featured: false
  },
  {
    id: 'pdf-security-redactor',
    number: '09',
    title: 'PDF SECURITY REDACTOR',
    subtitle: 'SECURITY & COMPLIANCE TOOL',
    category: 'Python / Security / PyMuPDF',
    filterCategory: 'AI & AUTOMATION',
    built: [
      'Automated PII Pattern Search',
      'Irreversible PDF Text Redaction',
      'Audit Compliance Logging'
    ],
    techStack: ['PYTHON', 'PYMUPDF', 'REGEX', 'GUI AUTOMATION'],
    description: 'Python application designed to identify, search, and redact sensitive PII data in PDF documents to maintain audit compliance.',
    linkUrl: 'https://github.com/RepaleMayur',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1400&auto=format&fit=crop',
    layout: 'left',
    featured: false
  },
  {
    id: 'pdf-merger-splitter',
    number: '10',
    title: 'PDF MERGER & SPLITTER UTILITY',
    subtitle: 'DESKTOP UTILITY APP',
    category: 'Python Desktop / File Processing',
    filterCategory: 'AI & AUTOMATION',
    built: [
      'Batch PDF Document Splitting',
      'Custom Pattern File Renaming',
      'Desktop Interface Integration'
    ],
    techStack: ['PYTHON', 'PYMUPDF', 'TKINTER', 'PYPDF2'],
    description: 'Standalone Python desktop utility that splits multipage PDF bundles into single-page documents and renames them using regex pattern matching.',
    linkUrl: 'https://github.com/RepaleMayur',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1400&auto=format&fit=crop',
    layout: 'right',
    featured: false
  },
  {
    id: 'scorecard-dashboard',
    number: '11',
    title: 'SCORECARD DASHBOARD',
    subtitle: 'PERFORMANCE METRICS ENGINE',
    category: 'Backend / Analytics / PHP',
    filterCategory: 'FULL-STACK / BACKEND',
    built: [
      'Real-Time Metrics Calculation',
      'Interactive Analytical Charts',
      'Automated PDF Report Export'
    ],
    techStack: ['PHP', 'JAVASCRIPT', 'MYSQL', 'CHART.JS'],
    description: 'Internal PHP scorecard dashboard providing real-time team performance metrics, ranking algorithms, analytical graphs, and PDF report exports.',
    linkUrl: 'https://github.com/RepaleMayur',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop',
    layout: 'left',
    featured: false
  },
  {
    id: 'ecommerce-store-engine',
    number: '12',
    title: 'E-COMMERCE STORE ENGINE',
    subtitle: 'TRANSACTIONAL STOREFRONT',
    category: 'E-Commerce / Payment Integration',
    filterCategory: 'WORDPRESS & WEB',
    built: [
      'Automated Inventory Synchronization',
      'Razorpay Payment Gateway',
      'Coupon & Order Workflows'
    ],
    techStack: ['WOOCOMMERCE', 'WORDPRESS', 'PHP', 'RAZORPAY'],
    description: 'Custom WooCommerce store with automated inventory sync, coupon management, and Razorpay payment gateway integration.',
    linkUrl: 'https://github.com/RepaleMayur/e-commerce-store',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1400&auto=format&fit=crop',
    layout: 'right',
    featured: false
  },
  {
    id: 'weather-dashboard',
    number: '13',
    title: 'WEATHER DASHBOARD',
    subtitle: 'REAL-TIME WEATHER ENGINE',
    category: 'Frontend / OpenWeather API',
    filterCategory: 'FRONTEND',
    built: [
      'OpenWeather API Ingestion',
      'Instant Search & Filtering',
      'Responsive Weather UI'
    ],
    techStack: ['REACT.JS', 'OPENWEATHER API', 'TAILWIND CSS', 'JAVASCRIPT'],
    description: 'Displays real-time weather metrics for worldwide locations using OpenWeather API with responsive design and instant search.',
    linkUrl: 'https://repalemayur.github.io/Weather-app/',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1400&auto=format&fit=crop',
    layout: 'left',
    featured: false
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'nexus-cloud-dashboard',
    title: 'Nexus Cloud Control Grid',
    tagline: 'Enterprise Kubernetes & Microservices Management Platform',
    category: 'Full-Stack',
    description: 'Real-time observability and deployment control plane handling 10,000+ microservice instances with sub-100ms cluster metrics telemetry.',
    longDescription: 'Nexus Cloud Control Grid provides multi-cloud telemetry, automated cluster healing, and interactive topology map visualization. Built using FastAPI backend, WebSockets streaming, and React frontend with dynamic canvas rendering.',
    image: '/projects/nexus.png',
    tags: ['React', 'TypeScript', 'FastAPI', 'Kubernetes', 'WebSockets', 'TailwindCSS'],
    metrics: [
      { label: 'Telemetry Throughput', value: '1M+ msg/sec' },
      { label: 'Cluster Response', value: '42ms' },
      { label: 'Uptime', value: '99.99%' }
    ],
    architectureSnippet: `class ClusterMonitor:
    def __init__(self, node_pool: List[Node]):
        self.node_pool = node_pool
        self.redis_stream = RedisStream(bus="k8s_events")

    async def poll_telemetry(self):
        async for metric in self.redis_stream.listen():
            await self.broadcast_socket_event(metric.node_id, metric.data)`,
    githubUrl: 'https://github.com/mayurrepale/nexus-cloud-grid',
    liveUrl: 'https://nexus-cloud-demo.dev',
    featured: true,
    highlights: [
      'Engineered WebSocket event bus delivering 60fps real-time cluster health graphs.',
      'Reduced memory footprint by 40% using custom Pydantic zero-copy serialization.',
      'Implemented OAuth2 JWT role-based access control with granular namespace permissions.'
    ]
  },
  {
    id: 'hyperion-ai-engine',
    title: 'Hyperion AI Pipeline',
    tagline: 'Autonomous LLM Agent Orchestration & RAG Infrastructure',
    category: 'AI & ML',
    description: 'High-performance AI engine for contextual vector retrieval, multi-model agent routing, and automated document synthesis.',
    longDescription: 'Hyperion orchestrates OpenAI, Anthropic, and open-source Llama models into resilient agent workflows. Features semantic query caching with Redis pgvector and hybrid keyword/dense search.',
    image: '/projects/hyperion.png',
    tags: ['Python', 'LangChain', 'FastAPI', 'pgvector', 'Redis', 'Next.js'],
    metrics: [
      { label: 'Retrieval Latency', value: '18ms' },
      { label: 'Token Cache Hit Rate', value: '78%' },
      { label: 'Cost Reduction', value: '35%' }
    ],
    architectureSnippet: `async def route_llm_query(prompt: str, vector_context: VectorDB):
    cached = await redis.get(hash_query(prompt))
    if cached: return cached
    embeddings = await embed_text(prompt)
    context_docs = await vector_context.similarity_search(embeddings, k=5)
    return await llm_pipeline.generate(prompt, context=context_docs)`,
    githubUrl: 'https://github.com/mayurrepale/hyperion-ai-engine',
    liveUrl: 'https://hyperion-ai.dev',
    featured: true,
    highlights: [
      'Built hybrid vector search combining dense HNSW indexing with sparse full-text search.',
      'Implemented token streaming with SSE (Server-Sent Events) for instantaneous response feedback.',
      'Designed failover router that fallback-routes requests across backup LLM providers.'
    ]
  },
  {
    id: 'pulse-realtime-bus',
    title: 'Pulse Distributed Event Bus',
    tagline: 'Sub-Millisecond Message Queue & Real-Time Event Engine',
    category: 'Backend/Systems',
    description: 'Low-latency distributed event streaming message queue designed for financial transaction audit logs and IoT telemetry processing.',
    longDescription: 'Pulse handles massive concurrent event streams with zero-loss durability guarantees. Built with Node.js TypeScript, Redis streams, and PostgreSQL partitioning.',
    image: '/projects/pulse.png',
    tags: ['Node.js', 'TypeScript', 'Redis', 'PostgreSQL', 'Docker', 'Grafana'],
    metrics: [
      { label: 'Peak Ingestion', value: '50k req/sec' },
      { label: 'End-to-End Latency', value: '12ms' },
      { label: 'Data Loss', value: '0.00%' }
    ],
    architectureSnippet: `export class EventStreamBroker {
  private redisClient: Redis;
  constructor() {
    this.redisClient = new Redis({ host: process.env.REDIS_HOST });
  }
  async publishEvent(streamKey: string, payload: Record<string, any>) {
    return await this.redisClient.xadd(streamKey, '*', 'data', JSON.stringify(payload));
  }
}`,
    githubUrl: 'https://github.com/mayurrepale/pulse-event-bus',
    liveUrl: 'https://pulse-stream.dev',
    featured: true,
    highlights: [
      'Achieved 50,000 requests per second throughput on modest 4-core cloud nodes.',
      'Implemented partitioned database tables with automated dynamic time-series archival.',
      'Created Grafana & Prometheus exporter dashboard for system metrics.'
    ]
  },
  {
    id: 'quantum-devtools-studio',
    title: 'Quantum DevTools Studio',
    tagline: 'Developer API Testing & Micro-Frontend Design Workbench',
    category: 'DevOps/Tools',
    description: 'Sleek browser-based IDE and API mock generator allowing engineering teams to mock, document, and test endpoints in parallel.',
    longDescription: 'Quantum DevTools enables fast prototyping of REST & WebSocket endpoints with synthetic JSON schema generators, visual payload inspectors, and one-click TypeScript client generation.',
    image: '/projects/quantum.png',
    tags: ['React', 'TypeScript', 'Monaco Editor', 'TailwindCSS', 'Vite'],
    metrics: [
      { label: 'Active Developers', value: '5,000+' },
      { label: 'Mock Schemas', value: '100k+' },
      { label: 'Time Saved', value: '12 hrs/wk' }
    ],
    architectureSnippet: `export function generateMockResponse(schema: JSONSchema): Record<string, any> {
  const result: Record<string, any> = {};
  for (const [key, prop] of Object.entries(schema.properties)) {
    result[key] = prop.type === 'string' ? 'mock_val' : prop.type === 'number' ? 42 : true;
  }
  return result;
}`,
    githubUrl: 'https://github.com/mayurrepale/quantum-devtools',
    liveUrl: 'https://quantum-devtools.dev',
    featured: true,
    highlights: [
      'Integrated VSCode Monaco editor with custom auto-completion schema providers.',
      'Built offline-first local storage sync engine with zero data leakage.',
      'Exported TypeScript interfaces directly from live REST response payloads.'
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-1',
    role: 'Software Engineer',
    company: 'Relation Realtech Pvt. Ltd.',
    location: 'Mumbai, India',
    period: '2026 — PRESENT',
    type: 'Full-time',
    description: 'Architecting scalable AI-driven Fintech solutions using FastAPI, Redis, and PostgreSQL.',
    achievements: [
      'Architecting scalable AI-driven Fintech solutions using FastAPI, Redis, and PostgreSQL.',
      'Integrating Generative AI models into existing SaaS platforms to enhance user experience.',
      'Optimizing performance of AI-powered recommendation systems and data pipelines.',
      'Collaborating in Agile environments to deploy robust and scalable backend services.'
    ],
    skills: ['Python', 'FastAPI', 'Redis', 'PostgreSQL', 'Generative AI', 'Docker']
  },
  {
    id: 'exp-2',
    role: 'Software Engineer',
    company: 'KnovaOne (IN) LLP',
    location: 'India',
    period: '2025 — 2026',
    type: 'Full-time',
    description: 'Designed and implemented backend microservices & APIs, reducing latency by 20%.',
    achievements: [
      'Designed and implemented backend microservices & APIs, reducing latency by 20%.',
      'Integrated third-party APIs and services, boosting operational data flow efficiency by 15%.',
      'Led legacy architecture migrations to modern frameworks, cutting technical debt by 30% and boosting maintainability by 25%.'
    ],
    skills: ['Microservices', 'REST APIs', 'Backend Architecture', 'Python', 'FastAPI']
  },
  {
    id: 'exp-3',
    role: 'Software Engineer',
    company: 'Mulika Infotech Pvt. Ltd',
    location: 'India',
    period: '2022 — 2024',
    type: 'Full-time',
    description: 'Engineered high-performance web applications with React.js & CodeIgniter.',
    achievements: [
      'Engineered high-performance web applications with React.js & CodeIgniter, improving responsiveness by 25%.',
      'Architected RESTful APIs improving database retrieval efficiency by 30% across multiple platforms.',
      'Developed mobile-first e-commerce platforms achieving 95% mobile-friendliness and user conversion gains.'
    ],
    skills: ['React.js', 'CodeIgniter PHP', 'PostgreSQL', 'WooCommerce', 'REST APIs']
  },
  {
    id: 'exp-4',
    role: 'Freelance Web Developer',
    company: 'Client Production',
    location: 'Remote',
    period: '2025 (JAN — FEB)',
    type: 'Contract',
    description: 'Deployed production e-commerce sites with WordPress, CDN caching, and 99.9% SLA.',
    achievements: [
      'Deployed production e-commerce sites with WordPress, CDN caching, and 99.9% uptime SLA.',
      'Customized plugins for search ranking & speed optimization (+40% performance gain).',
      'Integrated Razorpay payment gateway & automated order confirmation workflows.'
    ],
    skills: ['WordPress', 'Razorpay', 'PHP', 'SEO & Performance']
  }
];
