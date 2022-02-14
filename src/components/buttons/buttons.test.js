import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Buttons from './buttons';

describe('Buttons component', () => {
  let props;

  beforeEach(() => {
    props = {
      onButtonPress: jest.fn(),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render multiple buttons', () => {
    // when
    const { container } = render(<Buttons {...props} />);

    // then
    expect(container).toMatchSnapshot();
  });

  it('should call props.onButtonPress when a button is clicked', () => {
    // given
    render(<Buttons {...props} />);

    // when
    const buttonFive = screen.getByTestId('Five');
    fireEvent.click(buttonFive);

    // then
    expect(props.onButtonPress).toHaveBeenCalled(); // I would typically specifiy object detail, but React click events are pretty comprehensive..
  });
});