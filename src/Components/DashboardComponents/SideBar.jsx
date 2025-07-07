import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PortraitOutlinedIcon from '@mui/icons-material/PortraitOutlined';
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import CloseIcon from "@mui/icons-material/Close";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const Sidebar = ({ isOpen, onClose }) => {
  const navItems = [
    { label: "Dashboard", icon: <DashboardOutlinedIcon /> },
    { label: "Product", icon: <ShoppingCartOutlinedIcon />,icon2: <ChevronRightIcon /> },
    { label: "Customers", icon: <PortraitOutlinedIcon />, icon2: <ChevronRightIcon />  },
    { label: "Income", icon: <AttachMoneyOutlinedIcon />, icon2: <ChevronRightIcon /> },
    { label: "Promote", icon: <VerifiedOutlinedIcon />, icon2: <ChevronRightIcon /> },
    { label: "Help", icon: <LiveHelpOutlinedIcon />, icon2: <ChevronRightIcon /> },
  ];

  return (
    <>
    <aside id="sideBar" className="hidden sm:block w-20 md:w-60 bg-[#FFFFFF] p-4 ">
      <div className="text-2xl font-bold mb-8 hidden md:block">Dashboard</div>
      <nav className="space-y-4">
        {navItems.map(({ label, icon, icon2 }, i) => (
          <div
            key={i}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-100 ${
              label === "Customers" ? "bg-[#5932EA] text-white" : ""
            }`}
          >
            <span>{icon}</span>
            <span className="hidden md:inline">{label}</span>
            <span className=" ml-auto">{icon2}</span>
          </div>
        ))}
      </nav>
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
        <div className="text-xl font-bold mb-6">Dashboard</div>
        <nav className="space-y-4">
          {navItems.map(({ label, icon,icon2 }, i) => (
            <div
              key={i}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-100 ${
                label === "Customers" ? "bg-[#5932EA] text-white" : ""
              }`}
            >
              <span>{icon}</span>
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
