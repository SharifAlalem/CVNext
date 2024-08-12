import BaseForm from "../ui/BaseForm/baseForm";
import { useFormBuildData } from "@/context/formBuildData";

const PersonalInfos = () => {
    const {data} = useFormBuildData();

    return ( 
        <BaseForm data={data}><h1>Personal Information</h1></BaseForm>
     );
}
 
export default PersonalInfos;