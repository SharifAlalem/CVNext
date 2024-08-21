import { useComponentsState } from '@/context/stepsComponents';
import styles from './baseCard.module.scss';
import { FaChevronLeft,FaChevronRight } from 'react-icons/fa';
import { useRef } from 'react';
import { ArrayOfSteps } from '@/types';

const BaseCard = ({currentIndexProps,componentsProps,setComponentsProps,children}:{currentIndexProps?:any,componentsProps?:any,setComponentsProps?:any,children?:any}) => {
    
    const { steps, setSteps , getCurrentActiveIndex } = useComponentsState();

    const tempArray = useRef<ArrayOfSteps[]>([...steps]);

    const prev = () => {
        tempArray.current = tempArray.current.map(component => ({...component, active:false}));
        tempArray.current[getCurrentActiveIndex()-1].active = true;
        setSteps(tempArray.current)
    }

    const next = () => {
        tempArray.current = tempArray.current.map(component => ({...component, active:false}));
        tempArray.current[getCurrentActiveIndex()+1].active = true;
        setSteps(tempArray.current)
    }
    
    return ( 
        <section id={styles.baseCard}>
            {children}
            <div className={styles.actions + ' ' + (getCurrentActiveIndex() === 0 || getCurrentActiveIndex() === 5 ? styles.actionsCenter : '')}>
                {
                getCurrentActiveIndex() !== 0 && (
                    <button id={styles.prev} onClick={prev} aria-label="next">
                        <FaChevronLeft/>
                    </button>
                )
                }
                {
                getCurrentActiveIndex() !== 5 && (
                    <button id={styles.next} onClick={next} aria-label="back">
                        <FaChevronRight/>
                    </button>
                )
                }
            </div>
        </section>
     );
}
 
export default BaseCard;