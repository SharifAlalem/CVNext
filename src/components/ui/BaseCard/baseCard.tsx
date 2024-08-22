import { useComponentsState } from '@/context/stepsComponents';
import styles from './baseCard.module.scss';
import { FaChevronLeft,FaChevronRight } from 'react-icons/fa';
import { useRef } from 'react';
import { ArrayOfSteps } from '@/types';
import { BaseCardProps } from '@/types';

const BaseCard = (props:BaseCardProps) => {
    
    const { steps, setSteps , currentActiveIndex } = useComponentsState();
    const { currentIndexProps = currentActiveIndex, componentsProps = steps, setComponentsProps = setSteps } = props;

    const tempArray = useRef<ArrayOfSteps[]>([...componentsProps]);

    const prev = () => {
        tempArray.current = tempArray.current.map(component => ({...component, active:false}));
        tempArray.current[currentIndexProps-1].active = true;
        setComponentsProps(tempArray.current)
    }

    const next = () => {
        tempArray.current = tempArray.current.map(component => ({...component, active:false}));
        tempArray.current[currentIndexProps+1].active = true;
        setComponentsProps(tempArray.current)
    }
    
    return ( 
        <section id={styles.baseCard} data-testid="base-card-section">
            {props.children}
            <div className={styles.actions + ' ' + (currentIndexProps === 0 || currentIndexProps === 5 ? styles.actionsCenter : '')}>
                {
                currentIndexProps !== 0 && (
                    <button id={styles.prev} onClick={prev} aria-label="back">
                        <FaChevronLeft/>
                    </button>
                )
                }
                {
                currentIndexProps !== 5 && (
                    <button id={styles.next} onClick={next} aria-label="next">
                        <FaChevronRight/>
                    </button>
                )
                }
            </div>
        </section>
     );
}
 
export default BaseCard;