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
  type: string;
  placeholder: string;
  width: string;
  label?: string;
};

export type FormBuildDataContextType = {
  formFields: FormData[];
  setFormFields: Function;
  formData: Record<string, string>;
  setFormData: Function;
};
