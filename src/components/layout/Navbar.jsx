import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, ChevronDown, ChevronRight } from 'lucide-react';
import { navLinks } from '../../data/navigation';
import MobileMenu from './MobileMenu';
import Button from '../ui/Button';
import geerLogo from '/geer-logo.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [activeSubSubDropdown, setActiveSubSubDropdown] = useState(null);
  const [isDesktop, setIsDesktop] = useState(() => window.innerWidth >= 1024);
  const location = useLocation();
  const rafRef = useRef(0);

  useEffect(() => {
    let ticking = false;
    function handleScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const handler = (e) => setIsDesktop(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setActiveDropdown(null);
    setActiveSubDropdown(null);
    setActiveSubSubDropdown(null);
  }, [location]);

  const dropdownBg = isScrolled
    ? 'bg-white border-border/50 shadow-black/10'
    : 'bg-darker border-gray-700 shadow-black/10';
  const dropdownText = isScrolled
    ? 'text-text hover:text-primary hover:bg-primary/5'
    : 'text-gray-300 hover:text-primary hover:bg-white/5';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-black/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Mobile: Hamburger (left) */}
            <button
              onClick={() => setIsMobileOpen(true)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-darker hover:bg-surface' : 'text-white hover:bg-white/10'
              }`}
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Logo — centered on mobile, left on desktop */}
            <Link to="/" className="flex items-center lg:order-first">
              <img src={geerLogo} alt="Geer Solutions" className={`h-12 w-auto transition-all duration-300 ${isScrolled ? '' : 'brightness-0 invert'}`} />
            </Link>

            {/* Mobile: empty spacer to balance hamburger */}
            <div className="w-10 lg:hidden" />

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.path}
                  className="relative"
                  onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                  onMouseLeave={() => {
                    setActiveDropdown(null);
                    setActiveSubDropdown(null);
                    setActiveSubSubDropdown(null);
                  }}
                >
                  <Link
                    to={link.path}
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path))
                        ? 'text-primary'
                        : isScrolled
                        ? 'text-text hover:text-primary hover:bg-primary/5'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.label}
                    {link.children && <ChevronDown className="w-3.5 h-3.5" />}
                  </Link>

                  {/* Level 1 Dropdown — only mount children on desktop to avoid heavy DOM on mobile */}
                  {isDesktop && link.children && activeDropdown === link.label && (
                    <div className="absolute top-full left-0 pt-2 w-56">
                      <div className={`${dropdownBg} rounded-xl shadow-xl border py-2 transition-colors animate-in fade-in slide-in-from-top-2 duration-200`}>
                        {link.children.map((child) => (
                          <div
                            key={child.path}
                            className="relative"
                            onMouseEnter={() => {
                              if (child.children) {
                                setActiveSubDropdown(child.label);
                              } else {
                                setActiveSubDropdown(null);
                              }
                              setActiveSubSubDropdown(null);
                            }}
                          >
                            <Link
                              to={child.path}
                              className={`flex items-center justify-between px-4 py-2.5 text-sm ${dropdownText} transition-colors`}
                            >
                              {child.label}
                              {child.children && <ChevronRight className="w-3.5 h-3.5" />}
                            </Link>

                            {/* Level 2 Sub-dropdown */}
                            {child.children && activeSubDropdown === child.label && (
                              <div className="absolute left-full top-0 -mt-2 pt-2 pl-2 w-58">
                                <div className={`${dropdownBg} rounded-xl shadow-xl border py-2 transition-colors animate-in fade-in slide-in-from-left-2 duration-200`}>
                                  {child.children.map((subChild) => (
                                    <div
                                      key={subChild.path}
                                      className="relative"
                                      onMouseEnter={() => {
                                        if (subChild.children) {
                                          setActiveSubSubDropdown(subChild.label);
                                        } else {
                                          setActiveSubSubDropdown(null);
                                        }
                                      }}
                                    >
                                      <Link
                                        to={subChild.path}
                                        className={`flex items-center justify-between px-4 py-2.5 text-sm ${dropdownText} transition-colors`}
                                      >
                                        {subChild.label}
                                        {subChild.children && <ChevronRight className="w-3.5 h-3.5" />}
                                      </Link>

                                      {/* Level 3 Sub-sub-dropdown */}
                                      {subChild.children && activeSubSubDropdown === subChild.label && (
                                        <div
                                          ref={(el) => {
                                            if (!el) return;
                                            cancelAnimationFrame(rafRef.current);
                                            rafRef.current = requestAnimationFrame(() => {
                                              const inner = el.firstElementChild;
                                              if (!inner) return;
                                              const rect = inner.getBoundingClientRect();
                                              const overflow = rect.bottom - window.innerHeight + 16;
                                              if (overflow > 0) {
                                                el.style.top = `${-overflow}px`;
                                              }
                                            });
                                          }}
                                          className="absolute left-full top-0 -mt-2 pt-2 pl-2 w-66"
                                        >
                                          <div className={`${dropdownBg} rounded-xl shadow-xl border py-2 transition-colors animate-in fade-in slide-in-from-left-2 duration-200 max-h-[calc(100vh-100px)] overflow-y-auto`}>
                                            {subChild.children.map((item) => (
                                              <Link
                                                key={item.path}
                                                to={item.path}
                                                className={`block px-4 py-2.5 text-sm ${dropdownText} transition-colors`}
                                              >
                                                {item.label}
                                              </Link>
                                            ))}
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA (desktop only) */}
            <div className="hidden lg:block">
              <Button to="/contact" size="sm">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <MobileMenu isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </>
  );
}
