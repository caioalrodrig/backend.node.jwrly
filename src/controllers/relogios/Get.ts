import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes'; 
import { Middleware } from '../../shared/middleware'; 
import { RelogiosProvider } from '../../database/providers';
import * as yup from 'yup';

interface IQuery {
  model?: string;
  brand?: string;
  price?: number;
  priceMin?: number;
  priceMax?: number
};

interface IBody{
  limit: number;
  page: number
};

const querySchema: yup.ObjectSchema<IQuery> = yup.object().shape({
  model: yup.string().optional(),
  brand: yup.string().optional(),
  price: yup.number().optional(),
  priceMin: yup.number().optional().positive(),
  priceMax: yup.number().optional().positive(),
}).noUnknown();

const bodySchema: yup.ObjectSchema<IBody> = yup.object().shape({
  limit: yup.number().required(),
  page: yup.number().required(),
}).noUnknown();

const getValidationQuery = Middleware.validation({ query: querySchema });
const getValidationBody = Middleware.validation({ body: bodySchema });
 
const getRelogios: RequestHandler = async ( req, res, next) => {
  const queryParams: Record<string, any> = req.query;
  const bodyParams: Record<string, any> = req.body;
  bodyParams['count'] = RelogiosProvider.count(queryParams);

  if ( JSON.stringify(req.query) === '{}' ){
    next();
    return;
  } 

  const queryResult = await RelogiosProvider.get(queryParams, bodyParams);  
  
  return res.status(StatusCodes.OK).json(queryResult);
};

export {getValidationQuery, getValidationBody, getRelogios};