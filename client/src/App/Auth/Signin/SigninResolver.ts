import * as yup from "yup";
import { yupResolver } from "@primevue/forms/resolvers/yup";

export const SigninResolver = yupResolver(yup.object({
  name: yup.string().min(2).max(30)
    .required("Please enter a username"),
  password: yup.string().min(6).max(30)
    .required("Please enter a password"),
}));
