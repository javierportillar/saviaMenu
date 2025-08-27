import React from 'react';

interface AboutSectionProps {
  className?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ className = '' }) => {
  return (
    <section className={`py-16 bg-green-50 ${className}`} id="nosotros">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Sobre Nosotros
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              En Savia, creemos en el poder de la naturaleza para mejorar nuestras vidas. 
              Desde 2020, nos hemos dedicado a crear productos naturales y sostenibles 
              que respetan tanto tu bienestar como el medio ambiente.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Nuestro compromiso es ofrecer productos de la más alta calidad, 
              elaborados con ingredientes orgánicos y procesos responsables que 
              cuidan cada detalle desde el origen hasta tu hogar.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                <div className="text-gray-600">Natural</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                <div className="text-gray-600">Clientes Felices</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Productos naturales Savia"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-green-600 bg-opacity-10 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;