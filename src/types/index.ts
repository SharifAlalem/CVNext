import { ReactElement } from "react";

export type ArrayOfSteps = {
  id: number;
  icon: ReactElement;
  active: boolean;
};

export type StepsContext = {
  steps: ArrayOfSteps[];
  setSteps: Function;
};

export type ArrayOfComponents = {
  id: number;
  component: ReactElement | string;
  active: boolean;
};

export type ComponentsContext = {
  components: ArrayOfComponents[];
  setComponents: Function;
};

export type FloatingIcons = {
  icon: ReactElement;
};

export type FormData = {
  inputName: string;
  fname?: string;
  lname?: string
  type: string;
  placeholder: string;
  width: string;
  phone?:string;
  email?:string;
  streetAndNum?: string;
  city?: string;
  country?: string;
  dateOfBirth?: string;
  profession?: string;
  summary?: string;
  label?: string;
};

export type FormBuildDataContextType = {
  data: FormData[];
  setData: Function;
};
