
import BaseInput from '@/components/ui/BaseInput/baseInput';
import {render,screen } from '@testing-library/react';

describe('BaseInput', () => {
  it('renders an input tag', () => {
    render(<BaseInput name="test"  label="Test" type="text"/>)
    const inputText = screen.getByRole('textbox');
    expect(inputText).toBeInTheDocument();
  })
})

describe('BaseInput', () => {
  it('renders an input tag with text type', () => {
    render(<BaseInput name="test" label="Test" type="text" />)
    const inputText = screen.getByRole('textbox');
    expect(inputText.getAttribute('type')).toBe('text');
  })
})

describe('BaseInput', () => {
  it('renders an textarea tag', () => {
    render(<BaseInput name="test" label="Test" type="textarea" />)
    const textArea = screen.getByRole('textbox');
    expect(textArea.tagName).toBe('TEXTAREA');
  })
})
