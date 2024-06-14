import { Request, Response, RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes'; 
import * as yup from 'yup';
import {relogios} from '../../database/';

interface IQueryUpdate {
  id: number;
};

interface IBodyUpdate {
  marca?: string;
  preco?: number;
};

const queryValidationOpts: yup.ValidateOptions = {
    stripUnknown: true,
    abortEarly: false
};

const querySchema: yup.ObjectSchema<IQueryUpdate> = yup.object().shape({
  id: yup.number().required(),
});
const bodySchema: yup.ObjectSchema<IBodyUpdate> = yup.object().shape({
  marca: yup.string().optional().min(2),
  preco: yup.number().optional().min(50),
});

const updateValidation: RequestHandler = async ( req, res, next) => {
  let validatedQParams: IQueryUpdate | undefined = undefined;
  let validatedBody: IBodyUpdate | undefined = undefined;

  try{
    validatedQParams = await querySchema.validate(req.query, queryValidationOpts);
    validatedBody = await bodySchema.validate(req.body, queryValidationOpts);
    next();
  } catch(error){

    const yupError = error as yup.ValidationError;
    const formattedErrors: Record<string, string> = {};

    yupError.inner.forEach(err => {
      if (err.path) {
        formattedErrors[err.path] = err.message;
      }
    });

    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: formattedErrors
    });     
  }
}; 

const updateRelogios: RequestHandler = ( req, res, next) => {

  const {id} = req.query;
  const {marca, preco} = req.body;

  if (id){
    const relogioIdx = relogios.findIndex(relogio => relogio.id === Number(id));
    if (marca){
        relogios[relogioIdx].marca = marca;
    }
    if (preco){
        relogios[relogioIdx].preco = preco;
    }
    let resp = relogios.filter( relogio => relogio.id === Number(id));

    return res.status(StatusCodes.OK).json(resp);
   
  } 
   
};

export {updateValidation, updateRelogios}