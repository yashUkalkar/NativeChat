import axios from "./axios";

// Types
import { UserType } from "../types/UserType";

interface UserRequestDataFormat {
  [k: string]: FormDataEntryValue;
}
export const signInUser = async (
  data: UserRequestDataFormat
): Promise<UserType> => {
  const user = await axios
    .post("/auth/signin", data)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err.response.data);
    });
  return user;
};

export const signUpUser = async (
  data: UserRequestDataFormat
): Promise<UserType> => {
  const user = await axios
    .post("/auth/signup", data)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err.response.data);
    });
  return user;
};
