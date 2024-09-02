import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes'; 
import { PessoasProvider } from '../../database/providers';
import { Middleware } from '../../shared';
import * as yup from 'yup';

interface IQuery{
  userId: number;
  limit: number;
  page: number
};

const bodySchema: yup.ObjectSchema<IQuery> = yup.object().shape({
  userId: yup.number().required(),
  limit: yup.number().required(),
  page: yup.number().required(),
});

const validateGetWishList = Middleware.validation({ query: bodySchema });

const getWishlist: RequestHandler = async ( req, res, next) => {

  const queryResult = await PessoasProvider.get(req.query);  

  return res.status(StatusCodes.OK).json(queryResult);
};

export { getWishlist, validateGetWishList };