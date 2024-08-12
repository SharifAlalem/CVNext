"use client"
import {ChangeEventHandler} from 'react';
import styles from './baseInput.module.scss';


const BaseInput = ({name,value,showLabel,placeholder,label,type,classType,formId,update}:{name:string,value:any,showLabel?:boolean,placeholder?:string,label:string,type:string,classType?:string,formId?:number,update:ChangeEventHandler<HTMLInputElement|HTMLTextAreaElement>}) => {
  let checkedPresent = true;  
  return ( 
        <div className={`${styles.formGroup} ${type !== 'image' ? styles[`${classType}`] : 'block'}`}>
        {
          showLabel !== false && (
            <label className={styles.label}>
              <p>{ placeholder }</p>
            </label>
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
            name={name}
            className={`${styles.full} ${styles.input}`}
            type={type}
            placeholder={placeholder}
            value={value}  
            onChange={e => update(e)}
          />
          )
        }

        {
          type === 'textarea' && (
            <textarea
              name={name}
              className={`${styles.full} ${styles.textarea}`}
              placeholder={placeholder}
              value={value}
              onChange={e => update(e)}
              >
              </textarea>
          )
        }
        
        {
          label === 'End date' && (
          <div className="checkbox">
            <input  value={value} name={name} className={`${styles.full} ${styles.input}`}  onChange={e => update(e)}/>
            <label className={styles.label}> Present</label>
          </div>
          )
        }
        </div>
      </div>
     );
}
 
export default BaseInput;