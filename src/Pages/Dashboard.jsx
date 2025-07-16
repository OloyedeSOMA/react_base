import { useState } from 'react';
import {useAuth} from '../Components/Context/AuthContext';
import SideBar from '../Components/DashboardComponents/SideBar';
import Header from '../Components/DashboardComponents/Header';
import AnalyticsComponent from '../Components/DashboardComponents/AnalyticsComponent';
import  Table from '../Components/DashboardComponents/Table';
import MenuIcon from "@mui/icons-material/Menu";



const Dashboard = () => {
  
  const { user: loggedUser} = useAuth();
  console.log(JSON.stringify(loggedUser, null, 2))
  const userEmail = loggedUser.email;
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  


  return (
    <div id="dashBoardContainer"className="flex flex-col sm:flex-row min-h-screen w-full bg-[#F7F9FE] ">
      <SideBar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className="flex flex-col flex-1 w-full">
        {/* Mobile hamburger */}
        <div className="sm:hidden p-4">
          <button onClick={() => setIsSidebarOpen(true)}>
            <MenuIcon fontSize="large" />
          </button>
        </div>
        <Header user={userEmail} />

        <AnalyticsComponent/>
        <main id="tableMain" className="px-3 sm:px-6 h-screen w-full max-w-[95%] mx-auto mt-5">
          <Table />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
