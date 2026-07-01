import { Link } from 'react-router-dom';

const footerLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function Footer() {
  return (
    <footer className="w-full bg-navy border-t border-teal/20">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-12 py-12">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <Link to="/" className="text-lg font-bold text-white">
              NEM<span className="text-teal">E</span>
            </Link>
            <p className="text-sm text-light-gray mt-1">We automate. You grow.</p>
          </div>

          <div className="flex flex-wrap gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm text-light-gray hover:text-teal-muted transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-teal/10 my-8" />

        {/* Row 2 */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-xs text-light-gray/60">
            © {new Date().getFullYear()} NEME. All rights reserved.
          </p>
          <p className="text-xs text-light-gray/60">
            Built for home service businesses.
          </p>
        </div>
      </div>
    </footer>
  );
}
