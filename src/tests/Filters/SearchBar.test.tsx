import { render, screen, fireEvent } from '@testing-library/react';
import { SearchBar } from '../../components/Filters/SearchBar';

describe('SearchBar', () => {
  test('renders search input and icon', () => {
    render(<SearchBar onSearchChange={undefined} />);

    expect(screen.getByPlaceholderText('Buscar')).toBeInTheDocument();

    expect(screen.getByAltText('Search icon')).toBeInTheDocument();
  });

  test('calls onSearchChange when input changes', () => {
    const handleSearchChange = jest.fn();
    render(<SearchBar onSearchChange={handleSearchChange} />);

    fireEvent.change(screen.getByPlaceholderText('Buscar'), { target: { value: 'test' } });

    expect(handleSearchChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: 'test' }),
      }),
    );
  });
});
