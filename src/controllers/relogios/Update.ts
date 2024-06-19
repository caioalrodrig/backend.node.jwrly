import { Request, Response, RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes'; 
import * as yup from 'yup';
import { validation } from '../../shared/middleware'; 
import { relogios } from '../../database/';

interface IQueryUpdate {
  id: number;
};

interface IBodyUpdate {
  brand?: string;
  priceUSD?: number;
};

const querySchema: yup.ObjectSchema<IQueryUpdate> = yup.object().shape({
  id: yup.number().required(),
});

const bodySchema: yup.ObjectSchema<IBodyUpdate> = yup.object().shape({
  brand: yup.string().optional().min(2),
  priceUSD: yup.number().optional().min(50),
});

const updateQueryValidation = validation({query: querySchema});

const updateBodyValidation = validation({body: bodySchema});

const updateRelogios: RequestHandler = ( req, res, next) => {

  const {id} = req.query;
  const {brand, priceUSD} = req.body;

  if (id){
    const relogioIdx = relogios.findIndex(relogio => relogio.id === Number(id));
    if (brand){
        relogios[relogioIdx].brand = brand;
    }
    if (priceUSD){
        relogios[relogioIdx].priceUSD = priceUSD;
    }
    let resp = relogios.filter( relogio => relogio.id === Number(id));
    
    return res.status(StatusCodes.OK).json(resp);
  } 

};

export {updateQueryValidation, updateBodyValidation, updateRelogios}