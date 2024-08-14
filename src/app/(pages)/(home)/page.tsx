"use client";
import styles from "./page.module.scss";
import { useComponentsState } from "@/context/stepsComponents";
import ProgressBar from "@/components/Progress/progress";
import BaseCard from "@/components/ui/BaseCard/baseCard";
import { useEffect, useState } from "react";
import { FormBuildDataWrapper } from "@/context/formBuildData";
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
    formData,
    setFormData,
  } = useFormBuildData();
  const [data,setData] = useState<FormData[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    setCurrentIndex(steps.findIndex((component) => component.active === true));
    switch(steps[currentIndex].dataType){
        case 'personal': 
            setData(personalFormFields); 
            break;
        case 'work': 
            setData(workFormFields);
            break;
        case 'education': 
            setData(educationFormFields);
            break;
        case 'project': 
            setData(projectFormFields);
            break;
        case 'skill': 
            setData(skillFormFields);
            break;
        case 'template': 
            setData(templateFormFields);
            break;
    }

  }, [steps,currentIndex]);
  return (
    <main className={styles.main}>
      <ProgressBar steps={steps} setSteps={setSteps} />
      <FormBuildDataWrapper>
        <BaseCard
          currentIndex={currentIndex}
          components={steps}
          setComponents={setSteps}
        >
            <BaseForm formData={formData} formFields={data} setFormData={setFormData}>
                <h1>{steps.length !== 0 && steps[currentIndex].dataType}</h1>
            </BaseForm>
        </BaseCard>
      </FormBuildDataWrapper>
    </main>
  );
};

export default Home;
