"use client"
import { useComponentsState } from '@/context/stepsComponents';
import styles from './progress.module.scss';
import { ProgressProps } from '@/types';

const ProgressBar = ( props: ProgressProps ) => {
    const { steps, setSteps } = useComponentsState();
    const { stepsProps = steps, setStepsProps = setSteps } = props;

    const setActive = (index: number) => {
        const newSteps = [...stepsProps];
        newSteps.map(step => step.active = false);
        newSteps[index].active = true;
        setStepsProps(newSteps);
    }

    return (
        <div id={styles.progressBar}>
            <ul id={styles.progressList}>
                {stepsProps.length !== 0 && stepsProps.map((step: any, index: number) => {
                    return <li onClick={() => setActive(index)} className={styles.step + ' ' + (step.active === true ? styles.active : ' ')} key={step.id}>
                        <span> {step.icon} </span>
                    </li>
                })}
            </ul>
        </div>
    );
}

export default ProgressBar;