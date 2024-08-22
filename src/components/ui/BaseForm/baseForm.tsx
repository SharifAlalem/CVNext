"use client"
import styles from './baseForm.module.scss';
import BaseInput from '../BaseInput/baseInput';
import { memo, useEffect, useState } from 'react';
import { FormInputsDataWrapper } from '@/context/formInputsData';
import { useComponentsState } from '@/context/stepsComponents';
import { useFormBuildData } from '@/context/formBuildData';
import { BaseFormProps } from '@/types';

const BaseForm = (props: BaseFormProps) => {
  let id = 1;
  const { steps, currentActiveIndex } = useComponentsState();
  const {
    personalFormFields,
    educationFormFields,
    workFormFields,
    projectFormFields,
    skillFormFields,
    templateFormFields,
  } = useFormBuildData();

  const { currentIndexProps = currentActiveIndex, stepsProps = steps, buildDataProps = personalFormFields } = props;

  const [data,setTheData] = useState<any>(buildDataProps);

  useEffect(() => {
    switch (stepsProps?.[currentIndexProps as number].dataType) {
      case 'personal':
        setTheData(buildDataProps);
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

  }, [stepsProps]);
  return (
    <>
      <FormInputsDataWrapper>
        {props.children}
        {stepsProps?.length !== 0 && <h1>{stepsProps?.[currentActiveIndex as number].dataType}</h1>}
        <form className={styles.form} data-testid="base-form">
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
        </form>
      </FormInputsDataWrapper>
    </>
  );
}

export default memo(BaseForm);
