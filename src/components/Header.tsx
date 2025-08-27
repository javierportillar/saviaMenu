import React from 'react';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  return (
    <header className={`bg-white shadow-sm ${className}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img 
              src="/src/images/PACKAGING SAVIA_Mesa de trabajo 1 copia (1).png" 
              alt="Savia Logo" 
              className="h-8 w-auto"
            />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#inicio" className="text-gray-900 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Inicio
              </a>
              <a href="#productos" className="text-gray-900 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Productos
              </a>
              <a href="#nosotros" className="text-gray-900 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Nosotros
              </a>
              <a href="#contacto" className="text-gray-900 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contacto
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button className="text-gray-900 hover:text-green-600 focus:outline-none focus:text-green-600">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;