import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import createStore from 'Store';

export const createWrapper = (initialState) => {
  const wrapperStore = createStore(initialState);

  const AllProviders = ({ children }) => (
    <Provider store={wrapperStore}>
      {children}
    </Provider>
  );

  return AllProviders;
};

const customRender = (ui, options, initialState) => render(ui, { wrapper: createWrapper(initialState), ...options });

export default customRender;
