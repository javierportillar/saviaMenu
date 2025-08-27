import React from 'react';
import ProductCard from './ProductCard';

interface ProductsSectionProps {
  className?: string;
}

const ProductsSection: React.FC<ProductsSectionProps> = ({ className = '' }) => {
  const products = [
    {
      title: "Aceite Esencial de Lavanda",
      description: "Aceite puro de lavanda para relajación y bienestar",
      image: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: "$25.99"
    },
    {
      title: "Jabón Natural de Miel",
      description: "Jabón artesanal con miel orgánica y ingredientes naturales",
      image: "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: "$12.50"
    },
    {
      title: "Crema Hidratante Aloe Vera",
      description: "Crema natural con aloe vera para todo tipo de piel",
      image: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: "$18.75"
    },
    {
      title: "Té Verde Orgánico",
      description: "Té verde de cultivo orgánico, rico en antioxidantes",
      image: "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: "$15.00"
    }
  ];

  return (
    <section className={`py-16 bg-white ${className}`} id="productos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Productos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra selección de productos naturales, cuidadosamente elaborados 
            con ingredientes orgánicos y sostenibles
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              image={product.image}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;