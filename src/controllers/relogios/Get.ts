import { Request, Response, RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes'; 
import * as yup from 'yup';
import {relogios} from '../../database/';

interface IQuery {
  id?: number;
  marca?: string;
  preco?: number;
}

const queryValidationOpts: yup.ValidateOptions = {
    stripUnknown: true,
};

const querySchema: yup.ObjectSchema<IQuery> = yup.object().shape({
  id: yup.number().optional(),
  marca: yup.string().optional(),
  preco: yup.number().optional(),
});

const getValidation: RequestHandler = async ( req, res, next) => {
  let validatedData: IQuery | undefined = undefined;
  try{
    validatedData = await querySchema.validate(req.query, queryValidationOpts);
    next();
  } catch(error){
    console.log("Hi");
    let yupErrorMsg = (error as yup.ValidationError).message; 
    res.status(StatusCodes.BAD_REQUEST);
    return res.json({
      errors: {
        default: yupErrorMsg,
      }
    });        
  }
}; 

const getRelogios: RequestHandler = ( req, res, next) => {

//   if(Object.keys(req.query).length === 0){
//     console.log("Olah");
//     next();
//   }

  let resp = relogios;
  const {marca, preco} = req.query;
  
  if (marca){
    resp = resp.filter( relogio => relogio.marca === marca);
  }
  if (preco){
    resp = resp.filter( relogio => relogio.preco === Number(preco));
  }
    

  return res.status(StatusCodes.OK).json(resp);
};

export {getValidation, getRelogios}