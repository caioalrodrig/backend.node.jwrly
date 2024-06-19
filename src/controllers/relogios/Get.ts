import { Request, Response, RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes'; 
import { validation } from '../../shared/middleware'; 
import * as yup from 'yup';
import { relogios } from '../../database/';

interface IQuery {
  id?: number;
  brand?: string;
  priceUSD?: number;
}

const querySchema: yup.ObjectSchema<IQuery> = yup.object().shape({
  id: yup.number().optional(),
  brand: yup.string().optional(),
  priceUSD: yup.number().optional(),
});

const getValidation = validation({query: querySchema });
 

const getRelogios: RequestHandler = ( req, res, next) => {

//   if(Object.keys(req.query).length === 0){
//     console.log("Olah");
//     next();
//   }

  let resp = relogios;
  const {brand, priceUSD} = req.query;
  
  if (brand){
    resp = resp.filter( relogio => relogio.brand === brand);
  }
  if (priceUSD){
    resp = resp.filter( relogio => relogio.priceUSD === Number(priceUSD));
  }
    

  return res.status(StatusCodes.OK).json(resp);
};

export {getValidation, getRelogios}