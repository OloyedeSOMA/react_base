import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import NavSection from "../NavSection";
import ThirdPartySocials from "../ThirdPartySocials";
import FormComponent from "../FormComponent";
import CustomInput from "../CustomComponents/CustomInput";
import CustomWrapper from '../CustomComponents/CustomWrapper';

const Login=()=>{
    const initialValues={email: '', password: ''};

    const navigate = useNavigate();

    const handleLogin = async (values, { setSubmitting, setErrors }) => {
        try {
        await signInWithEmailAndPassword(auth, values.email, values.password);
        
        navigate('/dashboard'); 
        action.resetForm();
        } catch (err) {
        setErrors({ general: err.message });
        } finally {
        setSubmitting(false);
        }
    };

    
    return(
        <CustomWrapper>
            <NavSection />
            <ThirdPartySocials />
            <h4 className="text-gray-500 ml-10 mt-5">or Login with email</h4>
            <FormComponent initialValues={initialValues} onSubmit={handleLogin} buttonText="Login to Dashboard" loadingText="Logging in"/>
            
             <CustomInput type="checkbox" className="ml-10 mr-1 mb-10" /> Remember me
             
        </CustomWrapper>
    );
};
export default Login