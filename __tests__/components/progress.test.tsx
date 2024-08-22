
import {render,screen } from '@testing-library/react';
import ProgressBar from '@/components/Progress/progress';
import { FaUser, FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { ArrayOfSteps } from '@/types';

describe('Page', () => {
  it('renders a progress bar as unordered list', () => {
    render(<ProgressBar stepsProps={[]} setStepsProps={()=>{}}/>)
    const progress = screen.getByRole('list')
    expect(progress).toBeInTheDocument();
  })
})

describe('Page', () => {
    it('the progress bar has Three steps', () => {
      const steps = [{id:1,icon:<FaUser/>,active:false},{id:2,icon:<FaGraduationCap/>,active:false},{id:3,icon:<FaBriefcase/>,active:false}] as ArrayOfSteps[];
      render(<ProgressBar stepsProps={steps} setStepsProps={()=>{}}/>)
      const progress = screen.getByRole('list');
      const listItems = progress.children.length;
      expect(listItems).toBe(3);
    })
})

describe('Page', () => {
    it('each step in the progress bar has one icon', () => {
      const steps = [{id:1,icon:<FaUser/>,active:false},{id:2,icon:<FaGraduationCap/>,active:false},{id:3,icon:<FaBriefcase/>,active:false}] as ArrayOfSteps[];
      render(<ProgressBar stepsProps={steps} setStepsProps={()=>{}}/>)
      const progress = screen.getByRole('list');
      const progressSteps = progress.getElementsByTagName('span');
      expect(progressSteps.length).toBe(3);
    })
})
