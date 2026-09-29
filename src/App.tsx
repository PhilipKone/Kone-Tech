import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield,
  ExternalLink,
  BrainCircuit,
  Code,
  GraduationCap,
  Cpu,
  Cloud,
  Sprout,
  Navigation,
  CreditCard,
  Smile,
  ShoppingBag,
  Video,
  ArrowRight,
  Menu,
  X,
  Layers,
  CheckCircle2,
  Server,
  Zap,
  Globe2,
  Lock,
  Compass,
  Building2,
  FileCode2,
  SlidersHorizontal,
  ChevronRight
} from 'lucide-react';
import './App.css';
import AppLauncher from './components/AppLauncher';

/* ── Division Definition ──────────────────────────────── */
interface Division {
  id: string;
  name: string;
  category: 'research' | 'software' | 'hardware' | 'operations' | 'education';
  categoryLabel: string;
  tagline: string;
  description: string;
  capabilities: string[];
  techStack: string[];
  logo: string;
  url: string;
  domain: string;
  glow: string;
  color: string;
  icon: React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>;
  status: 'Operational' | 'Active Deployment';
}

/* ── 11 Federated Divisions Data ──────────────────────── */
const divisions: Division[] = [
  {
    id: 'consult',
    name: 'Kone Consult',
    category: 'research',
    categoryLabel: 'Research & Intelligence',
    tagline: 'Empirical Research & Statistical Modeling',
    description: 'Directs quantitative methodology design, advanced statistical computing (Python, R, SPSS, MATLAB), econometric modeling, and peer-reviewed scientific thesis mentorship.',
    capabilities: ['Econometric Modeling', 'Quantitative Data Analysis', 'Methodology Validation', 'Academic Research Mentorship'],
    techStack: ['Python', 'R', 'SPSS', 'MATLAB', 'LaTeX'],
    logo: '/app-consult.svg',
    url: 'https://consult.koneacademy.io',
    domain: 'consult.koneacademy.io',
    glow: 'rgba(37, 99, 235, 0.18)',
    color: '#2563eb',
    icon: BrainCircuit,
    status: 'Operational'
  },
  {
    id: 'ai',
    name: 'Kone AI',
    category: 'research',
    categoryLabel: 'Research & Intelligence',
    tagline: 'Neural Architectures & Agentic Automation',
    description: 'Engineers domain-specialized deep learning models, computer vision diagnostic pipelines, multi-agent reinforcement workflows, and WebMCP agentic schema integrations.',
    capabilities: ['Computer Vision Telemetry', 'Agentic Workflow Systems', 'Domain-Fine-Tuned LLMs', 'Edge Inference Optimization'],
    techStack: ['PyTorch', 'ONNX', 'WebMCP', 'FastAPI', 'OpenCV'],
    logo: '/app-ai.svg',
    url: 'https://ai.koneacademy.io',
    domain: 'ai.koneacademy.io',
    glow: 'rgba(188, 0, 255, 0.18)',
    color: '#BC00FF',
    icon: BrainCircuit,
    status: 'Operational'
  },
  {
    id: 'code',
    name: 'Kone Code',
    category: 'software',
    categoryLabel: 'Software & Cloud Systems',
    tagline: 'Bespoke Production Software Engineering',
    description: 'Designs enterprise-grade full-stack architectures, high-throughput backend APIs, distributed cloud systems, and native mobile software for regional businesses.',
    capabilities: ['Custom Enterprise Platforms', 'High-Concurrency APIs', 'Cross-Platform Mobile Apps', 'Cloud Infrastructure'],
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker'],
    logo: '/app-code.svg',
    url: 'https://code.koneacademy.io',
    domain: 'code.koneacademy.io',
    glow: 'rgba(34, 197, 94, 0.18)',
    color: '#22c55e',
    icon: Code,
    status: 'Operational'
  },
  {
    id: 'digital',
    name: 'Kone Digital',
    category: 'software',
    categoryLabel: 'Software & Cloud Systems',
    tagline: 'Website-as-a-Service (WaaS) & Brand Infrastructure',
    description: 'Operates a managed Website-as-a-Service infrastructure providing high-performance, neon-styled digital presence hubs, automated SEO pipelines, and WhatsApp checkout funnels for Accra enterprises.',
    capabilities: ['Turnkey WaaS Hubs', 'Direct WhatsApp Conversion Funnels', 'Automated Search Engine Schema', 'Multi-Currency Real-time Billing'],
    techStack: ['Vite', 'React 18', 'Cloudflare Edge', 'Schema.org JSON-LD'],
    logo: '/app-digital.svg',
    url: 'https://digital.koneacademy.io',
    domain: 'digital.koneacademy.io',
    glow: 'rgba(0, 255, 255, 0.18)',
    color: '#00FFFF',
    icon: Cloud,
    status: 'Operational'
  },
  {
    id: 'pay',
    name: 'Kone Pay',
    category: 'software',
    categoryLabel: 'Software & Cloud Systems',
    tagline: 'Multi-Currency Payment Rails & Financial Ledgers',
    description: 'Unified transactional checkout gateway integrating Paystack payment rails for GHS and USD with real-time exchange rates, secure webhook verification, and automated Firestore ledgers.',
    capabilities: ['Localized Mobile Money & Card Rails', 'Dual GHS/USD Real-time Conversion', 'Automated Ledger Logging', 'Cryptographic Webhook Handlers'],
    techStack: ['Paystack API', 'Firestore Ledgers', 'Serverless Handlers', 'Exchange Rates API'],
    logo: '/app-pay.svg',
    url: 'https://consult.koneacademy.io/pay',
    domain: 'consult.koneacademy.io/pay',
    glow: 'rgba(234, 179, 8, 0.18)',
    color: '#eab308',
    icon: CreditCard,
    status: 'Operational'
  },
  {
    id: 'lab',
    name: 'Kone Lab',
    category: 'hardware',
    categoryLabel: 'Hardware, IoT & 3D',
    tagline: 'Hardware Prototyping & Embedded Systems',
    description: 'Develops physical microelectronics, custom multi-layer PCB schematics, ESP32-WROOM IoT telemetry nodes, edge firmware, and industrial automation prototypes.',
    capabilities: ['Custom PCB Layout & Routing', 'ESP32 Firmware Programming', 'Edge Sensor Interfacing', '3D Mechanical Prototyping'],
    techStack: ['C/C++', 'FreeRTOS', 'KiCAD', 'ESP-IDF', 'Fusion 360'],
    logo: '/app-lab.svg',
    url: 'https://lab.koneacademy.io',
    domain: 'lab.koneacademy.io',
    glow: 'rgba(168, 85, 247, 0.18)',
    color: '#a855f7',
    icon: Cpu,
    status: 'Operational'
  },
  {
    id: 'shop',
    name: 'Kone Shop',
    category: 'hardware',
    categoryLabel: 'Hardware, IoT & 3D',
    tagline: 'Developer Hardware & IoT Maker Marketplace',
    description: 'E-commerce marketplace providing developers, engineering students, and commercial makers with verified IoT sensor kits, microcontrollers, robotics chassis, and accessories.',
    capabilities: ['Curated Prototyping Components', 'Verified Microcontroller Boards', 'Direct Local Delivery', 'Integrated Cart & Currency Rails'],
    techStack: ['TypeScript', 'PWA Offline Engine', 'Paystack Rails', 'Automated Catalog'],
    logo: '/app-shop.svg',
    url: 'https://shop.koneacademy.io',
    domain: 'shop.koneacademy.io',
    glow: 'rgba(244, 63, 94, 0.18)',
    color: '#f43f5e',
    icon: ShoppingBag,
    status: 'Operational'
  },
  {
    id: 'studio',
    name: 'Anim Studio',
    category: 'hardware',
    categoryLabel: 'Hardware, IoT & 3D',
    tagline: 'WebGL & Interactive 3D Simulation Engines',
    description: 'High-performance interactive 3D simulation tools, real-time mechanical component visualizers, CAD part rendering, and browser-native physics systems.',
    capabilities: ['Hardware Digital Twins', 'Real-time WebGL Physics', 'Interactive CAD Inspections', 'Mathematical Surface Plotting'],
    techStack: ['Three.js', 'WebGL', 'GLSL Shaders', 'WebAssembly'],
    logo: '/app-studio.svg',
    url: 'https://lab.koneacademy.io/#/anim-studio',
    domain: 'lab.koneacademy.io/#/anim-studio',
    glow: 'rgba(239, 68, 68, 0.18)',
    color: '#ef4444',
    icon: Video,
    status: 'Operational'
  },
  {
    id: 'farms',
    name: 'Kone Farms',
    category: 'operations',
    categoryLabel: 'Agritech & Field Operations',
    tagline: 'Autonomous Agritech & Microclimate Telemetry',
    description: 'Deploys solar-powered field sensor arrays, automated soil moisture & NPK telemetry, and predictive crop analytics to modernize African agricultural production.',
    capabilities: ['Solar-Powered IoT Field Nodes', 'Soil Chemistry & NPK Telemetry', 'Microclimate Monitoring', 'Crop Yield Analytics'],
    techStack: ['LoRaWAN', 'Solar Edge Telemetry', 'ESP32 Nodes', 'Cloud Time-Series'],
    logo: '/app-farms.svg',
    url: 'https://farms.koneacademy.io',
    domain: 'farms.koneacademy.io',
    glow: 'rgba(16, 185, 129, 0.18)',
    color: '#10b981',
    icon: Sprout,
    status: 'Active Deployment'
  },
  {
    id: 'warp',
    name: 'Kone Warp',
    category: 'operations',
    categoryLabel: 'Agritech & Field Operations',
    tagline: 'Algorithmic Dispatch & Mobility Orchestration',
    description: 'On-demand transit routing algorithms, fleet telemetry diagnostics, and logistical dispatching software designed for urban transportation and delivery.',
    capabilities: ['Dynamic Vehicle Routing', 'Real-Time Fleet Diagnostics', 'Automated Pricing Telemetry', 'Multi-Modal Dispatch Engine'],
    techStack: ['Geolocation APIs', 'Real-time WebSocket Rails', 'PWA Client', 'Edge Telemetry'],
    logo: '/app-warp.svg',
    url: 'https://warp.koneacademy.io',
    domain: 'warp.koneacademy.io',
    glow: 'rgba(236, 72, 153, 0.18)',
    color: '#ec4899',
    icon: Navigation,
    status: 'Active Deployment'
  },
  {
    id: 'academy',
    name: 'Kone Academy',
    category: 'education',
    categoryLabel: 'Education & Talent Pipeline',
    tagline: 'Elite Technical & Software Education',
    description: 'Constructionist technical education academy offering rigorous, industry-accredited tracks in full-stack engineering, C/C++ systems programming, Python data science, and cloud computing.',
    capabilities: ['Comprehensive Full-Stack Curricula', 'Systems Programming (C/C++)', 'Face-to-Face & Remote Labs', 'Hands-On Capstone Projects'],
    techStack: ['React', 'Python', 'C/C++', 'PostgreSQL', 'Linux'],
    logo: '/logo-circle-blue.svg',
    url: 'https://www.koneacademy.io',
    domain: 'www.koneacademy.io',
    glow: 'rgba(88, 166, 255, 0.18)',
    color: '#58a6ff',
    icon: GraduationCap,
    status: 'Operational'
  },
  {
    id: 'kids',
    name: 'Kone Kids',
    category: 'education',
    categoryLabel: 'Education & Talent Pipeline',
    tagline: 'Early STEM & Robotics Foundation',
    description: 'Structured robotics and coding academy introducing children and young innovators to algorithmic thinking, block-based logic, and sensor microcontrollers.',
    capabilities: ['Interactive Robotics Workshops', 'Visual Block Logic Curricula', 'Hands-On Circuit Prototyping', 'Gamified STEM Challenges'],
    techStack: ['Blockly', 'Micro:bit', 'Scratch Engine', 'PWA Platform'],
    logo: '/app-kids.svg',
    url: 'https://kids.koneacademy.io',
    domain: 'kids.koneacademy.io',
    glow: 'rgba(249, 115, 22, 0.18)',
    color: '#f97316',
    icon: Smile,
    status: 'Operational'
  }
];

/* ── Filter Categories ────────────────────────────────── */
const categories = [
  { id: 'all', label: 'All Divisions', count: 12 },
  { id: 'research', label: 'Research & AI', count: 2 },
  { id: 'software', label: 'Software & Cloud', count: 3 },
  { id: 'hardware', label: 'Hardware & IoT', count: 3 },
  { id: 'operations', label: 'Applied Operations', count: 2 },
  { id: 'education', label: 'Education & STEM', count: 2 }
];

/* ── Animation Presets ─────────────────────────────────── */
const faderUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
  }
};

const containerStagger = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06
    }
  }
};

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeFlywheelStep, setActiveFlywheelStep] = useState<number>(0);

  const filteredDivisions = selectedCategory === 'all'
    ? divisions
    : divisions.filter(d => d.category === selectedCategory);

  const flywheelPhases = [
    {
      num: '01',
      title: 'Empirical Research & Methodology',
      division: 'Kone Consult & Kone AI',
      desc: 'Formulates rigorous econometric, statistical, and neural models to validate theoretical hypotheses before code or hardware is committed.',
      tags: ['Statistical Validation', 'Methodology Design', 'Peer-Reviewed Analysis']
    },
    {
      num: '02',
      title: 'Hardware Prototyping & Edge Telemetry',
      division: 'Kone Lab & Anim Studio',
      desc: 'Translates validated models into physical sensor nodes, custom multi-layer PCB schematics, ESP32 firmware, and 3D simulations.',
      tags: ['ESP32-WROOM', 'KiCAD Schematics', 'LoRaWAN Edge Nodes']
    },
    {
      num: '03',
      title: 'Production Software & Cloud Infrastructure',
      division: 'Kone Code, Kone Digital & Kone Pay',
      desc: 'Engineers fault-tolerant web/mobile platforms, Website-as-a-Service hubs, and localized Paystack multi-currency transactional rails.',
      tags: ['React / TypeScript', 'Cloudflare Edge', 'Paystack GHS/USD Rails']
    },
    {
      num: '04',
      title: 'Real-World Commercial Execution',
      division: 'Kone Farms & Kone Warp',
      desc: 'Deploys hardware and software platforms directly into live agricultural fields, microclimate telemetry, and urban mobility logistics.',
      tags: ['Smart Agritech Telemetry', 'Fleet Routing', 'Physical Ops']
    },
    {
      num: '05',
      title: 'Talent Pipeline & Pedagogical Feedback',
      division: 'Kone Academy & Kone Kids',
      desc: 'Production insights and real-world engineering paradigms feed directly into curricula, training the next generation of engineers who maintain and expand the ecosystem.',
      tags: ['Constructionist Pedagogy', 'Systems Engineering (C/C++)', 'Youth STEM']
    }
  ];

  return (
    <div className="app-container">
      {/* Background Grids */}
      <div className="bg-grid-overlay"></div>

      {/* Institutional Header */}
      <motion.header
        className="site-header"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
      >
        <div className="header-inner">
          <div className="site-logo">
            <img src="/favicon.svg" alt="Kone Technologies Emblem" className="logo-svg" />
            <div className="logo-text-group">
              <span className="logo-text">Kone Technologies</span>
              <span className="logo-subtext">Parent Organization & Engineering Group</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="nav-links desktop-only">
            <a href="#ecosystem">Ecosystem Directory</a>
            <a href="#operating-model">Innovation Flywheel</a>
            <a href="#standards">Engineering Standards</a>
            <a href="#governance">Governance</a>
          </nav>

          <div className="header-actions">
            <AppLauncher />
            <a href="https://www.koneacademy.io" target="_blank" rel="noreferrer" className="btn-academy-link desktop-only">
              Kone Academy <ExternalLink size={13} style={{ marginLeft: '4px' }} />
            </a>
            <button
              className="menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-nav-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="mobile-nav-content"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            >
              <div className="mobile-nav-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <img src="/favicon.svg" alt="Kone Tech" width="24" height="24" />
                  <span className="logo-text" style={{ fontSize: '1rem' }}>Kone Technologies</span>
                </div>
                <button className="close-btn" onClick={() => setMobileMenuOpen(false)}>
                  <X size={22} />
                </button>
              </div>
              <div className="mobile-menu-links">
                <a href="#ecosystem" onClick={() => setMobileMenuOpen(false)}>
                  <span>01.</span> Ecosystem Directory
                </a>
                <a href="#operating-model" onClick={() => setMobileMenuOpen(false)}>
                  <span>02.</span> Innovation Flywheel
                </a>
                <a href="#standards" onClick={() => setMobileMenuOpen(false)}>
                  <span>03.</span> Engineering Standards
                </a>
                <a href="#governance" onClick={() => setMobileMenuOpen(false)}>
                  <span>04.</span> Governance & Leadership
                </a>
                <a href="https://www.koneacademy.io" target="_blank" rel="noreferrer">
                  <span>05.</span> Kone Academy Hub <ExternalLink size={14} style={{ marginLeft: '6px', display: 'inline' }} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main id="main-content">
        {/* Executive Hero Section */}
        <section className="hero-section">
          <motion.div
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.12 }
              }
            }}
          >
            <motion.div
              className="badge"
              variants={{
                hidden: { opacity: 0, y: -15 },
                visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120 } }
              }}
            >
              <Building2 size={13} className="badge-icon" /> Group Governance & Corporate Parent
            </motion.div>

            <motion.h1
              className="hero-title"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } }
              }}
            >
              Applied Research, Hardware Prototyping, <br />
              <span className="text-gradient">& Scaled Software Systems.</span>
            </motion.h1>

            <motion.p
              className="hero-subtitle"
              variants={faderUp}
            >
              Kone Technologies directs a federated ecosystem of 11 specialized divisions. We bridge academic rigor, microcontroller hardware engineering, localized multi-currency financial rails, and cloud deployments into unified operational platforms.
            </motion.p>

            {/* Verified Operational Facts Bar */}
            <motion.div className="metrics-strip" variants={faderUp}>
              <div className="metric-cell">
                <span className="metric-value text-gradient">11</span>
                <span className="metric-label">Federated Divisions</span>
              </div>
              <div className="metric-divider"></div>
              <div className="metric-cell">
                <span className="metric-value">6</span>
                <span className="metric-label">Core Engineering Pillars</span>
              </div>
              <div className="metric-divider"></div>
              <div className="metric-cell">
                <span className="metric-value">GHS / USD</span>
                <span className="metric-label">Unified Paystack Rails</span>
              </div>
              <div className="metric-divider"></div>
              <div className="metric-cell">
                <span className="metric-value">WebMCP</span>
                <span className="metric-label">Agent-Ready Architecture</span>
              </div>
            </motion.div>

            <motion.div
              className="hero-actions"
              variants={faderUp}
            >
              <a href="#ecosystem" className="btn-primary">
                Explore Federated Divisions <ArrowRight size={15} style={{ marginLeft: '8px' }} />
              </a>
              <a href="#operating-model" className="btn-secondary">
                View Operating Architecture
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* Ecosystem Section */}
        <section id="ecosystem" className="ecosystem-section">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={faderUp}
          >
            <div className="section-eyebrow">Federated Directory</div>
            <h2 className="section-title">The Kone Technologies Ecosystem</h2>
            <p className="section-subtitle">
              Each division operates with focused domain autonomy while sharing unified governance, cryptographic security standards, and our closed-loop innovation pipeline.
            </p>

            {/* Category Filter Tabs */}
            <div className="category-tabs">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  className={`category-tab-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  {cat.label}
                  <span className="tab-count">{cat.count}</span>
                </button>
              ))}
            </div>
          </motion.div>

          <div className="ecosystem-grid">
            <AnimatePresence>
              {filteredDivisions.map((div, idx) => {
                const Icon = div.icon;
                const isHovered = hoveredCard === idx;
                return (
                  <motion.a
                    href={div.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={div.id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    className="ecosystem-card"
                    onMouseEnter={() => setHoveredCard(idx)}
                    onMouseLeave={() => setHoveredCard(null)}
                    style={{
                      '--card-glow-color': div.glow,
                      '--card-accent-color': div.color
                    } as React.CSSProperties}
                  >
                    <div className="card-top">
                      <div className="card-identity">
                        <div className="card-icon-wrapper" style={{ backgroundColor: `${div.color}15`, color: div.color, borderColor: `${div.color}30` }}>
                          <Icon size={18} />
                        </div>
                        <div>
                          <h3 className="card-title">{div.name}</h3>
                          <span className="card-domain-badge">{div.domain}</span>
                        </div>
                      </div>
                      <div className="card-status-pill">
                        <span className="status-dot" style={{ backgroundColor: div.color }}></span>
                        {div.status}
                      </div>
                    </div>

                    <div className="card-category-label" style={{ color: div.color }}>
                      {div.tagline}
                    </div>

                    <p className="card-desc">{div.description}</p>

                    {/* Capabilities list */}
                    <div className="card-capabilities">
                      <div className="capabilities-title">Key Mandates:</div>
                      <ul className="capabilities-list">
                        {div.capabilities.map((cap, cIdx) => (
                          <li key={cIdx}>
                            <CheckCircle2 size={12} className="cap-icon" style={{ color: div.color }} />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="card-footer">
                      <div className="tech-tags">
                        {div.techStack.map((tech, tIdx) => (
                          <span key={tIdx} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                      <span className="card-open-link" style={{ color: div.color }}>
                        Visit <ExternalLink size={13} style={{ marginLeft: '4px' }} />
                      </span>
                    </div>
                  </motion.a>
                );
              })}
            </AnimatePresence>
          </div>
        </section>

        {/* Operating Model / Innovation Flywheel */}
        <section id="operating-model" className="flywheel-section">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={faderUp}
          >
            <div className="section-eyebrow">Operating Architecture</div>
            <h2 className="section-title">The Innovation Flywheel</h2>
            <p className="section-subtitle">
              How value, data, and engineering breakthroughs cycle autonomously across our 11 federated divisions.
            </p>
          </motion.div>

          <div className="flywheel-container">
            {/* Step Selector */}
            <div className="flywheel-steps">
              {flywheelPhases.map((phase, pIdx) => {
                const isActive = activeFlywheelStep === pIdx;
                return (
                  <button
                    key={phase.num}
                    className={`flywheel-step-btn ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveFlywheelStep(pIdx)}
                  >
                    <div className="step-num-pill">{phase.num}</div>
                    <div className="step-btn-content">
                      <div className="step-btn-title">{phase.title}</div>
                      <div className="step-btn-division">{phase.division}</div>
                    </div>
                    <ChevronRight size={16} className="step-arrow" />
                  </button>
                );
              })}
            </div>

            {/* Step Detail Card */}
            <div className="flywheel-display-card">
              <div className="display-card-header">
                <span className="display-phase-badge">Phase {flywheelPhases[activeFlywheelStep].num}</span>
                <span className="display-division-badge">{flywheelPhases[activeFlywheelStep].division}</span>
              </div>
              <h3 className="display-title">{flywheelPhases[activeFlywheelStep].title}</h3>
              <p className="display-desc">{flywheelPhases[activeFlywheelStep].desc}</p>

              <div className="display-tags-group">
                <div className="tags-label">Architectural Artifacts:</div>
                <div className="display-tags">
                  {flywheelPhases[activeFlywheelStep].tags.map((t, idx) => (
                    <span key={idx} className="display-tag">{t}</span>
                  ))}
                </div>
              </div>

              <div className="display-card-footer">
                <div className="flywheel-cycle-notice">
                  <Zap size={14} style={{ color: '#00D1FF' }} />
                  <span>Feeds directly into subsequent operational pipeline stages.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Institutional Engineering Standards */}
        <section id="standards" className="standards-section">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={faderUp}
          >
            <div className="section-eyebrow">Engineering Rigor</div>
            <h2 className="section-title">Institutional Standards & Governance</h2>
            <p className="section-subtitle">
              Four fundamental architectural commitments governing every platform and device engineered within Kone Technologies.
            </p>
          </motion.div>

          <div className="standards-grid">
            <div className="standard-card">
              <div className="standard-icon-box" style={{ color: '#BC00FF', backgroundColor: 'rgba(188, 0, 255, 0.12)' }}>
                <Cpu size={22} />
              </div>
              <h3 className="standard-title">Vertical Hardware-Software Synthesis</h3>
              <p className="standard-desc">
                We engineer complete systems from bare-metal microcontroller firmware (ESP32 / FreeRTOS) to cloud telemetry ingestion and responsive web interfaces, eliminating third-party dependency bloat.
              </p>
              <div className="standard-spec">
                <span>Scope:</span> Bare Metal to Distributed Dashboards
              </div>
            </div>

            <div className="standard-card">
              <div className="standard-icon-box" style={{ color: '#00D1FF', backgroundColor: 'rgba(0, 209, 255, 0.12)' }}>
                <FileCode2 size={22} />
              </div>
              <h3 className="standard-title">Open Agentic Discoverability</h3>
              <p className="standard-desc">
                Every Kone Technologies platform provides native machine-readable context via <code className="inline-code">llms.txt</code> and declarative WebMCP schemas, allowing autonomous AI agents to browse, discover, and interact with our services.
              </p>
              <div className="standard-spec">
                <span>Standard:</span> WebMCP & Structured LLM Context
              </div>
            </div>

            <div className="standard-card">
              <div className="standard-icon-box" style={{ color: '#10B981', backgroundColor: 'rgba(16, 185, 129, 0.12)' }}>
                <Globe2 size={22} />
              </div>
              <h3 className="standard-title">Resilient Edge Infrastructure</h3>
              <p className="standard-desc">
                Built specifically for regional and emerging-market edge environments. All web applications feature full Service Worker PWA offline caching, localized asset bundling, and ultra-low bandwidth overhead.
              </p>
              <div className="standard-spec">
                <span>Standard:</span> PWA Offline First & Cloudflare Edge
              </div>
            </div>

            <div className="standard-card">
              <div className="standard-icon-box" style={{ color: '#EAB308', backgroundColor: 'rgba(234, 179, 8, 0.12)' }}>
                <Lock size={22} />
              </div>
              <h3 className="standard-title">Sovereign Financial Rails</h3>
              <p className="standard-desc">
                Integrated multi-currency checkout infrastructure supporting both Ghanaian Cedis (GHS) and US Dollars (USD) through Paystack rails, cryptographic webhook verification, and immutable ledger logging.
              </p>
              <div className="standard-spec">
                <span>Standard:</span> Multi-Currency & Firestore Ledgers
              </div>
            </div>
          </div>
        </section>

        {/* Corporate Governance & Foundation */}
        <section id="governance" className="governance-section">
          <div className="governance-card">
            <div className="governance-header">
              <div className="gov-icon-wrap">
                <Shield size={24} style={{ color: '#00D1FF' }} />
              </div>
              <div>
                <h3 className="gov-title">Executive Governance & Foundation</h3>
                <span className="gov-subtitle">Founded in Accra, Ghana · Directing Regional & Global Tech Initiatives</span>
              </div>
            </div>

            <p className="gov-body">
              Kone Technologies operates as the parent technology and governance collective established by <strong>Philip Kone Hotor</strong>. Directing 11 specialized divisions spanning scientific inquiry, full-stack software, IoT agriculture, hardware manufacturing, and youth STEM, the group is committed to sustainable technological industrialization across West Africa and worldwide.
            </p>

            <div className="gov-footer-links">
              <div className="gov-link-item">
                <span className="gov-link-label">Parent Entity:</span>
                <span className="gov-link-val">Kone Technologies Group</span>
              </div>
              <div className="gov-link-item">
                <span className="gov-link-label">Headquarters:</span>
                <span className="gov-link-val">Accra, Ghana</span>
              </div>
              <div className="gov-link-item">
                <span className="gov-link-label">Agent Specification:</span>
                <a href="/llms.txt" className="gov-spec-link">/llms.txt <ExternalLink size={12} /></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Institutional Footer */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-top-grid">
            <div className="footer-col-brand">
              <div className="footer-brand">
                <img src="/favicon.svg" alt="Logo" className="footer-logo" width="28" height="28" />
                <span className="footer-brand-title">Kone Technologies</span>
              </div>
              <p className="footer-brand-desc">
                Parent holding entity and governance organization directing pioneering research, advanced hardware prototyping, and scaled software systems.
              </p>
              <div className="footer-action-links">
                <a 
                  href="https://whatsapp.com/channel/0029VbDOYnVLSmbWakDicI0z" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-channel-btn"
                >
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Official WhatsApp Channel
                </a>
              </div>
            </div>

            <div className="footer-col-nav">
              <div className="footer-nav-title">Research & Software</div>
              <ul className="footer-nav-list">
                <li><a href="https://consult.koneacademy.io" target="_blank" rel="noreferrer">Kone Consult</a></li>
                <li><a href="https://code.koneacademy.io" target="_blank" rel="noreferrer">Kone Code</a></li>
                <li><a href="https://digital.koneacademy.io" target="_blank" rel="noreferrer">Kone Digital</a></li>
                <li><a href="https://ai.koneacademy.io" target="_blank" rel="noreferrer">Kone AI</a></li>
                <li><a href="https://consult.koneacademy.io/pay" target="_blank" rel="noreferrer">Kone Pay</a></li>
              </ul>
            </div>

            <div className="footer-col-nav">
              <div className="footer-nav-title">Hardware & Operations</div>
              <ul className="footer-nav-list">
                <li><a href="https://lab.koneacademy.io" target="_blank" rel="noreferrer">Kone Lab</a></li>
                <li><a href="https://farms.koneacademy.io" target="_blank" rel="noreferrer">Kone Farms</a></li>
                <li><a href="https://warp.koneacademy.io" target="_blank" rel="noreferrer">Kone Warp</a></li>
                <li><a href="https://shop.koneacademy.io" target="_blank" rel="noreferrer">Kone Shop</a></li>
                <li><a href="https://lab.koneacademy.io/#/anim-studio" target="_blank" rel="noreferrer">Anim Studio</a></li>
              </ul>
            </div>

            <div className="footer-col-nav">
              <div className="footer-nav-title">Education & Pipeline</div>
              <ul className="footer-nav-list">
                <li><a href="https://www.koneacademy.io" target="_blank" rel="noreferrer">Kone Academy</a></li>
                <li><a href="https://kids.koneacademy.io" target="_blank" rel="noreferrer">Kone Kids</a></li>
                <li><a href="/llms.txt" target="_blank">LLM Context (/llms.txt)</a></li>
                <li><a href="/sitemap.xml" target="_blank">Sitemap</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom-bar">
            <p className="footer-copyright">
              &copy; {new Date().getFullYear()} Kone Technologies Group. All rights reserved. Directed by Philip Kone Hotor.
            </p>
            <div className="footer-tagline-status">
              <span className="status-indicator-live"></span>
              <span>11 Federated Divisions Active</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
