import { Link } from 'react-router-dom';
import { X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../../data/navigation';
import geerLogo from '../../assets/geer-logo.png';

function MenuItems({ items, onClose, depth = 0 }) {
  const [expandedItem, setExpandedItem] = useState(null);

  return items.map((item) => (
    <div key={item.path}>
      {item.children ? (
        <>
          <button
            onClick={() => setExpandedItem(expandedItem === item.label ? null : item.label)}
            className={`flex items-center justify-between w-full px-4 py-3 text-left font-medium hover:bg-white/5 rounded-xl transition-colors ${
              depth === 0 ? 'text-white' : 'text-sm text-gray-300'
            }`}
          >
            {item.label}
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                expandedItem === item.label ? 'rotate-180' : ''
              }`}
            />
          </button>
          <AnimatePresence>
            {expandedItem === item.label && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden ml-4"
              >
                <MenuItems items={item.children} onClose={onClose} depth={depth + 1} />
              </motion.div>
            )}
          </AnimatePresence>
        </>
      ) : (
        <Link
          to={item.path}
          onClick={onClose}
          className={`block px-4 py-2 hover:bg-white/5 hover:text-primary rounded-lg transition-colors ${
            depth === 0 ? 'py-3 text-white font-medium' : 'text-sm text-gray-300'
          }`}
        >
          {item.label}
        </Link>
      )}
    </div>
  ));
}

export default function MobileMenu({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 h-full w-80 bg-darker shadow-2xl z-50 lg:hidden overflow-y-auto"
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <Link to="/" onClick={onClose} className="flex items-center">
                <img src={geerLogo} alt="Geer Solutions" className="h-8 w-auto" />
              </Link>
              <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                <X className="w-5 h-5 text-gray-300" />
              </button>
            </div>
            <nav className="p-4">
              <MenuItems items={navLinks} onClose={onClose} />
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
