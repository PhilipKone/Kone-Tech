import React, { useState, useRef, useEffect } from 'react';
import './AppLauncher.css';

/* ── Type Definitions ─────────────────────────────────── */
interface AppItem {
  name: string;
  description: string;
  logo: string;
  color: string;
  glow: string;
  url: string;
}

/* ── App Data ─────────────────────────────────────────── */
const isPrerender = typeof window !== 'undefined' && (
  (window.navigator.userAgent && window.navigator.userAgent.includes('ReactSnap')) ||
  (window as any).__PRERENDER_INJECTED
);

const isLocal = typeof window !== 'undefined' && 
  (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') && 
  !isPrerender;

const apps: AppItem[] = [
  {
    name: 'Kone Technologies',
    description: 'Corporate parent brand',
    logo: '/favicon.svg',
    color: 'tech',
    glow: 'rgba(188, 0, 255, 0.12)',
    url: isLocal 
         ? 'http://localhost:5178' 
         : 'https://konetech.koneacademy.io',
  },
  {
    name: 'Kone Consult',
    description: 'Mentorship & research',
    logo: '/app-consult.svg',
    color: 'consult',
    glow: 'rgba(37, 99, 235, 0.12)',
    url: 'https://consult.koneacademy.io',
  },
  {
    name: 'Kone Academy',
    description: 'Software Education',
    logo: '/logo-circle-blue.svg',
    color: 'academy',
    glow: 'rgba(88, 166, 255, 0.12)',
    url: 'https://www.koneacademy.io',
  },
  {
    name: 'Kone Code',
    description: 'Software Engineering',
    logo: '/app-code.svg',
    color: 'code',
    glow: 'rgba(34, 197, 94, 0.12)',
    url: 'https://code.koneacademy.io',
  },
  {
    name: 'Kone Lab',
    description: 'Hardware & embedded',
    logo: '/app-lab.svg',
    color: 'lab',
    glow: 'rgba(168, 85, 247, 0.12)',
    url: 'https://lab.koneacademy.io',
  },
  {
    name: 'Kone Digital',
    description: 'Cloud infrastructure',
    logo: '/app-digital.svg',
    color: 'digital',
    glow: 'rgba(0, 255, 255, 0.12)',
    url: 'https://digital.koneacademy.io',
  },
  {
    name: 'Anim Studio',
    description: '3D animation tools',
    logo: '/app-studio.svg',
    color: 'studio',
    glow: 'rgba(239, 68, 68, 0.12)',
    url: isLocal 
         ? 'http://localhost:5175/#/anim-studio' 
         : 'https://lab.koneacademy.io/#/anim-studio',
  },
  {
    name: 'Kone Kids',
    description: 'Early tech education',
    logo: '/app-kids.svg',
    color: 'kids',
    glow: 'rgba(245, 158, 11, 0.12)',
    url: 'https://kids.koneacademy.io',
  },
  {
    name: 'Kone Shop',
    description: 'Hardware store',
    logo: '/app-shop.svg',
    color: 'shop',
    glow: 'rgba(236, 72, 153, 0.12)',
    url: 'https://shop.koneacademy.io',
  },
  {
    name: 'Kone Pay',
    description: 'Secure transactions',
    logo: '/app-pay.svg',
    color: 'pay',
    glow: 'rgba(255, 215, 0, 0.12)',
    url: 'https://consult.koneacademy.io/pay',
  },
  {
    name: 'Kone Farms',
    description: 'Smart agritech portal',
    logo: '/app-farms.svg',
    color: 'farms',
    glow: 'rgba(16, 185, 129, 0.12)',
    url: isLocal 
         ? 'http://localhost:3002' 
         : 'https://farms.koneacademy.io',
  },
  {
    name: 'Kone Warp',
    description: 'Ultra-fast delivery & rides',
    logo: '/app-warp.svg',
    color: 'warp',
    glow: 'rgba(236, 72, 153, 0.12)',
    url: isLocal 
         ? 'http://localhost:5176' 
         : 'https://warp.koneacademy.io',
  },
];

/* ── Component ────────────────────────────────────────── */
const AppLauncher: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const launcherRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (launcherRef.current && !launcherRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <div className="app-launcher" ref={launcherRef}>
      <button
        className={`app-launcher-trigger ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open app launcher"
        title="Kone Apps"
      >
        <span className="waffle-icon">
          {[...Array(9)].map((_, i) => (
            <span key={i} className="waffle-dot" />
          ))}
        </span>
      </button>

      <div className={`app-launcher-dropdown ${isOpen ? 'open' : ''}`}>
        <div className="app-launcher-dropdown-header">Kone Ecosystem</div>
        <div className="app-grid">
          {apps.map((app, index) => (
            <a
              key={app.name}
              className="app-grid-item"
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                '--item-glow': app.glow, 
                '--anim-delay': `${index * 0.05}s` 
              } as React.CSSProperties}
              onClick={() => setIsOpen(false)}
            >
              <div className={`app-icon app-icon--${app.color}`}>
                <img
                  src={app.logo}
                  alt={app.name}
                  className="app-icon-img"
                />
              </div>
              <div className="app-text-content">
                <span className="app-label">{app.name}</span>
                {app.description && <span className="app-description">{app.description}</span>}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppLauncher;
