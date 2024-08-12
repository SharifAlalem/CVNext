import styles from './baseForm.module.scss';
import BaseInput from '../BaseInput/baseInput';

const BaseForm = ({ children, data }: { children: any, data: any }) => {

  let id = 1;
  return (
    <div>
      {children}
      <div className={styles.form}>
        {/* <BaseUploadImage v-if="withImageUpload" className="block" /> */}
        {
          data.length !== 0 && data.map((input: any,index:number) => {
            return (
              <BaseInput
                showLabel={input.type === 'date' ? true : false}
                placeholder={input.placeholder}
                label={input.label}
                type={input.type}
                classType={input.width}
                formId={id}
                key={index}
                value={input[input.inputName]}
                inputName={input.inputName}
              ></BaseInput>
            )

          })
        }

      </div>
    </div >
  );
}

export default BaseForm;
