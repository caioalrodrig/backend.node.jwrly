import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes'; 
import { Middleware } from '../../shared'; 
import * as yup from 'yup';

const Relogio : yup.ObjectSchema<IRelogio> = yup.object().shape({
  id: yup.number().defined(),
  brand: yup.string().defined(),
  model: yup.string().defined(),
  price: yup.number().defined(),
  strapMaterial: yup.string().optional(),
  caseMaterial: yup.string().optional(),
}); 


interface IRelogio {
  id: number;
  model: string;
  brand: string;
  price: number;
  strapMaterial?: string;
  caseMaterial?: string;
};

const createValidation = Middleware.validation({body: Relogio});


const create: RequestHandler = async (req, res, next) => {
  
  const id: number = req.body.id; 
  
  return res.status(StatusCodes.CREATED).json(`Item com id ${id} inserido com sucesso`);    
};

export {createValidation, create};