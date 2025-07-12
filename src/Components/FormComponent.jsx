import { Formik, Form, Field} from "formik";

import { SignUpSchema } from "./utils/ValidationSchema";
import CustomButton from "./CustomComponents/CustomButton";
const FormComponent=({initialValues, onSubmit, buttonText, loadingText})=>{
  
  return(
    <Formik
      initialValues={initialValues}
      validationSchema={SignUpSchema}
      onSubmit={onSubmit}
    >
    {({ isSubmitting, errors, touched  }) => (
      <Form>
        {/* Email Field */}
        <div className="relative w-full max-w-sm mx-auto mb-10 mt-5">
          {errors.general && <p className="text-red-500">{errors.general}</p>}
          <Field
            name="email"
            className="peer w-full border border-gray-400 
            rounded-xl px-3 pt-6 pb-2 focus:outline-none focus:ring-2 focus:ring-[#5932EA]"
            placeholder=""
          />
          <label
            className="absolute left-3 top-2 text-gray-500 text-sm transition-all duration-200
            peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600"
          >
            Email address
          </label>
          {touched.email && errors.email && (
            <div className="error text-red-500">{errors.email}</div>
          )}
        </div>

        {/* Password Field */}
        <div className="relative w-full max-w-sm mx-auto">
          <Field
            name="password"
            className="peer w-full border border-gray-400 
            rounded-xl px-3 pt-6 pb-2 focus:outline-none focus:ring-2 focus:ring-[#5932EA]"
            placeholder=""
          />
          <label
            className="absolute left-3 top-2 text-gray-500 text-sm transition-all duration-200
            peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600"
          >
            Password
          </label>
          {touched.password && errors.password ? (
            <div className="error text-red-500">{errors.password}</div>
          ) : (
            <p className="text-sm text-gray-500">8+ characters</p>
          )}
        </div>
        <div className="mx-auto w-9/10 p-4 m-4 ">
          <CustomButton type="submit" disabled={isSubmitting} className="cursor-pointer bg-[#5932EA] mx-auto w-10/10 h-[70px] text-white text-lg font-medium rounded-xl cursor-pointer  disabled:bg-black disabled:text-gray-500 disabled:cursor-not-allowed" >{isSubmitting? loadingText : buttonText } </CustomButton>
        </div>
      </Form>
  )}
</Formik>

    );
}
export default FormComponent;
