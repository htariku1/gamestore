// src/components/Cart.js

import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import axios from 'axios';

function Cart() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const [formData, setFormData] = useState({
    name: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
  });
  const [invoice, setInvoice] = useState(null);
  const [error, setError] = useState(null);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePurchase = async (e) => {
    e.preventDefault();
    try {
      const purchaseData = {
        ...formData,
        items: cartItems.map((item) => ({
          itemType: item.itemType,
          itemId: item.id,
          quantity: item.quantity,
        })),
      };
      const response = await axios.post('/invoices', purchaseData);
      setInvoice(response.data);
      setError(null);
      clearCart();
    } catch (err) {
      setError(err.response ? err.response.data : 'Error processing purchase');
    }
  };

  return (
    <div className="max-w-screen-md mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={`${item.itemType}-${item.id}`} className="flex justify-between items-center border-b py-2">
              <div>
                <h3 className="text-lg">{item.title}</h3>
                <p>Quantity: {item.quantity}</p>
              </div>
              <div>
                <p>${(item.price * item.quantity).toFixed(2)}</p>
                <button
                  onClick={() => removeFromCart(item.id, item.itemType)}
                  className="text-red-500"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="text-right mt-4">
            <p className="text-xl font-semibold">
              Total: ${totalPrice.toFixed(2)}
            </p>
          </div>
          {/* Purchase Form */}
          <h2 className="text-2xl font-semibold mt-8 mb-4">Purchase Information</h2>
          <form onSubmit={handlePurchase} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              name="street"
              placeholder="Street"
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              name="state"
              placeholder="State (e.g., CA)"
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              name="zipcode"
              placeholder="Zipcode"
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
            <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">
              Purchase
            </button>
          </form>
          {invoice && (
            <div className="mt-8 bg-gray-100 p-4 rounded">
              <h3 className="text-xl font-semibold mb-4">Invoice</h3>
              {/* Display invoice details */}
              <p>
                <strong>Invoice ID:</strong> {invoice.invoiceId}
              </p>
              <p>
                <strong>Name:</strong> {invoice.name}
              </p>
              {/* ...other invoice fields */}
            </div>
          )}
          {error && (
            <div className="mt-4 text-red-500">
              <p>{typeof error === 'string' ? error : JSON.stringify(error)}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Cart;
