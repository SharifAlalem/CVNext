"use client"
import styles from './baseInput.module.scss';
import { memo } from 'react';
import { useStore } from '@/customHooks/useStore';
import { BaseInputProps } from '@/types';

const BaseInput = ( props : BaseInputProps) => {
  let checkedPresent = true;
  const [fieldValue, setStore] = props.value ? useStore((store:any) => store[props.value]): ['noValue',()=>{}];
  return (
    <div className={`${styles.formGroup} ${props.type !== 'image' ? styles[`${props.classType}`] : 'block'}`}>
          <label className={styles.label}>
            { props.showLabel !== false && <p>{props.placeholder}</p> }
            {/* <BaseRatingInput
                      v-if="type === 'rating'"
                      :maxNum="5"
                      :formId="formId"
                      className="block"
                      :value="modelValue"
                    ></BaseRatingInput> */}

            {
              (props.type !== 'textarea') ? (
                <input
                  name={props.name}
                  className={`${styles.full} ${styles.input}`}
                  type={props.type}
                  placeholder={props.placeholder}
                  value={fieldValue || ''}
                  onChange={e => setStore({[props.value]: e.target.value})}
                  autoComplete="on"
                />
              )

                :
                (
                  <textarea
                    name={props.name}
                    className={`${styles.full} ${styles.textarea}`}
                    placeholder={props.placeholder}
                    value={fieldValue || ''}
                    onChange={e => setStore({[props.value]: e.target.value})}
                    autoComplete="on"
                  >
                  </textarea>
                )
            }
          </label>
      {
        props.label === 'End date' && (
          <div className="checkbox">
            <input value={fieldValue || ''} name={props.name} className={`${styles.full} ${styles.input}`} onChange={e => setStore({[props.value]: e.target.value})} />
            <label className={styles.label}> Present</label>
          </div>
        )
      }
    </div>
  );
}

export default memo(BaseInput);