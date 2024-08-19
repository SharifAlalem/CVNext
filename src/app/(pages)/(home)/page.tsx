"use client";
import styles from "./page.module.scss";
import { useComponentsState } from "@/context/stepsComponents";
import ProgressBar from "@/components/Progress/progress";
import BaseCard from "@/components/ui/BaseCard/baseCard";
import { useEffect, useState } from "react";
import { useFormBuildData } from "@/context/formBuildData";
import { FormData } from "@/types";
import BaseForm from "@/components/ui/BaseForm/baseForm";

const Home = () => {
  const { steps, setSteps } = useComponentsState();
  const {
    personalFormFields,
    educationFormFields,
    workFormFields,
    projectFormFields,
    skillFormFields,
    templateFormFields,
  } = useFormBuildData();
  const [data,setTheData] = useState<FormData[]>(personalFormFields);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    setCurrentIndex(steps.findIndex((component) => component.active === true));
    switch(steps[currentIndex].dataType){
        case 'personal': 
        setTheData(personalFormFields); 
            break;
        case 'work': 
        setTheData(workFormFields);
            break;
        case 'education': 
        setTheData(educationFormFields);
            break;
        case 'project': 
        setTheData(projectFormFields);
            break;
        case 'skill': 
        setTheData(skillFormFields);
            break;
        case 'template': 
        setTheData(templateFormFields);
            break;
    }

  }, [steps,currentIndex]);
  return (
    <main className={styles.main}>
      <ProgressBar steps={steps} setSteps={setSteps} />
        <BaseCard
          currentIndex={currentIndex}
          components={steps}
          setComponents={setSteps}
        >
            <BaseForm formFields={data}>
                <h1>{steps.length !== 0 && steps[currentIndex].dataType}</h1>
            </BaseForm>
        </BaseCard>
    </main>
  );
};

export default Home;
