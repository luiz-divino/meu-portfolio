import React from 'react';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md shadow-sm border-b border-gray-200 ">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <div className="text-lg font-bold">Luiz F.</div>
          <div className="space-x-4">
            <a href="#home" className="text-gray-700 font-bold hover:text-blue-600 transition">Home</a>
            <a href="#about" className="text-gray-700 font-bold hover:text-blue-600 transition">Sobre</a>
            <a href="#skills" className="text-gray-700 font-bold hover:text-blue-600 transition">Skills</a>
            <a href="#projects" className="text-gray-700 font-bold hover:text-blue-600 transition">Projetos</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
