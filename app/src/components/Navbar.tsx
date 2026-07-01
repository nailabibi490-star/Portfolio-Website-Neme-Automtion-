import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import CTAButton from './CTAButton';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-navy/90 backdrop-blur-xl border-b border-teal/20'
            : 'bg-navy/80 backdrop-blur-md'
        }`}
      >
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-12">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link
  to="/"
  className="flex items-center"
  aria-label="NEME Home"
>
  <img
    src="/neme-logo.png.png"
    alt="NEME Logo"
    className="
      h-11 w-11
      rounded-full
      object-cover
      border border-teal/30
      shadow-md
      transition-transform duration-300
      hover:scale-105
    "
  />
</Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[15px] font-medium transition-colors duration-200 ${
                    location.pathname === link.path
                      ? 'text-teal'
                      : 'text-light-gray hover:text-teal-muted'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <CTAButton to="/contact" size="default">
                Book a Free Consultation
              </CTAButton>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden text-teal p-2"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-navy"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <div className="flex flex-col h-full px-6 py-6">
              <div className="flex items-center justify-between">
                <Link to="/" className="text-xl font-bold text-white" onClick={() => setMobileOpen(false)}>
                  NEM<span className="text-teal">E</span>
                </Link>
                <button
                  className="text-teal p-2"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col items-center justify-center flex-1 gap-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                  >
                    <Link
                      to={link.path}
                      className={`text-2xl font-semibold ${
                        location.pathname === link.path ? 'text-teal' : 'text-white'
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="pb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <CTAButton to="/contact" size="large" className="w-full" onClick={() => setMobileOpen(false)}>
                  Book a Free Consultation
                </CTAButton>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
