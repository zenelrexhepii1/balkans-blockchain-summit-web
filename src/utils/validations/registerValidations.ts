import * as Yup from "yup";

export const registerValidationSchema = Yup.object().shape({
    name: Yup.string().required("This field is required!"),
    surname: Yup.string().required("This field is required!"),
    email: Yup.string().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        'Invalid email format'
    ).required("This field is required!"),
    twitter: Yup.string().notRequired(),
    telegram: Yup.string().nonNullable()
});