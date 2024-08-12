
import {render,screen } from '@testing-library/react';
import Footer from '@/components/layout/Footer/footer';

describe('Page', () => {
  it('renders a footer', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument();
  })
})

describe('Page', () => {
  it('renders a footer with paragraph and text inside', () => {
    render(<Footer />)
    const paragraphTag = screen.getByRole('paragraph');
    expect(paragraphTag).toBeInTheDocument();
    expect(paragraphTag).toHaveTextContent('ReactCV Copyright © 2024 Sharif Alalem - All rights reserved');
  })
})