// import {Field,ErrorMessage  } from "formik";
import { useFormikContext } from "formik";
import CustomButton from "../../CustomComponents/CustomButton";

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const PersonalInfoForm=()=>{
    const {values,errors,touched,handleChange,handleBlur} = useFormikContext();
    return(
        <>
            <div className="relative w-full max-w-sm mx-auto">
                <input
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="peer w-full border border-gray-400 
                    rounded-xl px-3 pt-6 pb-2 focus:outline-none focus:ring-2 focus:ring-[#5932EA]"
                    placeholder=""
                />
                <label
                    className="absolute left-3 top-2 text-gray-500 text-sm transition-all duration-200
                    peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600"
                >
                    Full name
                </label>
                {touched.name && errors.name && (
                    <p className="error text-red-500 text-xs">{errors.name}</p>
                )}
            </div>
            
            <div className="w-full grid grid-cols-2 md-grid-cols-2 sm-grid-cols-2 mx-auto mt-5">
                <label className="font-medium text-large text-[#1A0710A6]">Gender:</label>
                <div className="w-full flex justify-around ">
                   <label className="font-medium text-large mr-3">
                        <input className=""
                            type="radio"
                            name="gender"
                            value="male"
                            checked={values.gender === "male"}
                            onChange={handleChange}
                        />
                        Male
                    </label>
                    <label className="font-medium text-large mr-3">
                        <input className=""
                            type="radio"
                            name="gender"
                            value="female"
                            checked={values.gender === "female"}
                            onChange={handleChange}

                        />
                        Female
                    </label>
                
                </div>
                
            </div>
                {touched.gender && errors.gender && (
                    <p className="w-8/10 mx-auto error text-red-500 text-xs ">{errors.gender}</p>
                )}

            <p className="text-sm font-medium text-gray-500 mt-5"> <InfoOutlinedIcon /> This phone number and birthday are only visible to you</p>
            <div className="space-y-6 mt-5">
            {/*  Phone Code + Phone Input */}
            <div className="flex items-center gap-2 w-full max-w-sm mx-auto">
                {/* Phone Code */}
                <select
                name="phoneCode"
                value={values.phoneCode}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-24 h-12 border border-gray-300 rounded-lg px-2 text-sm text-[#1A0710A6] focus:outline-none focus:ring-2 focus:ring-[#5932EA]"
                >
                <option value="+234">+598</option>
                <option value="+598">+234</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
                </select>

                {/* Phone Number */}
                <div className="flex-1 relative">
                    <input
                        name="phone"
                        type="text"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Phone number"
                        className="w-full h-12 border border-gray-300 rounded-lg px-3 text-sm text-[#1A0710A6] focus:outline-none focus:ring-2 focus:ring-[#5932EA]"
                    />
                    {touched.phone && errors.phone && (
                        <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
                    )}
                </div>
            </div>

      {/* Birthday Input  This is Optional when filling */}
      <div className="relative w-full max-w-sm mx-auto">
        <input
          type="date"
          name="birthday"
          value={values.birthday}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Birthday"
          className="peer w-full h-12 border border-gray-300 rounded-lg px-3 pr-12 text-sm text-[#1A0710A6] focus:outline-none focus:ring-2 focus:ring-[#5932EA]"
        />

        
        <span className="absolute top-1/3 right-20 -translate-y-1/2 text-xs text-gray-400 pointer-events-none">
          Optional
        </span>

        
        {/* <CalendarMonthIcon className="absolute top-1/3 right-11 -translate-y-1/2 text-gray-500" /> */}

        {touched.birthday && errors.birthday ? (
            <div className="error text-red-500">{errors.birthday}</div>
            ) : (
            <p className="text-sm text-gray-500">Let us know your birthday so as to not miss a gift</p>
        )}
      </div>
    </div>

           
            <div className={`mx-auto w-9/10 p-4 m-4 `}>
                <CustomButton type="submit" className={`bg-[#5932EA] mx-auto w-10/10 h-[70px] text-white text-lg font-medium rounded-xl cursor-pointer`}> Save Information</CustomButton>
            </div>
        </>
    );
}
export default PersonalInfoForm;
