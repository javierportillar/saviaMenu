import React from 'react';
import type { MenuItemData } from '../data/menu';

interface Props {
  item: MenuItemData;
}

const MenuItem: React.FC<Props> = ({ item }) => {
  return (
    <article className="item">
      <h4>
        {item.name}
        {item.price && <span className="price">{item.price}</span>}
      </h4>
      {item.description && <p>{item.description}</p>}
      {item.details?.map((d, i) => (
        <p key={i} className="sub">{d}</p>
      ))}
    </article>
  );
};

export default MenuItem;
