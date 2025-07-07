import * as Yup from 'yup';

export const SignUpSchema=Yup.object().shape({
    email: Yup.string().required("email is required"),
    password: Yup.string().min(8).required("password required")
}

)

export const StepFormSchema=[
    Yup.object().shape({
        name: Yup.string().required("Kindly input your name"),
        gender: Yup.string().oneOf(["male", "female"]).required("gender is required"),
        phoneCode: Yup.string().required("Country code is required"),
        phone: Yup.string().max(11).required("Phone is required"),
        birthday: Yup.string(),
    }),
    null,
    Yup.object().shape({
        address: Yup.string().required("address is required"),
        apartment:Yup.string(),
        city:Yup.string(),
        state:Yup.string().required("kindly fill in your state"),
        zipcode:Yup.string(),
    })
]
    
