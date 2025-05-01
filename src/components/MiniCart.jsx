import { Link } from 'react-router-dom';
import useCartStore from '../store/cartStore';

const MiniCart = () => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    getSubtotal, 
    toggleMiniCart 
  } = useCartStore();
  
  return (
    <div className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg z-20">
      <div className="p-4 border-b">
        <h3 className="font-semibold">Your Cart ({cartItems.length})</h3>
      </div>
      
      {cartItems.length === 0 ? (
        <div className="p-4 text-center text-gray-500">
          Your cart is empty
        </div>
      ) : (
        <>
          <div className="max-h-96 overflow-y-auto">
            {cartItems.map(item => (
              <div key={item.id} className="p-4 border-b flex">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-16 h-16 object-contain mr-4"
                />
                <div className="flex-grow">
                  <h4 className="font-medium line-clamp-1">{item.title}</h4>
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center border rounded">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                      >
                        -
                      </button>
                      <span className="px-2">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                    <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="ml-2 text-red-500 hover:text-red-700"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
          
          <div className="p-4 border-t">
            <div className="flex justify-between mb-4">
              <span>Subtotal:</span>
              <span className="font-semibold">${getSubtotal().toFixed(2)}</span>
            </div>
            <div className="flex flex-col space-y-2">
              <Link 
                to="/cart" 
                onClick={toggleMiniCart}
                className="bg-indigo-600 text-white py-2 px-4 rounded text-center hover:bg-indigo-700"
              >
                View Cart
              </Link>
              <Link 
                to="/checkout" 
                onClick={toggleMiniCart}
                className="bg-gray-800 text-white py-2 px-4 rounded text-center hover:bg-gray-900"
              >
                Checkout
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MiniCart;