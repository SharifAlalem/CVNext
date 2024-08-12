
import BaseInput from '@/components/ui/BaseInput/baseInput';
import {render,screen } from '@testing-library/react';

describe('Page', () => {
  it('renders an input tag', () => {
    render(<BaseInput name="test"  label="Test" type="text" value="someValue" update={()=>{}}/>)
    const inputText = screen.getByRole('textbox');
    expect(inputText).toBeInTheDocument();
  })
})

describe('Page', () => {
  it('renders an input tag with text type', () => {
    render(<BaseInput name="test" label="Test" type="text" value="someValue" update={()=>{}}/>)
    const inputText = screen.getByRole('textbox');
    expect(inputText.getAttribute('type')).toBe('text');
  })
})

describe('Page', () => {
  it('renders an input tag with someValue value', () => {
    render(<BaseInput name="test" label="Test" type="text" value="someValue" update={()=>{}} />)
    const inputText = screen.getByRole('textbox');
    expect(inputText.getAttribute('value')).toBe('someValue');
  })
})

describe('Page', () => {
  it('renders an textarea tag', () => {
    render(<BaseInput name="test" label="Test" type="textarea" value="someValue" update={()=>{}}/>)
    const textArea = screen.getByRole('textbox');
    expect(textArea.tagName).toBe('TEXTAREA');
  })
})
