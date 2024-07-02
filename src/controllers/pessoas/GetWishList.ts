import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes'; 
import { PessoasProvider } from '../../database/providers';
import * as yup from 'yup';

const getWishlist: RequestHandler = async ( req, res, next) => {
  const user_id = req.headers.uid;

  if ( !user_id  ){
    return res.status(StatusCodes.BAD_GATEWAY).json({error: 'Missing query info' });
  } 
  const userId = parseInt(user_id as string, 10);

  const queryResult = await PessoasProvider.get(userId);  
  console.log(queryResult);

  return res.status(StatusCodes.OK).json(queryResult);
};

export { getWishlist};