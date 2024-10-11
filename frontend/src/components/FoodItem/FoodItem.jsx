import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import './FoodItem.css';
import { StoreContext } from '../../Context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems = {}, addToCart, removeFromCart, url } = useContext(StoreContext); // Ensure cartItems has a default value

  return (
    <div className='food-item'>
      <div className='food-item-img-container'>
        <img alt={name} src={`${url}/images/${image}`} className='food-item-image' />
        
        {!cartItems[id] ? (
          <img
            className='add'
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt='Add to Cart'
          />
        ) : (
          <div className='food-item-counter'>
            <img
              src={assets.remove_icon_red}
              alt='Remove from Cart'
              onClick={() => removeFromCart(id)}
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt='Add more to Cart'
            />
          </div>
        )}
      </div>

      <div className='food-item-info'>
        <div className='food-item-name-rating'>
          <p>{name}</p>
          <img src={assets.rating_starts} alt='Rating' />
        </div>
        <p className='food-item-desc'>{description}</p>
        <p className='food-item-price'>{price} ₹</p>
      </div>
    </div>
  );
};

export default FoodItem;
