import * as yup from "yup";

export const SignupSchema = yup.object({
  name: yup.string().min(2).max(30)
    .required("Name is required"),
  password: yup.string().min(6).max(30)
    .required("Password is required"),
});
