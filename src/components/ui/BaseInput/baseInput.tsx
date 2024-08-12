import { useFormBuildData } from '@/context/formBuildData';
import styles from './baseInput.module.scss';
import { FormData } from '@/types';

const BaseInput = ({inputName,showLabel,placeholder,label,type,classType,formId,value}:{inputName:any,showLabel?:boolean,placeholder?:string,label:string,type:string,classType?:string,formId?:number,value:string}) => {
  let checkedPresent = true;  
  const {data,setData} = useFormBuildData();

  const updateValue = (value:string) => {
    let newData = [...data]
    let foundInputIndex = data.findIndex((input)=>input.inputName === inputName);
    newData[foundInputIndex][inputName as keyof FormData] = value;
    setData(newData);
  }

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
            className={`${styles.full} ${styles.input}`}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={e => updateValue(e.target.value)}
          />
          )
        }

        {
          type === 'textarea' && (
            <textarea
              className={`${styles.full} ${styles.textarea}`}
              placeholder={placeholder}
              value={value}
              onChange={e => updateValue(e.target.value)}
              >
            
              </textarea>
          )
        }
        
        {
          label === 'End date' && (
          <div className="checkbox">
            <input className={`${styles.full} ${styles.input}`} value={value}  onChange={e => updateValue(e.target.value)}/>
            <label className={styles.label}> Present</label>
          </div>
          )
        }
        </div>
      </div>
     );
}
 
export default BaseInput;