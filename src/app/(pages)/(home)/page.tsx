"use client"
import styles from './page.module.scss';
import { useProgressSteps } from '@/context/stepsProgress';
import { useComponentsState } from '@/context/stepsComponents';
import ProgressBar from '@/components/Progress/progress';
import BaseCard from '@/components/ui/BaseCard/baseCard';
import { useEffect, useState } from 'react';

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
            <BaseCard currentIndex={currentIndex} components={components} setComponents={setComponents}>
                <h1>{components[currentIndex].id}</h1>
            </BaseCard>
        </main>
     );
}
 
export default Home;