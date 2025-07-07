import AppleIcon from '@mui/icons-material/Apple';
//import FacebookIcon from '@mui/icons-material/Facebook';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';

const ThirdPartySocials=()=>{
    return(
        <>
            <div className="flex flex-row justify-start ml-7"  >
                <div className="w-10 h-10 rounded-full bg-[#F6F6F6] mr-7 " ><AppleIcon font-size="large" sx={{ fontSize: 35 }}className="mx-auto p-1"/> </div>
                <div className="w-10 h-10 rounded-full bg-[#F6F6F6] mr-7 "><FacebookOutlinedIcon font-size="large" sx={{ fontSize: 35 }}className="mx-auto p-1 "color="primary"/>  </div>
                <div className="w-10 h-10 rounded-full bg-[#F6F6F6] mr-7 "><GoogleIcon font-size="large" sx={{ fontSize: 35 }}className="mx-auto p-1"/>  </div>
            </div>
        </>
    );
}
export default ThirdPartySocials;