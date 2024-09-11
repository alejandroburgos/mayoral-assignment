import React from 'react';
import { useMobile } from '../../contexts/MobileContext';
import { SearchBar } from './SearchBar';
import { SortSelect } from './SortSelect';
import { ButtonsSwitcher } from './ButtonsSwitcher';

interface FiltersProps {
  setColumns: (columns: number) => void;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSortChange: (criteria: 'nameAsc' | 'nameDesc' | 'offer' | 'none') => void;
}

export const Filters: React.FC<FiltersProps> = ({ setColumns, onSearchChange, onSortChange }) => {
  const { isMobile } = useMobile();

  return (
    <div className="filters-container">
      <SearchBar onSearchChange={onSearchChange} />
      <div className="filters">
        <SortSelect onSortChange={onSortChange} />
        <ButtonsSwitcher isMobile={isMobile} setColumns={setColumns} />
      </div>
    </div>
  );
};
