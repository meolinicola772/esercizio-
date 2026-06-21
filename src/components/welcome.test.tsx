import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Welcome from './Welcome';

describe('Welcome', () => {
  it('renderizza il nome passato come prop', () => {
    render(<Welcome name="Martina" />);
    expect(screen.getByText('Benvenuto, Martina!')).toBeInTheDocument();
  });

  it('renderizza nomi diversi correttamente', () => {
    render(<Welcome name="Luca" />);
    expect(screen.getByText('Benvenuto, Luca!')).toBeInTheDocument();
  });
});