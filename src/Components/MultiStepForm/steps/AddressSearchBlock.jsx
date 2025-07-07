

import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PeopleIcon from "@mui/icons-material/People";
import { useFormikContext } from "formik";

const AddressSearchBlock = () => {
  const {values,errors,touched,handleChange,handleBlur} = useFormikContext();
  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      
      <div>
        <input
          type="text"
          placeholder="Search for address"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5932EA] text-sm"
          readOnly/>
        <p className="mt-1 text-xs text-gray-500">
          Your address is not visible to other users
        </p>
      </div>

      {/*  Location Buttons */}
      <div className="flex items-center gap-4 mb-20">
        <button
          type="submit"
          className="flex cursor-pointer items-center gap-2 border border-[#5932EA] text-[#5932EA] rounded-full px-4 py-1 text-sm font-medium hover:bg-[#f3f0ff]"
        >
          <LocationOnIcon fontSize="small" />
          Use current location
        </button>

        <button
          type="submit"
          className="border cursor-pointer border-[#5932EA] text-[#5932EA] rounded-full px-4 py-1 text-sm font-medium hover:bg-[#f3f0ff]"
        >
          Add manually
        </button>
      </div>

      
      <div className="mt-25">
        <h3 className="font-medium text-gray-800 mb-2">Sharing your address shows:</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex items-center gap-2">
            <PeopleIcon fontSize="small" className="text-[#1A0710A6]" />
            People near you
          </li>
          <li className="flex items-center gap-2">
            <AccessTimeIcon fontSize="small" className="text-[#1A0710A6]" />
            Estimated delivery time
          </li>
          <li className="flex items-center gap-2">
            <AttachMoneyIcon fontSize="small" className="text-[#1A0710A6]" />
            Estimate shipping costs
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AddressSearchBlock;

