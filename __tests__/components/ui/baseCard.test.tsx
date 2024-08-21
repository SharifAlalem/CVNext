
import BaseCard from '@/components/ui/BaseCard/baseCard';
import { render, screen } from '@testing-library/react';
import { useState } from 'react';
import { FaUser, FaGraduationCap, FaBriefcase, FaProjectDiagram, FaMedal, FaFileSignature } from "react-icons/fa";

describe('Page', () => {
  it('renders a section with base-card-section testId tag', () => {
    render(
      <BaseCard currentIndexProps={1}>
        <h1>Personal</h1>
      </BaseCard>
    )
    const baseCardSection = screen.getByTestId('base-card-section');
    expect(baseCardSection).toBeInTheDocument();
  })
});

describe('Page', () => {
  it('renders children in the right place (first child in section)', () => {
    render(
      <BaseCard currentIndexProps={1}>
        <h1>Personal</h1>
      </BaseCard>
    )
    const baseCardSection = screen.getByTestId('base-card-section');
    expect(baseCardSection.children[0].textContent).toBe('Personal');
  })
});

describe('Page', () => {
  it('renders next & prev buttons in the correct order', () => {
    render(
      <BaseCard currentIndexProps={1}>
        <h1>Personal</h1>
      </BaseCard>
    )
    const navigationsButtons = screen.getAllByRole('button');
    expect(navigationsButtons[0]).toBeInTheDocument();
    expect(navigationsButtons[0].tagName).toBe('BUTTON');
    expect(navigationsButtons[0].getAttribute('aria-label')).toBe('back');
    expect(navigationsButtons[1]).toBeInTheDocument();
    expect(navigationsButtons[1].tagName).toBe('BUTTON');
    expect(navigationsButtons[1].getAttribute('aria-label')).toBe('next');
  })
});

describe('Page', () => {
  it('renders only next button in the correct order if it was the first step', () => {
    render(
      <BaseCard currentIndexProps={0}>
        <h1>Personal</h1>
      </BaseCard>
    )
    const navigationsButtons = screen.getAllByRole('button');
    expect(navigationsButtons[0]).toBeInTheDocument();
    expect(navigationsButtons[0].tagName).toBe('BUTTON');
    expect(navigationsButtons[0].getAttribute('aria-label')).toBe('next');
    expect(navigationsButtons[1]).toBeUndefined();
  })
});

describe('Page', () => {
  it('renders only prev button in the correct order if it was the last step', () => {
    render(
      <BaseCard currentIndexProps={5}>
        <h1>Personal</h1>
      </BaseCard>
    )
    const navigationsButtons = screen.getAllByRole('button');
    expect(navigationsButtons[0]).toBeInTheDocument();
    expect(navigationsButtons[0].tagName).toBe('BUTTON');
    expect(navigationsButtons[0].getAttribute('aria-label')).toBe('back');
    expect(navigationsButtons[1]).toBeUndefined();
  })
});
