import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from './ProductList';
import { useDispatch, useSelector } from 'react-redux';
import './productDetail.css';
import { add, increment, decrement } from '../features/cartSlice';

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cart.cart);
  const productInCart = data.find((item) => item.id === parseInt(id));

  const [product, setProduct] = useState([]);

  const getProductDetails = () => {
    const result = products.filter((item) => {
      return item.id === parseInt(id);
    });
    setProduct(result[0]);
  };

  useEffect(() => {
    getProductDetails();
  }, [id]);

  const addToCart = () => {
    dispatch(add(product));
  };

  const handleIncrement = () => {
    dispatch(increment({ id }));
  };

  const handleDecrement = () => {
    dispatch(decrement({ id }));
  };
  

  return (
    <div className="product-detail-container">
      <img className="product-detail-image" src={product.image} alt='' style={{ height: "300px" }} />
      <div className='product-details'>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <h3>{product.price}</h3>
        {!productInCart ? (
          <button className='product-detail-button' onClick={addToCart}>
            Add to Cart
          </button>
        ) : (
          <div>
            <button onClick={handleDecrement}>-</button>
            <span>{productInCart.quantity}</span>
            <button onClick={handleIncrement}>+</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetail;
