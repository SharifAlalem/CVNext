"use client"
import styles from './baseInput.module.scss';
import { memo } from 'react';
import { useStore } from '@/customHooks/useStore';

const BaseInput = ({ name, value, showLabel, placeholder, label, type, classType, formId }: { name: string, value: any, showLabel?: boolean, placeholder?: string, label: string, type: string, classType?: string, formId?: number }) => {
  let checkedPresent = true;
  const [fieldValue, setStore] = useStore((store:any) => store[value]);
  return (
    <div className={`${styles.formGroup} ${type !== 'image' ? styles[`${classType}`] : 'block'}`}>
          <label className={styles.label}>
            { showLabel !== false && <p>{placeholder}</p> }
            {/* <BaseRatingInput
                      v-if="type === 'rating'"
                      :maxNum="5"
                      :formId="formId"
                      className="block"
                      :value="modelValue"
                    ></BaseRatingInput> */}

            {
              (type !== 'textarea') ? (
                <input
                  name={name}
                  className={`${styles.full} ${styles.input}`}
                  type={type}
                  placeholder={placeholder}
                  value={fieldValue || ''}
                  onChange={e => setStore({[value]: e.target.value})}
                  autoComplete="on"
                />
              )

                :
                (
                  <textarea
                    name={name}
                    className={`${styles.full} ${styles.textarea}`}
                    placeholder={placeholder}
                    value={fieldValue || ''}
                    onChange={e => setStore({[value]: e.target.value})}
                    autoComplete="on"
                  >
                  </textarea>
                )
            }
          </label>
      {
        label === 'End date' && (
          <div className="checkbox">
            <input value={fieldValue || ''} name={name} className={`${styles.full} ${styles.input}`} onChange={e => setStore({[value]: e.target.value})} />
            <label className={styles.label}> Present</label>
          </div>
        )
      }
    </div>
  );
}

export default memo(BaseInput);