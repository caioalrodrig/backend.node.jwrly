import 'dotenv/config';
import * as jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET!; 

const signJWT = (payloadInfo: Object) => {
  return jwt.sign(
    payloadInfo,
    SECRET,
    { expiresIn: '20min' }
  );  
};

const verifyJWT = (accessToken: string | undefined) => {
  if (!accessToken) return "INVALID_TOKEN";
  try{
    const verifiedToken = jwt.verify(accessToken, SECRET);  
    if (typeof verifiedToken === 'string') return "INVALID_TOKEN";

    return verifiedToken;
  } catch (error) {

    return "INVALID_TOKEN";
  }
};

export { verifyJWT, signJWT };