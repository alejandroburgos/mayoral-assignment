import { render, screen, fireEvent } from '@testing-library/react';
import { ButtonsSwitcher } from '../../components/Filters/ButtonsSwitcher';

describe('ColumnSwitcher', () => {
  test('renders buttons for switching columns', () => {
    render(<ButtonsSwitcher isMobile={false} setColumns={undefined} />);

    expect(screen.getByText('-')).toBeInTheDocument();
    expect(screen.getByText('+')).toBeInTheDocument();
  });

  test('calls setColumns with correct values when buttons are clicked', () => {
    const handleSetColumns = jest.fn();
    render(<ButtonsSwitcher isMobile={false} setColumns={handleSetColumns} />);

    fireEvent.click(screen.getByText('-'));
    expect(handleSetColumns).toHaveBeenCalledWith(3);

    fireEvent.click(screen.getByText('+'));
    expect(handleSetColumns).toHaveBeenCalledWith(4);
  });

  test('calls setColumns with correct values for mobile view', () => {
    const handleSetColumns = jest.fn();
    render(<ButtonsSwitcher isMobile={true} setColumns={handleSetColumns} />);

    // Simulate button clicks
    fireEvent.click(screen.getByText('-'));
    expect(handleSetColumns).toHaveBeenCalledWith(2);

    fireEvent.click(screen.getByText('+'));
    expect(handleSetColumns).toHaveBeenCalledWith(3);
  });
});
