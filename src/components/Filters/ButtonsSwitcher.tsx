import React from 'react';

interface ButtonsSwitcherProps {
  isMobile: boolean;
  setColumns: (columns: number) => void;
}

export const ButtonsSwitcher: React.FC<ButtonsSwitcherProps> = ({ isMobile, setColumns }) => {
  const showThreeProductsPerRow = () => {
    setColumns(isMobile ? 2 : 3);
  };

  const showFourProductsPerRow = () => {
    setColumns(isMobile ? 3 : 4);
  };

  return (
    <div className="column-switcher">
      <button onClick={showThreeProductsPerRow} className="switch-button">
        -
      </button>
      <button onClick={showFourProductsPerRow} className="switch-button">
        +
      </button>
    </div>
  );
};
