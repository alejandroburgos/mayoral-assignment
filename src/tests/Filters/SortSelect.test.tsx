import { render, screen, fireEvent } from '@testing-library/react';
import { SortSelect } from '../../components/Filters/SortSelect';

describe('SortSelect', () => {
  test('renders select with options', () => {
    render(<SortSelect onSortChange={undefined} />);

    const select = screen.getByRole('combobox');
    expect(select).toBeInTheDocument();

    expect(screen.getByText('Sin ordenar')).toBeInTheDocument();
    expect(screen.getByText('Ordenar por nombre (asc)')).toBeInTheDocument();
    expect(screen.getByText('Ordenar por nombre (desc)')).toBeInTheDocument();
    expect(screen.getByText('Ordenar por oferta')).toBeInTheDocument();
  });

  test('calls onSortChange when option changes', () => {
    const handleSortChange = jest.fn();
    render(<SortSelect onSortChange={handleSortChange} />);

    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'nameAsc' } });

    expect(handleSortChange).toHaveBeenCalledWith('nameAsc');
  });
});
