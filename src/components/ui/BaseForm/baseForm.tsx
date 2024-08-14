"use client"
import styles from './baseForm.module.scss';
import BaseInput from '../BaseInput/baseInput';
import { memo } from 'react';
import { FormInputsDataWrapper } from '@/context/formInputsData';

const BaseForm = ({ children,formFields}: { children: any, formFields: any }) => {
  let id = 1;
  return (
    <>
    <FormInputsDataWrapper>
      {children}
      <div className={styles.form}>
        {/* <BaseUploadImage v-if="withImageUpload" className="block" /> */}
        {
          formFields.length !== 0 && formFields.map((input: any,index:number) => {
            return (
              <BaseInput
                name={input.inputName}
                showLabel={input.type === 'date' ? true : false}
                placeholder={input.placeholder}
                label={input.label}
                type={input.type}
                classType={input.width}
                formId={id}
                key={index}
                value={input.inputName || ''}
              >
              </BaseInput>
            )

          })
        }
      </div>
      </FormInputsDataWrapper>
    </>
  );
}

export default memo(BaseForm);
