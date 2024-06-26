import { Request, Response, RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes'; 
import * as yup from 'yup';
import { Middleware } from '../../shared'; 

interface IQueryUpdate {
  id: number;
};

interface IBodyUpdate {
  brand?: string;
  price?: number;
};

const querySchema: yup.ObjectSchema<IQueryUpdate> = yup.object().shape({
  id: yup.number().required(),
});

const bodySchema: yup.ObjectSchema<IBodyUpdate> = yup.object().shape({
  brand: yup.string().optional().min(2),
  price: yup.number().optional().min(50),
});

const updateQueryValidation = Middleware.validation({query: querySchema});

const updateBodyValidation = Middleware.validation({body: bodySchema});

const updateRelogios: RequestHandler = ( req, res, next) => {

  const {id} = req.query;
  const {brand, priceUSD} = req.body;
};

export {updateQueryValidation, updateBodyValidation, updateRelogios}