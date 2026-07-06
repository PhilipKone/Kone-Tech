import React, { useState } from 'react';
import { 
  Shield, 
  ExternalLink, 
  BrainCircuit, 
  Code, 
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
  X
} from 'lucide-react';
import './App.css';

/* ── Division Data ────────────────────────────────────── */
const divisions = [
  {
    name: 'Kone Consult',
    tagline: 'Research & Advisory',
    description: 'Pioneering academic mentoring, advanced statistical analysis, and methodology design to bridge theory with publication.',
    logo: '/app-consult.svg',
    url: 'https://consult.koneacademy.io',
    glow: 'rgba(37, 99, 235, 0.15)',
    color: '#2563eb',
    icon: BrainCircuit
  },
  {
    name: 'Kone Code',
    tagline: 'Software Education',
    description: 'Professional-grade curriculum covering full-stack web, Python engineering, C/C++ systems, and data science.',
    logo: '/app-code.svg',
    url: 'https://code.koneacademy.io',
    glow: 'rgba(34, 197, 94, 0.15)',
    color: '#22c55e',
    icon: Code
  },
  {
    name: 'Kone Lab',
    tagline: 'Engineering & IoT',
    description: 'Bespoke hardware prototyping, custom circuit designs, 3D CAD modeling, and industrial automation.',
    logo: '/app-lab.svg',
    url: 'https://lab.koneacademy.io',
    glow: 'rgba(168, 85, 247, 0.15)',
    color: '#a855f7',
    icon: Cpu
  },
  {
    name: 'Kone Digital',
    tagline: 'Cloud Infrastructure',
    description: 'Secure cloud hosting, enterprise DevOps orchestration, and ultra-reliable data architecture.',
    logo: '/app-digital.svg',
    url: 'https://digital.koneacademy.io',
    glow: 'rgba(6, 182, 212, 0.15)',
    color: '#06b6d4',
    icon: Cloud
  },
  {
    name: 'Kone Farms',
    tagline: 'Smart Agritech',
    description: 'Deploying autonomous monitoring, precision IoT soil sensors, and intelligent crop forecasting.',
    logo: '/app-farms.svg',
    url: 'https://farms.koneacademy.io',
    glow: 'rgba(16, 185, 129, 0.15)',
    color: '#10b981',
    icon: Sprout
  },
  {
    name: 'Kone Warp',
    tagline: 'Mobility & Logistics',
    description: 'Ultra-fast dispatch technology, ride orchestration algorithms, and automated delivery networks.',
    logo: '/app-warp.svg',
    url: 'https://warp.koneacademy.io',
    glow: 'rgba(236, 72, 153, 0.15)',
    color: '#ec4899',
    icon: Navigation
  },
  {
    name: 'Kone Pay',
    tagline: 'Fintech Solutions',
    description: 'Seamless secure transactions, localized payment gateways, and encrypted payment rails.',
    logo: '/app-pay.svg',
    url: 'https://consult.koneacademy.io/pay',
    glow: 'rgba(234, 179, 8, 0.15)',
    color: '#eab308',
    icon: CreditCard
  },
  {
    name: 'Kone Kids',
    tagline: 'Early STEM Education',
    description: 'Gamified interactive learning portals introducing coding, logic, and basic hardware to the next generation.',
    logo: '/app-kids.svg',
    url: 'https://kids.koneacademy.io',
    glow: 'rgba(249, 115, 22, 0.15)',
    color: '#f97316',
    icon: Smile
  },
  {
    name: 'Kone Shop',
    tagline: 'Hardware E-store',
    description: 'E-commerce marketplace supplying developers, makers, and students with top-tier IoT kits and components.',
    logo: '/app-shop.svg',
    url: 'https://shop.koneacademy.io',
    glow: 'rgba(244, 63, 94, 0.15)',
    color: '#f43f5e',
    icon: ShoppingBag
  },
  {
    name: 'Anim Studio',
    tagline: '3D & VFX Engines',
    description: 'Advanced browser-based 3D simulation engines, animators, and computer graphics tools.',
    logo: '/app-studio.svg',
    url: 'https://lab.koneacademy.io/#/anim-studio',
    glow: 'rgba(239, 68, 68, 0.15)',
    color: '#ef4444',
    icon: Video
  },
  {
    name: 'Kone AI',
    tagline: 'Neural Architectures',
    description: 'Intelligent automation agents, deep learning integrations, and domain-specialized LLM operations.',
    logo: '/app-ai.svg',
    url: 'https://ai.koneacademy.io',
    glow: 'rgba(188, 0, 255, 0.15)',
    color: '#BC00FF',
    icon: BrainCircuit
  }
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="app-container">
      {/* Background Grids and Blobs */}
      <div className="bg-grid-overlay"></div>
      <div className="glow-blob glow-blob-1"></div>
      <div className="glow-blob glow-blob-2"></div>

      {/* Header */}
      <header className="site-header">
        <div className="header-inner">
          <div className="site-logo">
            <img src="/favicon.svg" alt="Kone Tech Logo" className="logo-svg" />
            <span className="logo-text">Kone Technologies</span>
          </div>

          <nav className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <a href="#ecosystem" onClick={() => setMobileMenuOpen(false)}>Ecosystem</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>Mission</a>
            <a href="#governance" onClick={() => setMobileMenuOpen(false)}>Structure</a>
            <a href="https://www.koneacademy.io" target="_blank" rel="noreferrer" className="mobile-only-btn">Kone Academy</a>
          </nav>

          <div className="header-actions">
            <a href="https://www.koneacademy.io" target="_blank" rel="noreferrer" className="btn-academy-link">
              Visit Kone Academy <ExternalLink size={14} style={{ marginLeft: '4px' }} />
            </a>
            <button className="menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="badge">
            <Shield size={12} className="badge-icon" /> Parent Entity of Kone Group
          </div>
          <h1 className="hero-title">
            Architecting <br />
            <span className="text-gradient">The Digital Frontier</span>
          </h1>
          <p className="hero-subtitle">
            Kone Technologies is a decentralized technology holding group directing pioneering research, advanced hardware engineering, elite education, and real-world commercial utilities.
          </p>
          <div className="hero-actions">
            <a href="#ecosystem" className="btn-primary">
              Explore Ecosystem <ArrowRight size={16} style={{ marginLeft: '8px' }} />
            </a>
            <a href="#about" className="btn-secondary">Learn Our Mission</a>
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section id="ecosystem" className="ecosystem-section">
        <div className="section-header">
          <h2 className="section-title">The Kone Ecosystem</h2>
          <p className="section-subtitle">
            An interconnected conglomerate of specialized divisions pushing the boundaries of software, engineering, logistics, and agriculture.
          </p>
        </div>

        <div className="ecosystem-grid">
          {divisions.map((div, idx) => {
            const Icon = div.icon;
            const isHovered = hoveredCard === idx;
            return (
              <a 
                href={div.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                key={div.name}
                className="ecosystem-card"
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  '--card-glow-color': div.glow,
                  '--card-border-color': isHovered ? div.color : 'rgba(255, 255, 255, 0.06)'
                }}
              >
                <div className="card-glow"></div>
                <div className="card-top">
                  <div className="card-icon-wrapper" style={{ backgroundColor: `${div.color}15`, color: div.color }}>
                    <Icon size={20} />
                  </div>
                  <span className="card-link-icon">
                    <ExternalLink size={14} />
                  </span>
                </div>
                <h3 className="card-title">{div.name}</h3>
                <span className="card-tagline" style={{ color: div.color }}>{div.tagline}</span>
                <p className="card-desc">{div.description}</p>
              </a>
            );
          })}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-grid">
          <div className="about-content">
            <h2 className="section-title">Pioneering At Inception</h2>
            <p className="about-text">
              Kone Technologies functions under a flywheel mechanism where each division drives innovation into the next. Our academic research fuels custom hardware development, which inspires state-of-the-art educational courses, subsequently training the creators of our real-world agricultural, e-commerce, and logistics platforms.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-num text-gradient">3D</div>
                <div className="highlight-label">Visual Simulation Engine</div>
              </div>
              <div className="highlight-item">
                <div className="highlight-num text-gradient">IoT</div>
                <div className="highlight-label">Precision Agritech Nodes</div>
              </div>
              <div className="highlight-item">
                <div className="highlight-num text-gradient">AI</div>
                <div className="highlight-label">Autonomous Operations</div>
              </div>
            </div>
          </div>
          <div className="about-graphic">
            <div className="graphic-container">
              <div className="circle-orbit orbit-1"></div>
              <div className="circle-orbit orbit-2"></div>
              <div className="circle-orbit orbit-3"></div>
              <div className="logo-center">
                <img src="/logo-glass.svg" alt="Logo" className="orbit-logo" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <img src="/favicon.svg" alt="Logo" className="footer-logo" />
            <span>Kone Technologies</span>
          </div>
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Kone Technologies. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
