"use client"
import { createContext, useContext, useState } from "react";
import { FormBuildDataContextType } from "@/types";

const FormBuildDataContext = createContext<FormBuildDataContextType>({ data: [], setData: () => { } });

export const FormBuildDataWrapper = ({ children }: { children: React.ReactNode; }) => {
  const [data, setData] = useState([
    {
      inputName: "fname",
      fname: "",
      type: "string",
      placeholder: " first name ",
      width: "medium",
    },
    {
      inputName: "lname",
      lname: "",
      type: "string",
      placeholder: " last name ",
      width: "medium",
    },
    {
      inputName: "phone",
      phone: "",
      type: "string",
      placeholder: " phone number ",
      width: "full",
    },
    {
      inputName: "email",
      email: "",
      type: "email",
      placeholder: " email address ",
      width: "full",
    },
    {
      inputName: "streetAndNum",
      streetAndNum: "",
      type: "string",
      placeholder: " street name and number ",
      width: "full",
    },
    {
      inputName: "city",
      city: "",
      type: "string",
      placeholder: " city ",
      width: "medium",
    },
    {
      inputName: "country",
      country: "",
      type: "string",
      placeholder: " country ",
      width: "medium",
    },
    {
      inputName: "dateOfBirth",
      dateOfBirth: "",
      type: "date",
      placeholder: "Date of birth",
      width: "full",
    },
    {
      inputName: "profession",
      profession: "",
      type: "string",
      placeholder: " profession ",
      width: "full",
    },
    {
      inputName: "summary",
      summary: "",
      type: "textarea",
      placeholder: "summary",
      width: "full",
    },
  ]);
  const value = { data, setData };
  return (
    <FormBuildDataContext.Provider value={value}>
      {children}
    </FormBuildDataContext.Provider>
  )
}

export const useFormBuildData = () => {
  return useContext(FormBuildDataContext);
}
