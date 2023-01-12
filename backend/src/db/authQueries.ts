import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Used for signin(Return user if exists) and signup
export const checkUserExists = async (
  email: string,
  returnUser: boolean = false
): Promise<any> => {
  const exists = await prisma.users
    .findFirstOrThrow({
      where: { email: email },
    })
    .then((res) => {
      if (returnUser) return res;
      else return true;
    })
    .catch((err) => {
      return false;
    });

  return exists;
};

// Used for signup
export const addNewUser = async (
  email: string,
  username: string,
  password: string
): Promise<any> => {
  const user = await prisma.users
    .create({
      data: {
        email: email,
        username: username,
        password_hash: password,
      },
    })
    .then((res) => {
      const { password_hash, ...rest } = res;
      return rest;
    })
    .catch((err) => console.log(err.message));

  return user;
};
