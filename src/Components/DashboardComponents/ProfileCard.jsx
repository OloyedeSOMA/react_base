import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import imageBar from '../../assets/imageBar.png'

const ProfileCard = () => {
  return (
    <div className="mt-6 flex items-center gap-3 px-2 py-2 rounded-lg cursor-pointer hover:bg-gray-100">
      <img
        src={imageBar} // Replace with real image if needed
        alt="User"
        className="w-10 h-10 rounded-full object-cover"
      />
      <div className="hidden md:flex flex-col">
        <span className="font-semibold text-sm text-black">Evano</span>
        <span className="text-gray-500 text-xs">Project Manager</span>
      </div>
      <ExpandMoreIcon className="ml-auto text-gray-500" />
    </div>
  );
};

export default ProfileCard;

