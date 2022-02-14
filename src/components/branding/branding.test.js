import React from 'react';

import { render, screen } from '@testing-library/react';
import Branding from './branding';

describe('Branding component', () => {
  let props;

  beforeEach(() => {
    props = {
      name: '',
      assetUrl: '',
      backgroundColorHex: '',
    };
  });

  it(`should render
      - the wrapper with inline style on background color set via props.backgroundColorHex,
      - the image element (with src={props.altUrl}, and alt={props.name logo}),
      - and sub-header`, () => {
    // given
    props.backgroundColorHex = '#00f';
    props.assetUrl = 'https://image.host.com';

    // when
    const { container } = render(<Branding {...props} />);

    // then
    expect(container).toMatchSnapshot();
  });

  it(`should render
      - the wrapper with inline style on background color set via props.backgroundColorHex,
      - the main header element set via props.name,
      - and sub-header`, () => {
    // given
    props.backgroundColorHex = '#0f0';
    props.name = 'Custom Brand';

    // when
    const { container } = render(<Branding {...props} />);

    // then
    expect(container).toMatchSnapshot();
  });
});