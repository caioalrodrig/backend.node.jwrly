import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes'; 
import { Middleware } from '../../shared/middleware'; 
import { RelogiosProvider } from '../../database/providers';
import * as yup from 'yup';

interface IQuery {
  model?: string;
  brand?: string;
  price?: number;
};

const querySchema: yup.ObjectSchema<IQuery> = yup.object().shape({
  model: yup.string().optional(),
  brand: yup.string().optional(),
  price: yup.number().optional(),
}).noUnknown();

const getValidation = Middleware.validation({ query: querySchema });
 
const getRelogios: RequestHandler = async ( req, res, next) => {
  const queryParams: Record<string, any> = req.query;
  if ( JSON.stringify(req.query) === '{}' ){
    next();
    return;
  } 
  const queryResult = await RelogiosProvider.get(queryParams);  
  
  return res.status(StatusCodes.OK).json(queryResult);
};

export {getValidation, getRelogios};