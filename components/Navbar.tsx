import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_HEIGHT_TOP = 100;
const NAV_HEIGHT_SCROLLED = 64;
const NAV_LINKS = [
  { id: 'features', label: 'Features' },
  { id: 'how-it-works', label: 'How it Works' },
  { id: 'security', label: 'Security' },
  { id: 'about-us', label: 'About Us' },
];

export const Navbar: React.FC = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(NAV_LINKS[0].id);

  useEffect(() => {
    const onScroll = () => {
      setIsAtTop(window.scrollY < 8);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isMenuOpen]);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.getElementById(link.id)).filter(Boolean) as HTMLElement[];
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: '-45% 0px -45% 0px',
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault();

    const section = document.getElementById(sectionId);
    if (!section) return;

    const navHeight = isAtTop ? NAV_HEIGHT_TOP : NAV_HEIGHT_SCROLLED;
    const scrollTarget = section.getBoundingClientRect().top + window.scrollY - navHeight - 12;
    window.scrollTo({
      top: Math.max(scrollTarget, 0),
      behavior: 'smooth',
    });

    setIsMenuOpen(false);
  };

  const navStateClasses =
    isAtTop && !isMenuOpen
      ? 'border-transparent bg-transparent'
      : 'border-b border-white/10 bg-[#050505]/85 backdrop-blur-md shadow-[0_10px_35px_rgba(0,0,0,0.35)]';
  const navHeightClass = isAtTop && !isMenuOpen ? 'h-[100px]' : 'h-16';
  const brandClass =
    isAtTop && !isMenuOpen
      ? 'text-[clamp(1.55rem,1.65vw,2rem)] tracking-[-0.02em]'
      : 'text-[clamp(1.2rem,1.35vw,1.65rem)] tracking-[-0.02em]';
  const linkClass =
    isAtTop && !isMenuOpen
      ? 'text-[18px] tracking-[-0.03em]'
      : 'text-[16px] tracking-[-0.02em]';
  const ctaClass =
    isAtTop && !isMenuOpen
      ? 'px-6 py-4 text-[18px] leading-5'
      : 'px-5 py-2.5 text-[16px] leading-5';

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${navStateClasses}`} aria-label="Primary">
      <div className={`mx-auto flex max-w-[1600px] items-center justify-between px-6 transition-all duration-300 md:px-10 lg:px-16 ${navHeightClass}`}>
        <a href="#" className="flex items-center">
          <span className={`font-normal uppercase text-white transition-all duration-300 ${brandClass}`}>SLICKDOCS</span>
        </a>

        <div className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(event) => handleNavClick(event, link.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`font-normal transition-all duration-300 ${
                  isActive ? 'text-white' : 'text-neutral-400 hover:text-white'
                } ${linkClass}`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="hidden md:block">
          <a
            href="#features"
            onClick={(event) => handleNavClick(event, 'features')}
            className={`rounded-xl bg-primary-500 font-medium text-white tracking-[-0.02em] transition-all duration-300 hover:bg-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] ${ctaClass}`}
          >
            Get Started
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-black/20 p-2 text-neutral-100 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 md:hidden"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`overflow-hidden transition-[max-height,opacity] duration-300 md:hidden ${
          isMenuOpen
            ? 'max-h-[420px] border-t border-white/10 bg-[#050505]/95 opacity-100 backdrop-blur-md'
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-6 pb-6 pt-4">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(event) => handleNavClick(event, link.id)}
                  className={`rounded-lg px-3 py-3 text-base font-normal tracking-[-0.02em] transition-colors ${
                    isActive
                      ? 'bg-white/10 text-white'
                      : 'text-neutral-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <a
            href="#features"
            onClick={(event) => handleNavClick(event, 'features')}
            className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-primary-500 px-4 py-3 text-base font-medium text-white tracking-[-0.02em] transition-colors hover:bg-primary-600"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};
