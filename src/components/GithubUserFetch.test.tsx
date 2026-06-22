import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import GithubUserFetch from './GithubUserFetch';

const mockUser = {
  name: 'Martina',
  login: 'martina123',
  avatar_url: 'https://example.com/avatar.jpg',
  followers: 42,
};

beforeEach(() => {
  global.fetch = vi.fn().mockResolvedValue({
    json: () => Promise.resolve(mockUser),
  } as any);
});

describe('GithubUserFetch', () => {
  it('mostra il messaggio di caricamento iniziale', () => {
    render(<GithubUserFetch username="martina123" />);
    expect(screen.getByText('Caricamento...')).toBeInTheDocument();
  });

  it('mostra i dati utente dopo il fetch', async () => {
    render(<GithubUserFetch username="martina123" />);
    await waitFor(() => {
      expect(screen.getByText('Martina')).toBeInTheDocument();
      expect(screen.getByText('@martina123')).toBeInTheDocument();
      expect(screen.getByText('Followers: 42')).toBeInTheDocument();
    });
  });

  it('chiama fetch con lo username corretto', async () => {
    render(<GithubUserFetch username="martina123" />);
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        'https://api.github.com/users/martina123'
      );
    });
  });
});