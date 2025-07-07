
import SearchIcon from "@mui/icons-material/Search";


const Header = (props) => {
  return (
    <header className="flex flex-wrap justify-between items-center bg-transparent gap-y-2 px-4 py-4">
      <div className="text-lg ">Hello {props.user} 👋🏼</div>
      <div className="relative w-1/2 md:w-1/3 search">
        <SearchIcon className="absolute top-1/2 left-3 -translate-y-1/2 bg-[#FFFFFF] text-gray-400" fontSize="small" />
        <input
          type="text"
          placeholder="Search"
          className="pl-10 pr-4 py-2 w-7/10 bg-[#FFFFFF] rounded-lg "
        />
      </div>
    </header>
  );
};

export default Header;
