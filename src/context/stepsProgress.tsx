"use client"
import { createContext, useContext, useState } from "react";
import { StepsContext } from "../types";
import { FaUser, FaGraduationCap, FaBriefcase, FaProjectDiagram, FaMedal, FaFileSignature } from "react-icons/fa";

const ProgressSteps = createContext<StepsContext>({ steps: [], setSteps: () => { } });

export const StepsWrapper = ({ children }: { children: React.ReactNode; }) => {
  const [steps, setSteps] = useState([
    {
      id: 1,
      icon: <FaUser />,
      active: false
    },
    {
      id: 2,
      icon: <FaGraduationCap />,
      active: false
    },
    {
      id: 3,
      icon: <FaBriefcase />,
      active: false
    },
    {
      id: 4,
      icon: <FaProjectDiagram />,
      active: false
    },
    {
      id: 5,
      icon: <FaMedal />,
      active: false
    },
    {
      id: 6,
      icon: <FaFileSignature />,
      active: false
    }
  ]);
  const value = { steps, setSteps };
  return (
    <ProgressSteps.Provider value={value}>
      {children}
    </ProgressSteps.Provider>
  )
}

export const useProgressSteps = () => {
  return useContext(ProgressSteps);
}
