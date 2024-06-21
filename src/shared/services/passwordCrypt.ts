import { genSalt, hash, compare } from 'bcryptjs';


const SALT_RANDOMS = 8;

const credential = {
  id: 0,
  email: "joseph@gmail.com",
  password: "1234567890"
}

const hashPassword = async (password: string) => {
  const saltGenerated = await genSalt(SALT_RANDOMS);
  
  return await hash(password, saltGenerated);
};

const verifyPassword = async (password: string) => {
  const hashedPassword = await hashPassword(credential.password);

  return await compare(credential.password, password);

};

export { hashPassword, verifyPassword };
