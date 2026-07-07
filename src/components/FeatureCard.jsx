import { useState } from 'react';

export default function FeatureCard({ icon, title, description, delay }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="feature-card"
      style={{ 
        animation: `slideUp 0.6s ease-out ${delay}s both`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`card-icon ${isHovered ? 'active' : ''}`}>
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="card-accent"></div>
    </div>
  );
}
