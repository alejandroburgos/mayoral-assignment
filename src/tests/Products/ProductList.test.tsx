import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ProductList } from '../../components/Products/ProductList';
import { useMobile } from '../../contexts/MobileContext';

jest.mock('../../contexts/MobileContext', () => ({
  useMobile: jest.fn(),
}));

jest.mock('../../data/products', () => ({
  products: [
    {
      title: 'Product A',
      price: 100,
      offer: true,
      colors: [],
      image: 'https://www.exampleimage.com/imageA.jpg',
    },
    {
      title: 'Product B',
      price: 200,
      offer: false,
      colors: [],
      image: 'https://www.exampleimage.com/imageB.jpg',
    },
  ],
}));

jest.mock('../../components/Filters/Filters', () => ({
  Filters: ({ setColumns, onSearchChange, onSortChange }: any) => (
    <div>
      <input data-testid="search-input" onChange={(e) => onSearchChange(e)} />
      <button data-testid="sort-asc" onClick={() => onSortChange('nameAsc')}>
        Sort Name Asc
      </button>
      <button data-testid="sort-desc" onClick={() => onSortChange('nameDesc')}>
        Sort Name Desc
      </button>
      <button data-testid="sort-offer" onClick={() => onSortChange('offer')}>
        Sort Offer
      </button>
    </div>
  ),
}));

describe('ProductList', () => {
  beforeEach(() => {
    (useMobile as jest.Mock).mockReturnValue({ isMobile: false });
  });

  test('renders product cards', () => {
    render(<ProductList />);

    expect(screen.getByText('Product A')).toBeInTheDocument();
    expect(screen.getByText('Product B')).toBeInTheDocument();
  });

  test('search filter works', () => {
    render(<ProductList />);

    const searchInput = screen.getByTestId('search-input') as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: 'Product A' } });

    expect(screen.getByText('Product A')).toBeInTheDocument();
    expect(screen.queryByText('Product B')).not.toBeInTheDocument();
  });

  test('sort by name ascending works', () => {
    render(<ProductList />);

    const sortAscButton = screen.getByTestId('sort-asc');
    fireEvent.click(sortAscButton);
  });

  test('sort by name descending works', () => {
    render(<ProductList />);

    const sortDescButton = screen.getByTestId('sort-desc');
    fireEvent.click(sortDescButton);
  });

  test('sort by offer works', () => {
    render(<ProductList />);

    const sortOfferButton = screen.getByTestId('sort-offer');
    fireEvent.click(sortOfferButton);
  });
});
