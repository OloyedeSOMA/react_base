import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import CustomWrapper from "../CustomComponents/CustomWrapper";
import NavSection from "../NavSection";
import ThirdPartySocials from "../ThirdPartySocials";
import FormComponent from "../FormComponent";
import CustomInput from "../CustomComponents/CustomInput";
const Register=()=>{
    const initialValues={email: '', password: ''};
    const navigate = useNavigate();

    const handleSignUp = async (values, { setSubmitting, setErrors }) => {
    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      const user = userCred.user;

      //  Pass id to multistep form
      navigate('/form', { state: { uid: user.uid, email: user.email } });
      console.log("user successfully signed up");
      action.resetForm();
      
    } catch (err) {
      setErrors({ general: err.message });
    } finally {
      setSubmitting(false);
    }
  };
    // const handleSignUp=(values)=>{
    //     console.log(`${JSON.stringify(values, null, 2)}`);
    //     navigate('/Form')
    // }
    return(
        <CustomWrapper>
            <NavSection />
            <ThirdPartySocials />
            <h4 className="text-gray-500 ml-10 mt-5">or register with email</h4>
            <FormComponent initialValues={initialValues} buttonText="Create Account" loadingText="signing in..." onSubmit={handleSignUp} navigate={navigate} />
            
             <CustomInput type="checkbox" className="ml-10 mr-1 " />Send me news and promotions
             <div className="w-8/10 mx-auto mt-7">
                <p className="text-[#1A0710A6] text-center">By continuing I agree with the <span className={`text-blue-400 `}>Terms & Conditions,<br/> Privacy Policy</span></p>
             </div>
            
        </CustomWrapper>
    );
};
export default Register;