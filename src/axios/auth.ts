import { baseUrl } from ".";
// a function to post sign up data
export const registerUser = (): void => {
  const url = baseUrl + "api/auth/register";
};

// a function to post login in data
export const logInUser = (): void => {
  const url = baseUrl + "api/auth/login";
};
