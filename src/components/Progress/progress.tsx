"use client"
import styles from './progress.module.scss';
import { ArrayOfSteps } from '@/types';

const ProgressBar = ({steps,setSteps}:{steps:ArrayOfSteps[],setSteps:Function}) => {
    
    const setActive = (index:number) => {
        const newSteps = [...steps];
        newSteps.map(step=>step.active = false);
        newSteps[index].active = true;
        setSteps(newSteps);
    }

    return ( 
        <div id={styles.progressBar}>
            <ul id={styles.progressList}>
                {steps.length !== 0 && steps.map((step:any,index:number)=>{
                    return <li onClick={() => setActive(index)} className={styles.step + ' ' + (step.active === true ? styles.active : ' ')} key={step.id}>
                    <span> {step.icon} </span>
                </li>
                })}
            </ul>
        </div>
     );
}
 
export default ProgressBar;