import { Link } from 'react-router-dom';

import { FiShoppingCart } from 'react-icons/fi';
import './ProductCard.css';

const ProductCard = ({ product }) => {

  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link to={`/products/${product.id}`} className="block">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-48 object-contain p-4"
        />
      </Link>
      
      <div className="p-4">
        <Link to={`/products/${product.id}`} className="block">
          <h3 className="text-lg font-semibold mb-2 line-clamp-2">{product.title}</h3>
        </Link>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-indigo-600">${product.price}</span>
          <button 
            
            className="bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition-colors"
            aria-label="Add to cart"
          >
            <FiShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;