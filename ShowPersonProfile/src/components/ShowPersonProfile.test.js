import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ShowPersonProfile from './ShowPersonProfile';

const mockStore = configureStore([]);

describe('ShowPersonProfile', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      profile: {
        firstName: 'John',
        middleName: 'D.',
        lastName: 'Doe',
        primaryPhone: '123-456-7890',
        primaryEmail: 'john.doe@example.com',
        addresses: {
          home: '123 Main St',
          office: '456 Office Blvd',
        },
        socialMediaLinks: {
          facebook: 'https://facebook.com/johndoe',
          linkedIn: 'https://linkedin.com/in/johndoe',
        },
      },
    });
  });

  it('renders the profile details correctly', () => {
    render(
      <Provider store={store}>
        <ShowPersonProfile />
      </Provider>
    );

    expect(screen.getByText(/John D. Doe/)).toBeInTheDocument();
    expect(screen.getByText(/123-456-7890/)).toBeInTheDocument();
    expect(screen.getByText(/john.doe@example.com/)).toBeInTheDocument();
    expect(screen.getByText(/123 Main St/)).toBeInTheDocument();
    expect(screen.getByText(/456 Office Blvd/)).toBeInTheDocument();
    expect(screen.getByText(/Facebook Profile/)).toBeInTheDocument();
    expect(screen.getByText(/LinkedIn Profile/)).toBeInTheDocument();
  });

  it('renders links correctly', () => {
    render(
      <Provider store={store}>
        <ShowPersonProfile />
      </Provider>
    );

    expect(screen.getByText(/Facebook Profile/).closest('a')).toHaveAttribute('href', 'https://facebook.com/johndoe');
    expect(screen.getByText(/LinkedIn Profile/).closest('a')).toHaveAttribute('href', 'https://linkedin.com/in/johndoe');
  });
});
