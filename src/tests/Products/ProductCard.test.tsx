import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProductCard } from '../../components/Products/ProductCard';
import { useMobile } from '../../contexts/MobileContext';

jest.mock('../../contexts/MobileContext', () => ({
  useMobile: jest.fn(),
}));

describe('ProductCard', () => {
  beforeEach(() => {
    (useMobile as jest.Mock).mockReturnValue({
      isMobile: false,
    });
  });

  test('renders product card with title, price, and image', () => {
    render(
      <ProductCard
        title="Test Product"
        price={100}
        imageUrl="https://www.exampleimage.com/image.jpg"
      />,
    );

    expect(screen.getByAltText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('100.00 €')).toBeInTheDocument();
  });

  test('renders discounted price correctly', () => {
    render(
      <ProductCard
        title="Test Product"
        price={100}
        offer={20}
        imageUrl="https://www.exampleimage.com/image.jpg"
      />,
    );

    expect(screen.getByText('100.00 €')).toBeInTheDocument();
    expect(screen.getByText('80.00 € (20%)')).toBeInTheDocument();
  });

  test('shows "más colores" if there are multiple colors', () => {
    render(
      <ProductCard
        title="Test Product"
        price={100}
        imageUrl="https://www.exampleimage.com/image.jpg"
        colors={['red', 'blue']}
      />,
    );

    expect(screen.getByText('más colores')).toBeInTheDocument();
  });

  test('shows null if there are no colors', () => {
    render(
      <ProductCard
        title="Test Product"
        price={100}
        imageUrl="https://www.exampleimage.com/image.jpg"
      />,
    );

    expect(screen.queryByText('más colores')).not.toBeInTheDocument();
  });

  test('renders "AÑADIR" button', () => {
    render(
      <ProductCard
        title="Test Product"
        price={100}
        imageUrl="https://www.exampleimage.com/image.jpg"
      />,
    );

    expect(screen.getByText('AÑADIR')).toBeInTheDocument();
  });
});
