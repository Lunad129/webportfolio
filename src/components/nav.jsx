import React, { useState, useEffect } from 'react';

const Nav = () => {
  const [activeSection, setActiveSection] = useState('my');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['my', 'about', 'skills', 'projects', 'contact'];
      let current = 'my';
      for (let section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'my', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-cyan-900 flex flex-col items-center p-6 text-white font-mono">
      <div className="space-x-4 text-2xl flex justify-center">
        {navLinks.map(link => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`rounded-full px-5 py-2 text-xl transition-colors duration-200 ${
              activeSection === link.id
                ? 'bg-cyan-600 text-white'
                : 'text-white hover:bg-cyan-600'
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Nav;