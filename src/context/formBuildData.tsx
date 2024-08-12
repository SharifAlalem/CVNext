"use client"
import { createContext, useContext, useState } from "react";
import { FormBuildDataContextType } from "@/types";
import useFormInput from "@/hooks/useFormInput";
import { FormData } from "@/types";

const FormBuildDataContext = createContext<FormBuildDataContextType>({ formFields: [], setFormFields: () => { },formData:{},setFormData:()=>{} });

export const FormBuildDataWrapper = ({ children }: { children: React.ReactNode; }) => {
  const [formFields, setFormFields] = useState<FormData[]>([
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

  const [formData, setFormData] = useState<Record<string, string>>({});

  const value = { formFields, setFormFields, formData, setFormData };
  return (
    <FormBuildDataContext.Provider value={value}>
      {children}
    </FormBuildDataContext.Provider>
  )
}

export const useFormBuildData = () => {
  return useContext(FormBuildDataContext);
}
