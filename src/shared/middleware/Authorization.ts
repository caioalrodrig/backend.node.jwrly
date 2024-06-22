import 'dotenv/config';
import { RequestHandler } from 'express';
import { Services } from '../../shared';
import { StatusCodes } from 'http-status-codes';


export const ensureAuthenticated: RequestHandler = (req, res, next) => {
  const token = req.headers.bearer;

  if (!token){
    return res.status(StatusCodes.UNAUTHORIZED).json({ error: "Acesso negado!" });
  }
  
  const decoded = Services.verifyJWT(token as string);

  if (decoded === 'INVALID_TOKEN' ){
    return res.status(StatusCodes.UNAUTHORIZED).json({
      error: "Acesso negado!"
    });
  }
  next();
    
};
