import React from 'react';
import MenuItem from './MenuItem';
import type { MenuSectionData } from '../data/menu';

interface Props {
  section: MenuSectionData;
  search: string;
}

const MenuSection: React.FC<Props> = ({ section, search }) => {
  const term = search.toLowerCase();
  const items = section.items.filter((item) => {
    const text = [item.name, item.description, ...(item.details || [])]
      .join(' ')
      .toLowerCase();
    return term === '' || text.includes(term);
  });

  if (items.length === 0) return null;

  return (
    <section className="menu-section" id={section.id}>
      <h2 className={`title ${section.titleClass || ''}`}>
        {section.title}
        {section.subtitle && <small className="muted"> {section.subtitle}</small>}
        <span className="bar"></span>
      </h2>
      <div className="card">
        {items.map((item, i) => (
          <MenuItem key={i} item={item} />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
