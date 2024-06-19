import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes'; 
import { validation } from '../../shared/middleware'; 
import * as yup from 'yup';

const Relogio : yup.ObjectSchema<IRelogio> = yup.object().shape({
  id : yup.number().defined(),
  marca: yup.string().defined(),
  preco: yup.number().optional().min(50),
}); 


interface IRelogio {
  id: number;
  marca: string;
  preco?: number;
};

const createValidation = validation({body: Relogio});


const create: RequestHandler = async (req, res, next) => {
  
  console.log(req.body);  
  const id: number = req.body.id; 
  
  return res.status(StatusCodes.CREATED).json(`Item com id ${id} inserido com sucesso`);    
};

export {createValidation, create};