import React, { useState } from 'react';

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'Sobre' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projetos' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md shadow-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
           <div className="nome-nav text-3xl text-blue-600 tracking-widest"><span className='text-yellow-600'>L</span>UIZ</div>

          {/* Desktop links */}
          <div className="hidden md:flex space-x-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-gray-700 font-bold hover:text-blue-600 transition">
                {l.label}
              </a>
            ))}
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <button
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              {/* simple hamburger icon */}
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {open && (
          <div className="md:hidden mt-2 pb-4">
            <div className="flex flex-col space-y-2">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="px-3 py-2 text-gray-700 font-medium hover:bg-gray-100 rounded">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;