import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples';
import { useFetch } from '../../src/hooks/useFetch';
import { useCounter } from '../../src/hooks/useCounter';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks />', () => {
  const mockIncrement = jest.fn();

  useCounter.mockReturnValue({
    counter: 10,
    increment: mockIncrement,
  });

  beforeEach(() => jest.clearAllMocks());

  test('should show default component', () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    const NexQuoteBtn = screen.getByRole('button', { name: 'Next quote' });

    expect(screen.getByText('BreakingBad Quotes'));
    expect(screen.getByText('Serch quote by id'));
    expect(screen.getByText('Loading...'));
    expect(screen.getByRole('button', { name: 'Submit' }));
    expect(NexQuoteBtn.disabled).toBeTruthy();
  });

  test('should show a quote', () => {
    useFetch.mockReturnValue({
      data: [{ author: 'Fernando', quote: 'Hola Mundo' }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    const NexQuoteBtn = screen.getByRole('button', { name: 'Next quote' });

    expect(screen.getByText('Hola Mundo')).toBeTruthy();
    expect(screen.getByText('Fernando')).toBeTruthy();
    expect(NexQuoteBtn.disabled).toBeFalsy();
  });

  test('should call increment() function', () => {
    useFetch.mockReturnValue({
      data: [{ author: 'Fernando', quote: 'Hola Mundo' }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    const NexQuoteBtn = screen.getByRole('button', { name: 'Next quote' });
    fireEvent.click(NexQuoteBtn);

    expect(mockIncrement).toHaveBeenCalled();
  });
});
