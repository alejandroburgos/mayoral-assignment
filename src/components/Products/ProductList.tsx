import React, { useState } from 'react';
import { ProductCard } from '../../components/Products/ProductCard';
import { Filters } from '../Filters/Filters';
import { products } from '../../data/products';
import { useMobile } from '../../contexts/MobileContext';

export const ProductList: React.FC = () => {
  const { isMobile } = useMobile();
  const [columns, setColumns] = useState(isMobile ? 3 : 4);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortCriteria, setSortCriteria] = useState<'nameAsc' | 'nameDesc' | 'offer' | 'none'>(
    'none',
  );

  const filteredProducts = products
    .filter((product) => product.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      switch (sortCriteria) {
        case 'nameAsc':
          return a.title.localeCompare(b.title);
        case 'nameDesc':
          return b.title.localeCompare(a.title);
        case 'offer':
          return (b.offer ? 1 : 0) - (a.offer ? 1 : 0);
        default:
          return 0;
      }
    });

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (criteria: 'nameAsc' | 'nameDesc' | 'offer' | 'none') => {
    setSortCriteria(criteria);
  };

  return (
    <div>
      <Filters
        setColumns={setColumns}
        onSearchChange={handleSearchChange}
        onSortChange={handleSortChange}
      />

      {isMobile && <hr />}

      <div
        className={`product-grid ${
          isMobile
            ? columns === 3
              ? 'columns-3'
              : 'columns-2'
            : columns === 4
            ? 'columns-4'
            : 'columns-3'
        }`}
      >
        {filteredProducts.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            price={product.price}
            offer={product.offer}
            colors={product.colors}
            imageUrl={product.image}
          />
        ))}
      </div>
    </div>
  );
};
