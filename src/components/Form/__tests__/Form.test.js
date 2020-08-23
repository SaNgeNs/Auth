import React from 'react';
import customRender from 'Mock/customRender';
import { getNodeText, fireEvent } from '@testing-library/react';
import { reduxForm } from 'redux-form';

import Form from '../Form';

describe('<Form />', () => {
  it('should check Form functionality', async () => {
    const Component = reduxForm({
      form: 'singup',
      initialValues: {
        email: 'test@mail.ru',
        password: '123123',
        confirm_password: '123123',
        day: 12,
        month: 12,
        year: 2000,
        gender: 'male',
        how_hear_about_us: 'google',
      },
    })(Form);

    const { container, getByRole, queryByRole, unmount } = customRender(
      <Component />
    );

    const wrapper = container.querySelector('[data-test-wrap="1"]');
    const title = container.querySelector('[data-title="1"]');
    const btnSubmit = getByRole('submit');
    const progress = getByRole('progressbar');

    expect(btnSubmit).toBeInTheDocument();
    expect(progress.getAttribute('aria-valuenow')).toBe('33');
    expect(getNodeText(title)).toBe('Signup');
    expect(container).toMatchSnapshot();

    fireEvent.click(btnSubmit);
    expect(wrapper.style.transform).toBe('translateX(-100%)');
    expect(progress.getAttribute('aria-valuenow')).toBe('67');
    expect(container).toMatchSnapshot();

    fireEvent.click(btnSubmit);
    fireEvent.click(btnSubmit);

    expect(wrapper.style.transform).toBe('translateX(-200%)');
    expect(progress.getAttribute('aria-valuenow')).toBe('100');
    expect(getNodeText(title)).toBe('Thank you!');
    expect(container).toMatchSnapshot();

    const dashboardBtn = getByRole('dashboard-btn');
    const backBtn = getByRole('back-btn');

    fireEvent.click(dashboardBtn);
    const presentation = getByRole('presentation');
    const modalBg = presentation.querySelectorAll('div')[0];
    expect(presentation).toBeInTheDocument();
    expect(container).toMatchSnapshot();

    fireEvent.click(modalBg);
    await new Promise(resolve => setTimeout(resolve, 600));
    expect(queryByRole('presentation')).toBe(null);
    expect(container).toMatchSnapshot();

    fireEvent.click(backBtn);
    expect(wrapper.style.transform).toBe('translateX(-100%)');
    expect(progress.getAttribute('aria-valuenow')).toBe('67');
    expect(getNodeText(title)).toBe('Signup');
    expect(container).toMatchSnapshot();

    unmount();
  });
});
