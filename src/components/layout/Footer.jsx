import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { solutions } from '../../data/solutions';
import geerLogo from '../../assets/geer-logo.png';

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'Company', path: '/company' },
  { label: 'Solutions', path: '/solutions' },
  { label: 'Events', path: '/events' },
  { label: 'Contact', path: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-darker text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img src={geerLogo} alt="Geer Solutions" className="h-10 w-auto" />
            </Link>
            <p className="text-text-white/60 text-sm leading-relaxed">
              We give life to your ideas! We are the best IT Solution Company in the Philippines, transforming businesses with digital solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-text-white/60 hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">Solutions</h3>
            <ul className="space-y-2">
              {solutions.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/solutions/${s.slug}`}
                    className="text-text-white/60 hover:text-primary text-sm transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-text-white/60 text-sm">Philippines</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-text-white/60 text-sm">+63 917 600 366</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-text-white/60 text-sm">info@geersolutions.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Geer IT Solutions Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
