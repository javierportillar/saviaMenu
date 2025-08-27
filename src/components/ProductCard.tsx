import React from 'react';

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  price?: string;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  title, 
  description, 
  image, 
  price, 
  className = '' 
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ${className}`}>
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400';
          }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {price && (
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-green-600">{price}</span>
            <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
              Agregar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;