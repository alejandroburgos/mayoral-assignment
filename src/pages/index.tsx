import React from 'react';
import { ProductList } from '../components/Products/ProductList';

const HomePage: React.FC = () => {
  return (
    <div>
      <main>
        <ProductList />
      </main>
    </div>
  );
};

export default HomePage;
