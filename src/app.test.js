import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './app';

describe('App component', () => {
  it('should render the main texts', () => {
    // when
    render(<App />);

    // then
    const headerOne = screen.getByText('Basic Pocket Calculator');

    expect(headerOne).toBeInTheDocument();
  });

  it('should render the calculator component', () => {
    // when
    render(<App />);

    // then
    const componentCalculator = screen.getByTestId('component-caculator');
    expect(componentCalculator).toBeDefined();
  })
});
