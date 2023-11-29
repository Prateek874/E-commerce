import React from 'react';
import '../App.css'
import './productList.css'
import { useNavigate } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Headphone',
    image: '/image/image1.jpg',
    description: 'High-quality over-ear headphones for an immersive audio experience.',
    price:'Rs. 1599',
  },
  {
    id: 2,
    name: 'Samsung Watch',
    image: '/image/rachit-tank-2cFZ_FB08UM-unsplash.jpg',
    description: 'Stay connected and track your fitness with the latest Samsung smartwatch.',
    price:'Rs. 20,000',
  },
  {
    id: 3,
    name: 'Nike Shoe',
    image: '/image/domino-164_6wVEHfI-unsplash.jpg',
    description: 'Premium athletic shoes designed for comfort and performance.',
    price:'Rs. 3000',
  },
  {
    id: 4,
    name: 'Camera',
    image: '/image/eniko-kis-KsLPTsYaqIQ-unsplash.jpg',
    description: 'Capture stunning photos and videos with this professional camera.',
    price:'Rs.45000',
  },
  {
    id: 5,
    name: 'Sunglass',
    image: '/image/giorgio-trovato-K62u25Jk6vo-unsplash.jpg',
    description: 'Protect your eyes from the sun in style with these fashionable sunglasses.',
    price:'Rs.1299',
  },
  {
    id: 6,
    name: 'Sanitizer',
    image: '/image/kelly-sikkema-xp-ND7NjWaA-unsplash.jpg',
    description: 'Keep hands clean and germ-free with this effective hand sanitizer.',
    price:'Rs.299',
  },
  {
    id: 7,
    name: 'Sony Headphone',
    image: '/image/kiran-ck-LSNJ-pltdu8-unsplash.jpg',
    description: 'On-ear headphones with exceptional sound quality for music enthusiasts.',
    price:'Rs.3999',
  },
  {
    id: 8,
    name: 'Apple Watch',
    image: '/image/daniel-korpai-hbTKIbuMmBI-unsplash.jpg',
    description: 'Stay connected and track your health with the latest Apple smartwatch.',
    price:'Rs.28999',
  },
  {
    id: 9,
    name: 'Table',
    image: '/image/ruslan-bardash-4kTbAMRAHtQ-unsplash.jpg',
    description: 'Sturdy and stylish table for your home or office space.',
    price:'Rs.2999',
  },
];





const ProductList = () => {
    const navigate = useNavigate()

    function productDetailsPage(id){
      navigate(`/product/${id}`)
    }
    
 
  return (
    <div className="product-list">
      {products.map((product,index) => (
        <div className="product" key={index}>
          
          <button onClick={()=>{productDetailsPage(product.id)}} ><img src={product.image} alt={product.name} style={{height:"300px"}}/></button>
          <h3>{product.name}</h3>

        </div>
      ))}
    </div>
  );
};


export default ProductList;
export {products}
