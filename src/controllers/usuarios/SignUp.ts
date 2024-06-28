import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes'; 
import { IUsuario } from '../../database/schemas';
import { Middleware } from '../../shared'; 
import { UsuariosProvider } from '../../database/providers';
import { Services } from '../../shared';
import * as yup from 'yup';

interface IBodyValidation extends Omit<IUsuario, 'id' | 'likes'> {};

const usuario: yup.ObjectSchema<IBodyValidation> = yup.object().shape({
  name: yup.string().defined().min(2),
  email: yup.string().defined(),
  password: yup.string().defined().min(10),
}); 

const validateSignUp = Middleware.validation({ body: usuario });

const signUp: RequestHandler = async (req, res, next) => {
  const password = req.body.password;
  try{
    
    req.body.password = await Services.hashPassword(password);
  } catch(error){
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({error: "Erro de cadastro."});    
  }

  const userName = await UsuariosProvider.signUp(req.body);

  return res.status(StatusCodes.CREATED).json(`${userName}`);    
  
};

export {validateSignUp, signUp };