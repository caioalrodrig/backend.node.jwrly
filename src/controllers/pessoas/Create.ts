import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes'; 
import { IPessoa } from '../../database/schemas'
import { Middleware } from '../../shared'; 
import * as yup from 'yup';

const pessoa : yup.ObjectSchema<IPessoa> = yup.object().shape({
  id: yup.number().defined(),
  name: yup.string().defined(),
  likes: yup.string().optional()
}); 

const createValidation = Middleware.validation({body: pessoa});


const create: RequestHandler = async (req, res, next) => {
  
  const id: number = req.body.id; 
  
  return res.status(StatusCodes.CREATED).json(`Item com id ${id} inserido com sucesso`);    
};

export {createValidation, create};
