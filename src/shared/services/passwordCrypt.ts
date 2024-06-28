import { genSalt, hash, compare } from 'bcryptjs';

const SALT_RANDOMS = 8;


const hashPassword = async (password: string) => {
  const saltGenerated = await genSalt(SALT_RANDOMS);
  
  return await hash(password, saltGenerated);
};

const verifyPassword = async (password: string, actualPassword: string) => {

  return await compare(password, actualPassword);

};

export { hashPassword, verifyPassword };