import React from 'react';
import searchIcon from '../../assets/icons/search-icon.svg';

interface SearchBarProps {
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearchChange }) => {
  return (
    <div className="search">
      <img className="search-icon" src={searchIcon.src} alt="Search icon" width={20} height={20} />
      <input type="text" placeholder="Buscar" className="search-bar" onChange={onSearchChange} />
    </div>
  );
};
