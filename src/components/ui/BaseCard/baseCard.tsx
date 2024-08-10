import styles from './baseCard.module.scss';
import { FaChevronLeft,FaChevronRight } from 'react-icons/fa';
const BaseCard = ({currentIndex,components,setComponents,children}:{currentIndex:any,components:any,setComponents:any,children:any}) => {
    
    const prev = () => {
        const newComponentsArray = [...components];
        newComponentsArray.map((component)=>component.active = false);
        newComponentsArray[currentIndex-1].active = true;
        setComponents(newComponentsArray)
    }

    const next = () => {
        const newComponentsArray = [...components];
        newComponentsArray.map((component)=>component.active = false);
        newComponentsArray[currentIndex+1].active = true;
        setComponents(newComponentsArray)
    }
    
    return ( 
        <section id="baseCard">
            {children}
            <div className={styles.actions + ' ' + (currentIndex === 0 || currentIndex === 5 ? styles.actionsCenter : '')}>
                {
                currentIndex !== 0 && (
                    <button id="prev" onClick={prev} aria-label="next">
                        <FaChevronLeft/>
                    </button>
                )
                }
                {
                currentIndex !== 5 && (
                    <button id="next" onClick={next} aria-label="back">
                        <FaChevronRight/>
                    </button>
                )
                }
            </div>
        </section>
     );
}
 
export default BaseCard;