
import {render,screen } from '@testing-library/react';
import Header from '@/components/layout/Header/header';

describe('Page', () => {
  it('renders a header', () => {
    render(<Header />)
    const heading = screen.getByRole('banner')
    expect(heading).toBeInTheDocument();
  })
})

describe('Page', () => {
  it('renders a header with transparent class', () => {
    render(<Header />)
    const heading = screen.getByRole('banner')
    expect(heading).toHaveClass("transparent"); 
  })
})

describe('Page', () => {
  it('renders a nav inside the header', () => {
    render(<Header />)
    const nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument();
  })
})

describe('Page', () => {
  it('renders a Home Link with / href', () => {
    render(<Header />)
    const homeLink = screen.getByRole('link',{name:/Home/i});
    expect(homeLink).toBeInTheDocument();
    expect(homeLink.getAttribute("href")).toBe("/");
  })
})

describe('Page', () => {
  it('renders a About Link with /about href', () => {
    render(<Header />)
    const aboutLink = screen.getByRole('link',{name:/About/i});
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink.getAttribute("href")).toBe("/about");
  })
})

describe('Page', () => {
  it('renders a About Link with / href', () => {
    render(<Header />)
    const logoLink = screen.getByRole('link',{name:/ReactCV Maker/i});
    expect(logoLink).toBeInTheDocument();
    expect(logoLink.getAttribute("href")).toBe("/");
  })
})