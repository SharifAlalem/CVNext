"use client"
import { createContext, useContext, useState } from "react";
import { ComponentsContext } from "../types";
import { FaUser, FaGraduationCap, FaBriefcase, FaProjectDiagram, FaMedal, FaFileSignature } from "react-icons/fa";

const componentsContext = createContext<ComponentsContext>({ steps: [], setSteps: () => { } });

export const ComponentsWrapper = ({ children }: { children: React.ReactNode; }) => {
  const [steps, setSteps] = useState([
    { id:1,icon: <FaUser />, dataType: 'personal' , active:true },
    { id:2,icon: <FaGraduationCap />, dataType: 'education' , active:false },
    { id:3,icon: <FaBriefcase />, dataType: 'work' , active:false },
    { id:4,icon: <FaProjectDiagram />, dataType: 'project' , active:false },
    { id:5,icon: <FaMedal />, dataType: 'skill' , active:false },
    { id:6,icon: <FaFileSignature />, dataType: 'template' , active:false },
  ]);
  const value = { steps, setSteps };
  return (
    <componentsContext.Provider value={value}>
      {children}
    </componentsContext.Provider>
  )
}

export const useComponentsState = () => {
  return useContext(componentsContext);
}
