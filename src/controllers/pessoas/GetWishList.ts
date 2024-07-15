import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes'; 
import { PessoasProvider } from '../../database/providers';
import { Middleware } from '../../shared';
import * as yup from 'yup';

interface IBody{
  limit: number;
  page: number
};

const bodySchema: yup.ObjectSchema<IBody> = yup.object().shape({
  limit: yup.number().required(),
  page: yup.number().required(),
}).noUnknown();

const validateGetWishList = Middleware.validation({ body: bodySchema });

const getWishlist: RequestHandler = async ( req, res, next) => {
  const user_id = req.headers.uid as string;
  const bodyParams = req.body;
  bodyParams['count'] = PessoasProvider.count(user_id);

  if ( !user_id  ){
    return res.status(StatusCodes.BAD_GATEWAY).json({error: 'Missing query info' });
  } 
  const userId = parseInt(user_id as string, 10);

  const queryResult = await PessoasProvider.get(userId, bodyParams);  

  return res.status(StatusCodes.OK).json(queryResult);
};

export { getWishlist, validateGetWishList };