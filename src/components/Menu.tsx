import React, { useState } from 'react';
import { menuSections } from '../data/menu';
import MenuSection from './MenuSection';
import MenuHeader from './MenuHeader';
import '../menu.css';

const Menu: React.FC = () => {
  const [search, setSearch] = useState('');

  const leftSections = menuSections.filter((s) => s.column === 'left');
  const rightSections = menuSections.filter((s) => s.column === 'right');

  return (
    <div>
      <MenuHeader search={search} onSearch={setSearch} />
      <main className="wrap grid">
        <div className="col-left">
          {leftSections.map((section) => (
            <MenuSection key={section.id} section={section} search={search} />
          ))}
          <div className="image-bg-left">
            <img src={`${import.meta.env.BASE_URL}images/PACKAGING SAVIA_Mesa.png`} alt="imagenbgIz" width="100%" />
          </div>
        </div>
        <div className="col-right">
          {rightSections.map((section) => (
            <MenuSection key={section.id} section={section} search={search} />
          ))}
        </div>
      </main>
      <footer>
        SAVIA | Alimenta lo que eres | 🌿 Natural • 🍓 Delicioso • 💪 Saludable | 📍 Frente a la Universidad Mariana – Pasto,
        Nariño | 📲 @savia.cool
      </footer>
    </div>
  );
};

export default Menu;
