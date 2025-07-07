import { useFormikContext } from "formik";
import CustomButton from "../../CustomComponents/CustomButton";

const AddressForm = () => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    isSubmitting
  } = useFormikContext();

  return (
    <div className="space-y-5 max-w-md mx-auto">
      
      <div>
        <label htmlFor="address" className="block text-sm text-gray-600 mb-1">
          Street address
        </label>
        <input
          type="text"
          name="address"
          id="address"
          value={values.address}
          onChange={handleChange}
          onBlur={handleBlur}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#5932EA]"
        />
        {touched.address && errors.address && (
          <p className="text-xs text-red-500 mt-1">{errors.address}</p>
        )}
      </div>

      
      <div className="relative">
        <label htmlFor="apartment" className="block text-sm text-gray-600 mb-1">
          Apartment
          <span className="absolute right-0 text-xs text-gray-400 font-medium">Optional</span>
        </label>
        <input
          type="text"
          name="apartment"
          id="apartment"
          value={values.apartment}
          onChange={handleChange}
          onBlur={handleBlur}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#5932EA]"
        />
      </div>

      
      <div>
        <label htmlFor="city" className="block text-sm text-gray-600 mb-1">
          City
        </label>
        <input
          type="text"
          name="city"
          id="city"
          value={values.city}
          onChange={handleChange}
          onBlur={handleBlur}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#5932EA]"
        />
        {touched.city && errors.city && (
          <p className="text-xs text-red-500 mt-1">{errors.city}</p>
        )}
      </div>

      {/* State + Zip Code in a row */}
      <div className="flex gap-4">
        {/* State */}
        <div className="flex-1">
          <label htmlFor="state" className="block text-sm text-gray-600 mb-1">
            State
          </label>
          <input
            type="text"
            name="state"
            id="state"
            value={values.state}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#5932EA]"
          />
          {touched.state && errors.state && (
            <p className="text-xs text-red-500 mt-1">{errors.state}</p>
          )}
        </div>

        {/* Zipcode */}
        <div className="w-36">
          <label htmlFor="zipcode" className="block text-sm text-gray-600 mb-1">
            Zip code
          </label>
          <input
            type="text"
            name="zipcode"
            id="zipcode"
            value={values.zipcode}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#5932EA]"
          />
          {touched.zipcode && errors.zipcode && (
            <p className="text-xs text-red-500 mt-1">{errors.zipcode}</p>
          )}
        </div>
      </div>

      <div className="mx-auto w-9/10 p-4 m-4 ">
            <CustomButton type="submit" disabled={isSubmitting} className="bg-[#5932EA] mx-auto w-10/10 h-[70px] text-white text-lg font-medium rounded-xl cursor-pointer  disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed" >{isSubmitting? 'Save Information' : 'saving...'}</CustomButton>
         </div>
    </div>
  );
};

export default AddressForm;
