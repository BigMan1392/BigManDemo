import { useState } from 'react';

const techStack = [
  { name: 'Astro', icon: '🚀', desc: 'Fast static site generator' },
  { name: 'React', icon: '⚛️', desc: 'Interactive components' },
  { name: 'CSS3', icon: '🎨', desc: 'Modern styling & animations' },
  { name: 'GitHub', icon: '🐙', desc: 'Version control & CI/CD' },
  { name: 'GitHub Pages', icon: '📄', desc: 'Free hosting & deployment' },
  { name: 'JavaScript', icon: '✨', desc: 'Interactive features' },
];

export default function TechStack() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="tech-stack-section" id="tech">
      <h2>Tech Stack</h2>
      <div className="tech-grid">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className={`tech-item ${selectedIndex === index ? 'active' : ''}`}
            onClick={() => setSelectedIndex(index)}
            style={{
              animation: `fadeInScale 0.5s ease-out ${index * 0.1}s both`,
            }}
          >
            <div className="tech-icon">{tech.icon}</div>
            <h4>{tech.name}</h4>
            <p>{tech.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
