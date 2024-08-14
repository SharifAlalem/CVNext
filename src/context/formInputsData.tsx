"use client";
import { createContext, useContext,useRef, useCallback } from "react";
import { FormsInputsDataContextType } from "@/types";

const FormInputsDataContext = createContext<FormsInputsDataContextType>({
  getData: () => {},
  setData:() => {},
  subscribeData:() => {}
});

export const FormInputsDataWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const formData = useRef<Record<string, string>>({});
  // getter method which retrieves store value
  const getData = useCallback(() => formData.current, []);

  // store the callback which subscribes the store
  const subscribers = useRef(new Set());

  // setter method which update the store value and calls the subscribe function
  const setData = useCallback((value:any) => {
  formData.current = { ...formData.current, ...value };
    return subscribers.current.forEach((callback:any) => callback());
  }, []);

  // subscribe method which adds callback to subscribers 
  // and returns the cleanup function
  const subscribeData = useCallback((callback:any) => {
    subscribers.current.add(callback);
    return () => subscribers.current.delete(callback);
  }, []);

  const value = {
    getData,
    setData,
    subscribeData
  };
  return (
    <FormInputsDataContext.Provider value={value}>
      {children}
    </FormInputsDataContext.Provider>
  );
};

export const useFormInputsData = () => {
  return useContext(FormInputsDataContext);
};
