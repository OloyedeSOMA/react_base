import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik,Form} from "formik";
// import { db } from '../firebase/firebase';
// import { doc, updateDoc } from 'firebase/firestore';

import PersonalInfoForm from "./steps/PersonalInfoForm";
import AddressSearchBlock from "./steps/AddressSearchBlock";
import AddressForm from "./steps/AddressForm";
import { StepFormSchema } from "../utils/ValidationSchema";

import CloseIcon from '@mui/icons-material/Close';

import CustomWrapper from "../CustomComponents/CustomWrapper";

// const StepForm=[<PersonalInfoForm/>, <AddressSearchBlock/>, <AddressForm />]



const MultiStepForm=()=>{
    
    const navigate = useNavigate();
    

    const[step, setStep] = useState(0);
    
   

    const RenderStep=(step)=>{
        switch(step){
            case 0:
               return <PersonalInfoForm/>;
            case 1:
                return <AddressSearchBlock/>;
            case 2:
                return <AddressForm />
            default:
                 return <div> Form Not Found</div>;
        }
    };
    return(
        <CustomWrapper>
            <div  className="max-w-full p-5 rounded-xl  max-h-full lg:max-h-screen bg-red">
                <ul  className="flex  w-full justify-start text-xl text-black">
                    <li className="p-1  text-lg font-medium md:p-1">{step<1 ? "Personal information": "Add Address"}</li>
                    <li className="p-1 text-green-400 text-lg mx-auto font-medium md:p-1">{step<2 ? `${step+2} of 3`: "3 of 3"}</li>
                    <li className="p-1  ml-auto md:p-1"><CloseIcon /></li>
                </ul>
            </div>
            <Formik initialValues={{
                name:'',
                gender:'',
                phoneCode:'+598',
                phone:'',
                birthday:'',
                searchAddress:'',
                address:'',
                apartment:'',
                city:'',
                state:'',
                zipcode:'',
            }}
            validationSchema={StepFormSchema[step]?? null}
            
            onSubmit={(values, actions)=>{
                
                if(step < 2){
                    setStep((step)=> step + 1)
                    console.log(step)
                }
                else{
                    setTimeout(() => {
                        console.log(`Final Form ${JSON.stringify(values, null, 2)}`);
                        actions.resetForm(); 
                        actions.setSubmitting(false); 
                        navigate('/success');
                        }, 5000); 
                }
            }}>
            
            {()=>(
                <Form className="p-5 w-full">
                    {RenderStep(step)}
                    {/* {StepForm[step]} */}
                    {/* <PersonalInfoForm />  */}
                    {/* <AddressSearchBlock/>  */}
                    {/* <AddressForm /> */}
                </Form>
            )}
            </Formik>
        </CustomWrapper>
    );
}
export default MultiStepForm;