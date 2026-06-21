import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import UncontrolledForm from './UncontrolledForm';

describe('UncontrolledForm', () => {
  it('renderizza i campi username ed email', () => {
    render(<UncontrolledForm />);
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('permette di scrivere nei campi senza state controllato', () => {
    render(<UncontrolledForm />);
    const usernameInput = screen.getByLabelText('Username') as HTMLInputElement;
    const emailInput = screen.getByLabelText('Email') as HTMLInputElement;

    fireEvent.change(usernameInput, { target: { value: 'martina' } });
    fireEvent.change(emailInput, { target: { value: 'martina@test.com' } });

    expect(usernameInput.value).toBe('martina');
    expect(emailInput.value).toBe('martina@test.com');
  });

  it('chiama console.log con i valori corretti al submit', () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
    render(<UncontrolledForm />);

    fireEvent.change(screen.getByLabelText('Username'), { target: { value: 'martina' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'martina@test.com' } });
    fireEvent.click(screen.getByText('Invia'));

    expect(consoleSpy).toHaveBeenCalledWith({
      username: 'martina',
      email: 'martina@test.com',
    });

    consoleSpy.mockRestore();
  });
});