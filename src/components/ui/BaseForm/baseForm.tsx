"use client"
import styles from './baseForm.module.scss';
import BaseInput from '../BaseInput/baseInput';
import { memo, useEffect, useState } from 'react';
import { FormInputsDataWrapper } from '@/context/formInputsData';
import { useComponentsState } from '@/context/stepsComponents';
import { useFormBuildData } from '@/context/formBuildData';

const BaseForm = ({ children, buildDataProps }: { children?: any, buildDataProps?: any }) => {
  let id = 1;
  const { steps, getCurrentActiveIndex } = useComponentsState();
  const {
    personalFormFields,
    educationFormFields,
    workFormFields,
    projectFormFields,
    skillFormFields,
    templateFormFields,
  } = useFormBuildData();
  const [data, setTheData] = useState<any>(personalFormFields);
  useEffect(() => {
    switch (steps[getCurrentActiveIndex()].dataType) {
      case 'personal':
        setTheData(personalFormFields);
        break;
      case 'work':
        setTheData(workFormFields);
        break;
      case 'education':
        setTheData(educationFormFields);
        break;
      case 'project':
        setTheData(projectFormFields);
        break;
      case 'skill':
        setTheData(skillFormFields);
        break;
      case 'template':
        setTheData(templateFormFields);
        break;
    }

  }, [steps]);
  return (
    <>
      <FormInputsDataWrapper>
        {children}
        {steps.length !== 0 && <h1>{steps[getCurrentActiveIndex()].dataType}</h1>}
        <div className={styles.form}>
          {/* <BaseUploadImage v-if="withImageUpload" className="block" /> */}
          {
            data.length !== 0 && data.map((input: any, index: number) => {
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
