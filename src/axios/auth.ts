import { UserDocument } from "@/app/interface/Users";
import { baseUrl } from ".";
import axios from "axios";
import UserModel from "@/models/Users";
// a function to post sign up data
export const registerUser = ({
  name,
  location,
  pno,
  email,
  password,
}: UserDocument) => {
  const url = baseUrl + "api/auth/register";
  const data = axios
    .post(url, {
      name,
      location,
      pno,
      email,
      password,
    })
    .then((res) => {
      console.log("axios > Sign up return data >", res);
      return res;
    })
    .catch((err) => {
      console.log("Error while posting the sign up data");
      return { status: "failed", error: err };
    });
  return data;
};

// a function to post login in data
export const logInUser = ({ name, password }: UserDocument) => {
  const url = baseUrl + "api/auth/login";
  const data = axios
    .post(url, {
      name,
      password,
    })
    .then((res) => {
      console.log("axios > Sign in return data >", res);
      return res;
    })
    .catch((err) => {
      console.log("Error while posting the sign in data");
      return { status: "failed", error: err };
    });
  return data;
};
