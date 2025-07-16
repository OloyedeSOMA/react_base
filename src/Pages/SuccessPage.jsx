import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import success from '../assets/success.png'
import CustomButton from '../Components/CustomComponents/CustomButton';
import CustomWrapper from '../Components/CustomComponents/CustomWrapper';
const SuccessPage=()=>{
    const navigate = useNavigate();
    const loginNavigateHandler=()=>{
        navigate('/Login');
    }
    return(
        <CustomWrapper>
                <div className="bg-[#EF498F24] flex justify-center">
                    <img src={success} />
                    <CloseIcon className="mt-5"/>
                    
                </div>
                <div className="mx-auto w-9/10 p-4 m-4 ">
                    <h3 className="text-[35px] font-bold">You are succesfully registered!</h3>
                </div>
                <div className="mx-auto w-9/10 p-4 m-4 ">
                    <CustomButton type="submit" className="bg-[#5932EA] mx-auto w-10/10 h-[70px] text-white text-lg font-medium rounded-xl" onClick={loginNavigateHandler}>Go to Login</CustomButton>
                </div>
        </CustomWrapper>
        
    );
};
export default SuccessPage