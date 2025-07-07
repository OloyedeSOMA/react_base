
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";


import image2 from "../../assets/Ellipse 58.png";
import image3 from  "../../assets/Ellipse 59.png";
import image4 from  "../../assets/Ellipse 60.png";
import image5 from  "../../assets/Ellipse 61.png";
import image6 from  "../../assets/Ellipse 62.png";

const avatars = [
  image2,
  image3,
  image4,
  image5,
  image6
  
];

const AnalyticsComponent = () => {
  return (
    <div id="analytics" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-[#FFFFFF] p-4 rounded-xl shadow-sm  w-[90%] md-w-full sm-w-full mx-auto mb-5     p-4   divide-x-4 divide-gray-100 " >
      {/* Total Customers */}
      <div className="flex items-center gap-4  pr-4">
        <div className="bg-green-100 p-3 rounded-full text-green-600">
          <PeopleAltOutlinedIcon />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm text-gray-500">Total Customers</p>
          <h2 className="text-xl font-semibold">5,423</h2>
          <span className="flex items-center text-xs text-green-600">
            <ArrowDropUpIcon fontSize="small" />
            16% this month
          </span>
        </div>
      </div>

      {/* Members */}
      <div className="flex items-center gap-4  pr-4">
        <div className="bg-green-100 p-3 rounded-full text-green-600">
          <PersonOutlinedIcon />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm text-gray-500">Members</p>
          <h2 className="text-xl font-semibold">1,893</h2>
          <span className="flex items-center text-xs text-red-500">
            <ArrowDropDownIcon fontSize="small" />
            1% this month
          </span>
        </div>
      </div>

      {/* Active Now */}
      <div className="flex items-center gap-4">
        <div className="bg-green-100 p-3 rounded-full text-green-600">
          <ComputerOutlinedIcon />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm text-gray-500">Active Now</p>
          <h2 className="text-xl font-semibold">189</h2>
          <div className="flex mt-1 space-x-[-10px]">
            {avatars.map((src, idx) => (
              <img
                key={idx}
                src={src}
                className="w-6 h-6 rounded-full border-2 border-white"
                alt={`avatar-${idx}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsComponent;
