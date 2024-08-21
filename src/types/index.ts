import { ReactElement } from "react";

export type ArrayOfSteps = {
  id: number;
  icon:  ReactElement | string;
  dataType: string;
  active: boolean;
};

export type ComponentsContext = {
  steps: ArrayOfSteps[];
  setSteps: Function;
  getCurrentActiveIndex: Function;
};

export type FloatingIcons = {
  icon: ReactElement;
};

export type FormData = {
  inputName?: string;
  type?: string;
  placeholder?: string;
  width?: string;
  label?: string;
  templateId?:number;
  imageUrl?:string;
  selected?:boolean;
};

export type FormsBuildDataContextType = {
  personalFormFields: FormData[];
  setPersonalFormFields: Function;
  educationFormFields: FormData[];
  setEducationFormFields: Function;
  workFormFields: FormData[];
  setWorkFormFields: Function;
  projectFormFields: FormData[];
  setProjectFormFields: Function;
  skillFormFields: FormData[];
  setSkillFormFields: Function;
  templateFormFields: FormData[];
  setTemplateFormFields: Function;
};

export type FormsInputsDataContextType = {
  getData: any;
  setData: any;
  subscribeData: any;
};


export type ProgressProps = {
  stepsProps?: ArrayOfSteps[],
  setStepsProps?: Function
}
