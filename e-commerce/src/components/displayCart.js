import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, remove } from '../features/cartSlice';
import './displayCart.css';

const DisplayCart = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const productData = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  useEffect(() => {
    setProducts(productData);
  }, [productData]);

  const removeItem = (id) => {
    dispatch(remove({ id }));
  };

  const handleDecrement = (id) => {
    dispatch(decrement({ id }));
  };

  const handleIncrement = (id) => {
    dispatch(increment({ id }));
  };

  return (
    <div className="cart-container">
      {products.map((product, ind) => (
        <div className="product1" key={ind}>
          <h3>{product.name}</h3>
          <img src={product.image} alt={product.name} style={{ height: '70px' }} />
          <p>{product.description}</p>
          <h3>{product.price}</h3>
          {product.quantity > 0 && (
            <div className="quantity-controls">
              <button onClick={() => handleDecrement(product.id)}>-</button>
              <span>{product.quantity}</span>
              <button onClick={() => handleIncrement(product.id)}>+</button>
            </div>
          )}
          <button className="remove-button" onClick={() => removeItem(product.id)}>
            Remove from Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default DisplayCart;
