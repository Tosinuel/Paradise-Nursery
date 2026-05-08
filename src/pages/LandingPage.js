import { Link } from 'react-router-dom';
import './LandingPage.css';

export default function LandingPage() {
  return (
    <div className="landing fade-in">
      <h1 className="slide-up">🌿 Paradise Nursery</h1>
      <p className="slide-up">Where Green Meets Serenity. Explore our wide range of houseplants for a healthier lifestyle.</p>
      <Link to="/products">
        <button className="get-started slide-up">Get Started</button>
      </Link>
    </div>
  );
}
