import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Greetings } from './Greetings';

describe('Greetings', () => {
  test('renders with name in green', () => {
    render(<Greetings name="Ada" />);
    const element = screen.getByText(/ada/i);
    expect(element).toBeInTheDocument();
    expect(element.className).toMatch(/isKnown/);
  });

  test('renders stranger greeting in red', () => {
    render(<Greetings />);
    const element = screen.getByText(/nice to see you, stranger/i);
    expect(element).toBeInTheDocument();
    expect(element.className).toMatch(/isStranger/);
  });
});
