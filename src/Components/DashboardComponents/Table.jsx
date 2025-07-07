
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SearchIcon from "@mui/icons-material/Search";


const customers = [
  {
    name: "Jane Cooper",
    company: "Microsoft",
    phone: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active",
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive",
  },
  {
    name: "Jane Cooper",
    company: "Microsoft",
    phone: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active",
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive",
  },
  {
    name: "Jane Cooper",
    company: "Microsoft",
    phone: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active",
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive",
  },
  
];

const Table = () => {
  return (
    <div id="table" className="bg-[#FFFFFF] p-4 rounded-2xl shadow-md ">
      <div className="flex justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold">All Customers</h3>
          <p className="text-sm text-green-500">Active Members</p>
        </div>
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <div className="relative w-full sm:w-64">
                    <SearchIcon className="absolute top-1/2 left-3 -translate-y-1/2 bg-[#F7F9FE] text-gray-400" fontSize="small" />
                    <input
                      type="text"
                      placeholder="Search"
                      className="pl-10 pr-4 py-2 w-8/10 bg-[#F7F9FE] rounded-lg "
                    />
            </div>
            <select className=" bg-[#F7F9FE] rounded h-10 text-gray-400 text-sm">
              <option >Sort by: Newest</option>
              <option >Sort by: Oldest</option>
            </select>
          </div>  
      </div>

      <div className="overflow-x-auto ">
        <table className="min-w-full text-sm ">
          <thead className="text-gray-500 border-b border-b-gray-200">
            <tr>
              <th className="text-left py-2">Customer Name</th>
              <th className="text-left py-2">Company</th>
              <th className="text-left py-2">Phone Number</th>
              <th className="text-left py-2">Email</th>
              <th className="text-left py-2">Country</th>
              <th className="text-left py-2">Status</th>
            </tr>
          </thead>
          <tbody className="">
            {customers.map((c, i) => (
              <tr key={i} className="border-b  border-b-gray-200 hover:bg-gray-50">
                <td className="py-2 font-medium">{c.name}</td>
                <td className="py-2">{c.company}</td>
                <td className="py-2">{c.phone}</td>
                <td className="py-2">{c.email}</td>
                <td className="py-2">{c.country}</td>
                <td className="py-2">
                  <span
                    className={`px-4 py-2 rounded-sm border text-xs font-semibold ${
                      c.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {c.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination UI */}
      <div className="flex flex-wrap justify-between items-center mt-4 text-sm">
        <p className="text-gray-500">Showing data 1 to 8 of 256K entries</p>
        <div className="flex items-center gap-2">
          <button className="border rounded px-2 py-1 text-gray-600 hover:bg-gray-100">
            <KeyboardArrowLeftIcon fontSize="small" />
          </button>
          <button className="bg-[#5932EA] text-white px-3 py-1 rounded">1</button>
          <button className="px-3 py-1 rounded hover:bg-gray-200">2</button>
          <button className="px-3 py-1 rounded hover:bg-gray-200">3</button>
          <span className="px-2">...</span>
          <button className="px-3 py-1 rounded hover:bg-gray-200">40</button>
          <button className="border rounded px-2 py-1 text-gray-600 hover:bg-gray-100">
            <KeyboardArrowRightIcon fontSize="small" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
