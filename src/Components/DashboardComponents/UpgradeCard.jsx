import CustomButton from "../CustomComponents/CustomButton";
const UpgradeCard = () => {
  return (
    <div className="mt-10 mx-2 md:mx-0 bg-gradient-to-br from-purple-400 to-blue-700 text-white p-4 rounded-xl text-center">
      <p className="text-sm font-medium mb-4">Upgrade to <span className="font-bold">PRO</span> to get access all Features!</p>
      <CustomButton className="bg-white text-blue-700 font-semibold text-sm py-2 px-4 rounded-full transition hover:opacity-90">
        Get Pro Now!
      </CustomButton>
    </div>
  );
};

export default UpgradeCard;