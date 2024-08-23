import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes'; 
import { Middleware } from '../../shared/middleware'; 
import { RelogiosProvider } from '../../database/providers';
import * as yup from 'yup';

interface IQuery {
  title: string;
  limit: number;
};

const querySchema: yup.ObjectSchema<IQuery> = yup.object().shape({
  title: yup.string().required(),
  limit: yup.number().required(),
}).noUnknown();

const getValidation = Middleware.validation({ query: querySchema });
 
const getRelogiosByTitle: RequestHandler = async ( req, res, next) => {
  const queryParams: Record<string, any> = req.query;

  if ( JSON.stringify(req.query) === '{}' ){
    next();
    return;
  } 

  const queryResult = await RelogiosProvider.getByTitle(queryParams);  
    
  return res.status(StatusCodes.OK).json( queryResult );
};

export {getValidation, getRelogiosByTitle};