import React from 'react';
import { render, screen } from '@testing-library/react';
import Screen from './screen';

describe('Screen component', () => {
  let props;

  beforeEach(() => {
    props = {
      output: '',
    };
  });

  it(`should render
      - the wrapper
      - and the input element with the value set via props.output`
    , () => {
      // given
      props.output = '7*7';

      // when
      const { container } = render(<Screen {...props} />);

      // then]
      expect(container).toMatchSnapshot();
    });
});