
import CloseIcon from "@mui/icons-material/Close";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import settingsIcon from '../../assets/setting 1.png';
import UpgradeCard from "./UpgradeCard";
import squareIcon from '../../assets/3d-square 1.png';
import keyIcon from '../../assets/key-square.png'; 
import userIcon from '../../assets/user-square 1.png';
import incomeIcon from '../../assets/wallet-money 2.png' 
import promoteIcon from '../../assets/discount-shape 1.png'; 
import helpIcon from '../../assets/message-question 1.png'; 
 
import ProfileCard from "./ProfileCard";
const Sidebar = ({ isOpen, onClose }) => {
  const navItems = [
    { label: "Dashboard", icon: keyIcon,  },
    { label: "Product", icon: squareIcon, icon2: <ChevronRightIcon /> },
    { label: "Customers", icon: userIcon, icon2: <ChevronRightIcon />  },
    { label: "Income", icon: incomeIcon, icon2: <ChevronRightIcon /> },
    { label: "Promote", icon: promoteIcon, icon2: <ChevronRightIcon /> },
    { label: "Help", icon: helpIcon, icon2: <ChevronRightIcon /> },
  ];

  return (
    <>
    <aside id="sideBar" className="hidden sm:block w-20 md:w-60 bg-[#FFFFFF] p-4 ">
      <div className="text-2xl font-bold mb-8 hidden md:block">
        <div className=" flex gap-2  text-xl font-bold mb-6"><img src={settingsIcon} className="w-7 h-7"/> Dashboard</div>
      </div>
      <nav className="space-y-4">
        {navItems.map(({ label, icon, icon2 }, i) => (
          <div
            key={i}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-100 ${
              label === "Customers" ? "bg-[#5932EA] text-white" : ""
            }`}
          >
            <img src={icon}/>
            <span className="hidden md:inline">{label}</span>
            <span className=" ml-auto">{icon2}</span>
          </div>
        ))}
      </nav>
      <UpgradeCard />
      <ProfileCard />
    </aside>

    
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 p-4 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:hidden`}
      >
        {/* Close Icon */}
        <div className="flex justify-end mb-4">
          <button onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
        <div className=" flex gap-2 text-xl font-bold mb-6"><img src={settingsIcon} className="w-6 h-6"/> Dashboard</div>
        <nav className="space-y-4">
          {navItems.map(({ label, icon,icon2 }, i) => (
            <div
              key={i}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-100 ${
                label === "Customers" ? "bg-[#5932EA] text-white" : ""
              }`}
            >
              <img src={icon}/>
              <span>{label}</span>
              <span className="ml-auto">{icon2}</span>
            </div>
          ))}
        </nav>
        
        
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 sm:hidden"
          onClick={onClose}
        />
      )}
    </>
  );
};

export default Sidebar;
