import React from 'react';
import customRender from 'Mock/customRender';

import Main from '../index';

describe('<Main />', () => {
  it('should render main page', () => {
    const { container, getByRole, unmount } = customRender(
      <Main />
    );

    expect(getByRole('Main')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
    unmount();
  });
});
