import * as Yup from "yup";

export const sponsorsValidationsSchema = Yup.object().shape({
    firstName: Yup.string().required("This field is required!"),
    lastName: Yup.string().required("This field is required!"),
    email: Yup.string().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        'Invalid email format'
    ).required("This field is required!"),
    companyName: Yup.string().required("This field is required!")
});