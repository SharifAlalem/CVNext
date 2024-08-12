import styles from './baseForm.module.scss';
import BaseInput from '../BaseInput/baseInput';

const BaseForm = ({ children,formFields,formData,setFormData}: { children: any, formFields: any,formData:any,setFormData:any }) => {
  let id = 1;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,name:string) => {
    const value = e.target.value;
    setFormData((prevData:any) => {
      if (prevData[name] !== value) {
        return {
          ...prevData,
          [name]: value,
        };
      }
      return prevData;
    });
  };


  return (
    <div>
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
                value={formData[input.inputName] || ''}
                update={(e)=>handleChange(e,input.inputName)}
              >
              </BaseInput>
            )

          })
        }

      </div>
    </div >
  );
}

export default BaseForm;
