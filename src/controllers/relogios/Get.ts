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
  priceMax?: number;
  page: number;
  limit: number;
};


const querySchema: yup.ObjectSchema<IQuery> = yup.object().shape({
  model: yup.string().optional(),
  brand: yup.string().optional(),
  price: yup.number().optional(),
  priceMin: yup.number().optional().positive(),
  priceMax: yup.number().optional().positive(),
  limit: yup.number().required(),
  page: yup.number().required(),
}).noUnknown();

const getValidationQuery = Middleware.validation({ query: querySchema });
 
const getRelogios: RequestHandler = async ( req, res, next) => {
  const queryParams: Record<string, any> = req.query;

  if ( JSON.stringify(req.query) === '{}' ){
    next();
    return;
  } 

  const queryResult = await RelogiosProvider.get(queryParams);  
    
  return res.status(StatusCodes.OK).json({ entries: queryResult,
    count : await RelogiosProvider.count(queryParams)
  });
};

export {getValidationQuery, getRelogios};