"use client"
import { createContext, useContext, useState } from "react";
import { ComponentsContext } from "../types";
import PersonalInfos from "@/components/PersonalInfos/personalInfos";

const componentsContext = createContext<ComponentsContext>({ components: [], setComponents: () => { } });

export const ComponentsWrapper = ({ children }: { children: React.ReactNode; }) => {
  const [components, setComponents] = useState([
    { id:1, component: <PersonalInfos/> , active:true },
    { id:2, component: '' , active:false },
    { id:3, component: '' , active:false },
    { id:4, component: '' , active:false },
    { id:5, component: '' , active:false },
    { id:6, component: '' , active:false },
  ]);
  const value = { components, setComponents };
  return (
    <componentsContext.Provider value={value}>
      {children}
    </componentsContext.Provider>
  )
}

export const useComponentsState = () => {
  return useContext(componentsContext);
}
