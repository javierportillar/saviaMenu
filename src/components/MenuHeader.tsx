import React from 'react';

interface Props {
  search: string;
  onSearch: (value: string) => void;
}

const MenuHeader: React.FC<Props> = ({ search, onSearch }) => {
  return (
    <header className="appbar">
      <div className="brand">
        <img src={`${import.meta.env.BASE_URL}images/savia_logo.png`} alt="Savia" />
        <h1>Menú</h1>
      </div>
      <div className="search">
        <input
          type="search"
          placeholder="🔎 Busca en el menú (ej. matcha, pollo, açaí…)"
          aria-label="Buscar"
          value={search}
          onChange={(e) => onSearch(e.target.value)}
        />
        {search && (
          <button className="clear-btn" onClick={() => onSearch('')} title="Limpiar">
            ✕
          </button>
        )}
      </div>
    </header>
  );
};

export default MenuHeader;
