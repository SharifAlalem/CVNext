import { ReactElement } from 'react';

export type ArrayOfSteps = {
  id: number;
  icon: ReactElement;
  active: boolean;
}

export type StepsContext = {
  steps: ArrayOfSteps[],
  setSteps: Function
}

export type ArrayOfComponents= {
  id: number;
  component: string;
  active: boolean
}

export type ComponentsContext = {
  components: ArrayOfComponents[],
  setComponents: Function
}

export type FloatingIcons = {
  icon:  ReactElement;
}
