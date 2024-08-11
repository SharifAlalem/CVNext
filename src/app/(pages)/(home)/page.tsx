"use client"
import styles from './page.module.scss';
import { useProgressSteps } from '@/context/stepsProgress';
import { useComponentsState } from '@/context/stepsComponents';
import ProgressBar from '@/components/Progress/progress';
import BaseCard from '@/components/ui/BaseCard/baseCard';
import { useEffect, useState } from 'react';
import { FormBuildDataWrapper } from "@/context/formBuildData";

const Home = () => {
    const {steps,setSteps} = useProgressSteps();
    const {components,setComponents} = useComponentsState();
    const [currentIndex,setCurrentIndex] = useState(0);
    useEffect(()=>{
        setCurrentIndex(components.findIndex((component)=>component.active === true));
    },[components])
    return ( 
        <main className={styles.main}> 
            <ProgressBar steps={steps} setSteps={setSteps} />
            <FormBuildDataWrapper>
                <BaseCard currentIndex={currentIndex} components={components} setComponents={setComponents}>
                    <h1>{components[currentIndex].component}</h1>
                </BaseCard>
            </FormBuildDataWrapper>
        </main>
     );
}
 
export default Home;