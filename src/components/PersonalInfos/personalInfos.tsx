import BaseForm from "../ui/BaseForm/baseForm";
import { useFormBuildData } from "@/context/formBuildData";

const PersonalInfos = () => {
    const {formFields,formData,setFormData} = useFormBuildData();
      
    return ( 
        <BaseForm formData={formData} formFields={formFields} setFormData={setFormData}><h1>Personal Information</h1></BaseForm>
     );
}
 
export default PersonalInfos;