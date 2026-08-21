import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, test, expect, vi, beforeEach } from 'vitest';
import Login from './Login';

const mockLogin = vi.fn();
const mockNavigate = vi.fn();

vi.mock('../hooks/useAuth', () => ({
  useAuth: () => ({
    login: mockLogin,
  }),
}));

vi.mock('react-router-dom', () => ({
  Link: ({ children, to }) => <a href={to}>{children}</a>,
  useNavigate: () => mockNavigate,
}));

describe('Login Page', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('renders login form correctly', () => {
    render(<Login />);

    expect(screen.getByText('Welcome Back')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: 'Sign In' })
    ).toBeInTheDocument();
  });

  test('shows validation errors when form is submitted empty', async () => {
    render(<Login />);

    fireEvent.click(
      screen.getByRole('button', { name: 'Sign In' })
    );

    expect(
      await screen.findByText('Email is required')
    ).toBeInTheDocument();

    expect(
      screen.getByText('Password is required')
    ).toBeInTheDocument();

    expect(mockLogin).not.toHaveBeenCalled();
  });

  test('shows invalid email error', async () => {
    const user = userEvent.setup();

    render(<Login />);

   await user.type(
  screen.getByLabelText('Email'),
  'invalid@email'
);

    await user.type(
      screen.getByLabelText('Password'),
      'password123'
    );

    await user.click(
      screen.getByRole('button', { name: 'Sign In' })
    );

    expect(
      await screen.findByText('Invalid email')
    ).toBeInTheDocument();

    expect(mockLogin).not.toHaveBeenCalled();
  });

  test('toggles password visibility', async () => {
    const user = userEvent.setup();

    render(<Login />);

    const passwordInput = screen.getByLabelText('Password');
    const toggleButton = screen.getByRole('button', {
      name: 'Show',
    });

    expect(passwordInput).toHaveAttribute(
      'type',
      'password'
    );

    await user.click(toggleButton);

    expect(passwordInput).toHaveAttribute(
      'type',
      'text'
    );

    expect(
      screen.getByRole('button', { name: 'Hide' })
    ).toBeInTheDocument();
  });

  test('submits valid login data and navigates to home', async () => {
    const user = userEvent.setup();

    mockLogin.mockResolvedValueOnce({});

    render(<Login />);

    await user.type(
      screen.getByLabelText('Email'),
      'test@example.com'
    );

    await user.type(
      screen.getByLabelText('Password'),
      'password123'
    );

    await user.click(
      screen.getByRole('button', { name: 'Sign In' })
    );

    await waitFor(() => {
      expect(mockLogin).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'password123',
      });
    });

    expect(mockNavigate).toHaveBeenCalledWith('/');
  });
});