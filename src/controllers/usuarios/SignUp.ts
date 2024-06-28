import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes'; 
import { IUsuario } from '../../database/schemas';
import { Middleware } from '../../shared'; 
import * as yup from 'yup';

interface IBodyValidation extends Omit<IUsuario, 'id'> {};

const usuario: yup.ObjectSchema<IBodyValidation> = yup.object().shape({
  email: yup.string().defined(),
  password: yup.string().defined().min(10),
}); 

const validateSignUp = Middleware.validation({ body: usuario });

const signUp: RequestHandler = async (req, res, next) => {
    //const id: number = req.body.id; 
  
  return res.status(StatusCodes.CREATED).json(`Item com id inserido com sucesso`);    
};

export {validateSignUp, signUp };