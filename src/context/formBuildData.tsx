"use client";
import { createContext, useContext, useState } from "react";
import { FormsBuildDataContextType } from "@/types";
import { FormData } from "@/types";

const FormBuildDataContext = createContext<FormsBuildDataContextType>({
  personalFormFields: [],
  setPersonalFormFields: () => {},
  educationFormFields: [],
  setEducationFormFields: () => {},
  workFormFields: [],
  setWorkFormFields: () => {},
  projectFormFields: [],
  setProjectFormFields: () => {},
  skillFormFields: [],
  setSkillFormFields: () => {},
  templateFormFields: [],
  setTemplateFormFields: () => {},
  formData: {},
  setFormData: () => {},
});

export const FormBuildDataWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [personalFormFields, setPersonalFormFields] = useState<FormData[]>([
    {
      inputName: "fname",
      type: "string",
      placeholder: " first name ",
      width: "medium",
    },
    {
      inputName: "lname",
      type: "string",
      placeholder: " last name ",
      width: "medium",
    },
    {
      inputName: "phone",
      type: "string",
      placeholder: " phone number ",
      width: "full",
    },
    {
      inputName: "email",
      type: "email",
      placeholder: " email address ",
      width: "full",
    },
    {
      inputName: "streetAndNum",
      type: "string",
      placeholder: " street name and number ",
      width: "full",
    },
    {
      inputName: "city",
      type: "string",
      placeholder: " city ",
      width: "medium",
    },
    {
      inputName: "country",
      type: "string",
      placeholder: " country ",
      width: "medium",
    },
    {
      inputName: "dateOfBirth",
      type: "date",
      placeholder: "Date of birth",
      width: "full",
    },
    {
      inputName: "profession",
      type: "string",
      placeholder: " profession ",
      width: "full",
    },
    {
      inputName: "summary",
      type: "textarea",
      placeholder: "summary",
      width: "full",
    },
  ]);
  const [educationFormFields, setEducationFormFields] = useState<FormData[]>([ 
    {
      inputName: "degreeTitle",
      type: "string",
      placeholder: " Degree Title",
      width: "full",
    },
    {
      inputName: "college",
      type: "string",
      placeholder: " College / University",
      width: "full",
    },
    {
      inputName: "startDate",
      type: "date",
      placeholder: "Start date",
      width: "medium",
    },
    {
      inputName: "endDate",
      type: "date",
      placeholder: "End date",
      width: "medium",
    }
  ]);
  const [workFormFields, setWorkFormFields] = useState<FormData[]>([
    {
      inputName: "jobTitle",
      type: "string",
      placeholder: " job Title",
      width: "full",
    },
    {
      inputName: "companyName",
      type: "string",
      placeholder: " Company Name",
      width: "full",
    },
    {
      inputName: "startDate",
      type: "date",
      placeholder: "Start date",
      width: "medium",
    },
    {
      inputName: "endDate",    
      type: "date",
      placeholder: "End date",
      width: "medium",
    },
    {
      inputName: "summary",     
      type: "textarea",
      placeholder: " Summary",
      width: "full",
    }
  ]);
  const [projectFormFields, setProjectFormFields] = useState<FormData[]>([
    {
      inputName: "projectTitle",
      type: "string",
      placeholder: " Project Title",
      width: "full",
    },
    {
      inputName: "companyName",
      type: "string",
      placeholder: " Company Name",
      width: "full",
    },
    {
      inputName: "startDate",
      type: "date",
      placeholder: "Start date",
      width: "medium",
    },
    {
      inputName: "endDate",
      type: "date",
      placeholder: "End date",
      width: "medium",
    },
    {
      inputName: "description",
      type: "textarea",
      placeholder: " Description",
      width: "full",
    },
    {
      inputName: "link",
      type: "url",
      placeholder: " link",
      width: "full",
    },
  ]);
  const [skillFormFields, setSkillFormFields] = useState<FormData[]>([
    {
      inputName: "skillTitle",
      type: "string",
      placeholder: " Skill Title",
      width: "full",
    },
    {
      inputName: "rating",
      type: "rating",
      placeholder: "",
      width: "full",
    },
  ]);
  const [templateFormFields, setTemplateFormFields] = useState<FormData[]>([
    {
      templateId: 1,
      imageUrl: "skillTitle",
      selected: false,
    },
    {
      templateId: 2,
      imageUrl: "skillTitle",
      selected: false,
    },
  ]);

  const [formData, setFormData] = useState<Record<string, string>>({});

  const value = {
    personalFormFields,
    setPersonalFormFields,
    educationFormFields,
    setEducationFormFields,
    workFormFields,
    setWorkFormFields,
    projectFormFields,
    setProjectFormFields,
    skillFormFields,
    setSkillFormFields,
    templateFormFields,
    setTemplateFormFields,
    formData,
    setFormData,
  };
  return (
    <FormBuildDataContext.Provider value={value}>
      {children}
    </FormBuildDataContext.Provider>
  );
};

export const useFormBuildData = () => {
  return useContext(FormBuildDataContext);
};
