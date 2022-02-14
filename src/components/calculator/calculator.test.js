import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Calculator from './calculator';

describe('Calculator component', () => {
  let config;

  beforeEach(() => {
    config = {
      brandName: 'Custom Brand',
      assetUrl: 'https://www.someurl.com/logo.svg',
      brandingColorHex: '#1795d4',
      backgroundColorHex: '#1795d4',
    };
  });

  describe('renderings', () => {
    it('should render the child components <Branding>, <Screen>, and <Buttons>, with the correct props', () => {
      // when
      const { container } = render(<Calculator config={config} />);

      // then
      expect(screen.getByTestId('component-branding')).toBeDefined();
      expect(screen.getByTestId('component-screen')).toBeDefined();
      expect(screen.getByTestId('component-buttons')).toBeDefined();

      expect(container).toMatchSnapshot();
    });
  });

  describe('button interactions', () => {
    it('should initially render screen with no content', () => {
      // when
      render(<Calculator config={config} />);

      // then
      const screenOutput = screen.getByTestId('component-screen-input');
      expect(screenOutput.value).toBe('');
    });

    it('should render button key value entry onto the screen', () => {
      // given
      render(<Calculator config={config} />);

      // when
      const buttonEight = screen.getByTestId('Eight');
      const screenOutput = screen.getByTestId('component-screen-input');

      fireEvent.click(buttonEight);

      // then
      expect(screenOutput.value).toBe('8');
    });

    it('should clear the screen after a button key value entry', () => {
      // given
      render(<Calculator config={config} />);

      // when
      const buttonFive = screen.getByTestId('Five');
      const buttonClear = screen.getByTestId('Clear');
      const screenOutput = screen.getByTestId('component-screen-input');

      fireEvent.click(buttonFive);

      // then
      expect(screenOutput.value).toBe('5');

      // when
      fireEvent.click(buttonClear);

      // then
      expect(screenOutput.value).toBe('');
    });

    it('should render the correct calculated result for 1+1', () => {
      // given
      render(<Calculator config={config} />);

      // when
      const buttonOne = screen.getByTestId('One');
      const buttonAdd = screen.getByTestId('Add');
      const buttonEqual = screen.getByTestId('Equal');
      const screenOutput = screen.getByTestId('component-screen-input');

      fireEvent.click(buttonOne);
      fireEvent.click(buttonAdd);
      fireEvent.click(buttonOne);

      // then
      expect(screenOutput.value).toBe('1+1');

      // when
      fireEvent.click(buttonEqual);

      // then
      expect(screenOutput.value).toBe('2');
    });
  });
});