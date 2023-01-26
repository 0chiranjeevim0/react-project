import * as Yup from "yup";

const signSchema = Yup.object().shape({
  email: Yup.string().email().required("Required"),
  password: Yup.string()
    .min(4, "Password is too short")
    .required("Required")
    .matches(/[0-9]/, "Password Requires a number")
    .matches(/[a-z]/, "Password requires lowercase")
    .matches(/[A-Z]/, "Password requires an uppercase"),
});

export default signSchema;
