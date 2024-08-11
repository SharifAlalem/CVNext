import styles from './baseInput.module.scss';

const BaseInput = ({showLabel,placeholder,label,type,classType,formId,value}:{showLabel:boolean,placeholder:string,label:string,type:string,classType:string,formId:number,value:string}) => {
  let checkedPresent = true;  
  return ( 
        <div className={`${styles.formGroup} ${type !== 'image' ? styles[`${classType}`] : 'block'}`}>
        {
          showLabel !== false && (
            <div className={styles.label}>
              <p>{ placeholder }</p>
            </div>
          )
        }
      
        <div className={styles.formElement}>
          {/* <BaseRatingInput
            v-if="type === 'rating'"
            :maxNum="5"
            :formId="formId"
            className="block"
            :value="modelValue"
          ></BaseRatingInput> */}

        {
          type !== 'textarea' && (
          <input
            className={`${styles.full} ${styles.input}`}
            type={type}
            placeholder={placeholder}
          />
          )
        }

        {
          type === 'textarea' && (
            <textarea
              className={`${styles.full} ${styles.textarea}`}
              placeholder={placeholder}
              ></textarea>
          )
        }
        
        {
          label === 'End date' && (
          <div className="checkbox" v-if="">
            <input className={`${styles.full} ${styles.input}`} />
            <label className={styles.label}> Present</label>
          </div>
          )
        }
        </div>
      </div>
     );
}
 
export default BaseInput;