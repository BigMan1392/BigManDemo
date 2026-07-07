import { useState, useEffect } from 'react';

export default function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="animated-bg">
      <div 
        className="gradient-orb orb-1"
        style={{
          left: `${mousePosition.x * 0.05}px`,
          top: `${mousePosition.y * 0.05}px`,
        }}
      ></div>
      <div 
        className="gradient-orb orb-2"
        style={{
          left: `${mousePosition.x * -0.03}px`,
          top: `${mousePosition.y * -0.03}px`,
        }}
      ></div>
      <div className="gradient-orb orb-3"></div>
    </div>
  );
}
