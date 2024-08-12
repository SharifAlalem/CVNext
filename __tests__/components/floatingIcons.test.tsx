
import {render,screen } from '@testing-library/react';
import FloatingIcons from '@/components/FloatingIcons/floatingIcons';

describe('Page', () => {
  it('renders a floating Icons as SVGs', () => {
    render(<FloatingIcons/>)
    const floatingIcons = screen.getByTestId('iconsWrapper')
    expect(floatingIcons.getElementsByTagName('svg').length).toBe(12);
  })
})

describe('Page', () => {
    it('the floating Icons has the icon css class', () => {
      render(<FloatingIcons/>)
      const floatingIcons = screen.getByTestId('iconsWrapper')
      const svgsArray = Array.from(floatingIcons.getElementsByTagName('span'));
      svgsArray.map((span:any)=>{
        expect(span).toHaveClass('icon');
      })
    })
})
