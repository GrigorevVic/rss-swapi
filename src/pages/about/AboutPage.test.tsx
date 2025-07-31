import { AboutPage } from './AboutPage';
import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('AboutPage', () => {
  const renderComponent = () =>
    render(
      <MemoryRouter>
        <AboutPage />
      </MemoryRouter>
    );

  test('renders the title "Star Wars Сharacters"', () => {
    renderComponent();
    const titleElement = screen.getByText(/Star Wars Сharacters/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the heading "I\'m Victor"', () => {
    renderComponent();
    const headingElement = screen.getByText(/I'm Victor/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders the profile image', () => {
    renderComponent();
    const imgElement = screen.getByAltText(/photo/i);
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', '/profile.jpg');
  });

  test('renders GitHub and RS School links', () => {
    renderComponent();

    const githubLink = screen.getByText(/GitHub: GrigorevVic/i);
    const rsSchoolLink = screen.getByText(/RS School/i);

    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute(
      'href',
      'https://github.com/GrigorevVic'
    );

    expect(rsSchoolLink).toBeInTheDocument();
    expect(rsSchoolLink).toHaveAttribute(
      'href',
      'https://rs.school/courses/reactjs'
    );
  });

  test('renders a link to home', () => {
    renderComponent();
    const homeLink = screen.getByText(/Home/i);
    expect(homeLink).toBeInTheDocument();
    expect(homeLink.closest('a')).toHaveAttribute('href', '/');
  });
});
