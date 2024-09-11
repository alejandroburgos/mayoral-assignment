import React from 'react';

interface SortSelectProps {
  onSortChange: (criteria: 'nameAsc' | 'nameDesc' | 'offer' | 'none') => void;
}

export const SortSelect: React.FC<SortSelectProps> = ({ onSortChange }) => {
  return (
    <select
      onChange={(e) => onSortChange(e.target.value as 'nameAsc' | 'nameDesc' | 'offer' | 'none')}
      className="sort-select"
    >
      <option value="none">Todos los productos</option>
      <option value="nameAsc">Ordenar por nombre (asc)</option>
      <option value="nameDesc">Ordenar por nombre (desc)</option>
      <option value="offer">Ordenar por oferta</option>
    </select>
  );
};
