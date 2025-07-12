import { NavLink } from "react-router-dom"
import CloseIcon from '@mui/icons-material/Close';

const NavSection=()=>{
    return(
        <>
            <div  className="max-w-full p-5 rounded-xl  max-h-full lg:max-h-screen bg-red">
                <ul  className="flex w-full justify-start text-xl text-black">
                    <li className="p-4"><NavLink to="/" className={({isActive})=>
                        `relative px-3 py-2 ${
                        isActive? "text-[#1A0710D9] after:content-[''] after:absolute after:left-3  after:-bottom-1 after:h-[2px] after:w-[70px] after:bg-red-500 after:rounded-sm after:transition-all "
                        : "text-[#1A0710A6]"
                    }`
                    }>Register</NavLink></li>
                    <li className="p-4"><NavLink to="/Login" className={({isActive})=>
                        `relative px-3 py-2 ${
                        isActive? "text-[#1A0710D9] after:content-[''] after:absolute after:left-3  after:-bottom-1 after:h-[2px] after:w-[70px] after:bg-red-500 after:rounded-sm after:transition-all "
                        : "text-[#1A0710A6]"
                    }`}>Login</NavLink></li>
                    <li className={`p-4  ml-auto`}><CloseIcon /></li>
                </ul>
            </div>

            
        </>
    )
};
export default NavSection;
