import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './PlantCard.css';

export default function PlantCard({ plant }) {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const inCart = cart.some(item => item.id === plant.id);

  return (
    <div className="plant-card fade-in">
      <img src={plant.img} alt={plant.name + ' image'} />
      <h3>{plant.name}</h3>
      <p>{plant.description}</p>
      <p>${plant.price}</p>
      <button
        onClick={() => inCart ? removeFromCart(plant.id) : addToCart(plant)}
        className="slide-up"
      >
        {inCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>
  );
}
