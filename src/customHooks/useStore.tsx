"use client"
import { useSyncExternalStore } from "react";
import { useFormInputsData } from "@/context/formInputsData";
// Custom hook to communicate with store
export const useStore = (selector:any) => {
    const {getData,setData,subscribeData} = useFormInputsData();
    if (!subscribeData || !getData || !setData) {
        throw "Error";
      }
    // subscribe the store and get the value from store
    const state = useSyncExternalStore(subscribeData, () => selector(getData()) ,typeof window === 'undefined' ? () => selector(getData()) : () => selector(getData()));
  
    return [state, setData]; // [store value, set method]
};

