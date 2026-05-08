
const plants = [
  { id: 1, name: "Snake Plant", price: 15, description: "Air purifying plant", group: "Air Purifying", img: require('../assets/Snake Plant Image.png') },
  { id: 2, name: "Lavender", price: 12, description: "Aromatic plant", group: "Aromatic", img: require('../assets/Lavender Image.png') },
  { id: 3, name: "Aloe Vera", price: 18, description: "Medicinal and air purifying", group: "Air Purifying", img: require('../assets/Aloe Vera Image.png') },
  { id: 4, name: "Peace Lily", price: 20, description: "Elegant air purifying plant", group: "Air Purifying", img: require('../assets/Peace Lily Image.png') },
  { id: 5, name: "Spider Plant", price: 10, description: "Easy care air purifying plant", group: "Air Purifying", img: require('../assets/Spider Plant Image.png') },
  { id: 6, name: "Rosemary", price: 8, description: "Fragrant aromatic herb", group: "Aromatic", img: require('../assets/Rosemary Image.png') },
  { id: 7, name: "Jasmine", price: 14, description: "Delicate fragrant flowering plant", group: "Aromatic", img: require('../assets/Jasmine Image.png') }
];

// Group plants by their group property
const groupBy = (arr, key) => arr.reduce((acc, item) => {
  acc[item[key]] = acc[item[key]] || [];
  acc[item[key]].push(item);
  return acc;
}, {});

const groupedPlants = groupBy(plants, 'group');


import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import PlantCard from '../components/PlantCard';
import Navbar from '../components/Navbar';
import './ProductListingPage.css';

export default function ProductListingPage() {
  const { cart } = useContext(CartContext);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <Navbar cartCount={cartCount} />
      <h2 className="slide-up">Our Plants</h2>
      {Object.keys(groupedPlants).map(group => (
        <div key={group}>
          <h3 className="plant-group-title">{group}</h3>
          <div className="plant-list">
            {groupedPlants[group].map(p => <PlantCard key={p.id} plant={p} />)}
          </div>
        </div>
      ))}
    </>
  );
}
