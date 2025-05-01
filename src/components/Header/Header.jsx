import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';


const Header = () => {
  
  
  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-indigo-600">ShopEasy</Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-indigo-600">Home</Link>
          <Link to="/products" className="text-gray-700 hover:text-indigo-600">Products</Link>
          <Link to="/cart" className="text-gray-700 hover:text-indigo-600">Cart</Link>
        </nav>
        
        <div className="relative">
          <button 
            
            className="p-2 text-gray-700 hover:text-indigo-600 relative"
          >
            <FiShoppingCart size={24} />
            {0 > 0 && (
              <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {}
              </span>
            )}
          </button>
          
        </div>
      </div>
    </header>
  );
};

export default Header;