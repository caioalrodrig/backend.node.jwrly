import { Request, Response, RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

type TProperty = 'body' | 'params' | 'query';
type TAllSchemas = Record<TProperty, yup.AnyObjectSchema>;
type TSchema = Partial<TAllSchemas>;
type TValidation = (getSchema: TSchema) => RequestHandler; 

export const validation : TValidation = (schema: TSchema) => async (req, res, next) => {
  const validationProp = Object.keys(schema)[0] as TProperty;
  if ( !validationProp ){
    res.status(StatusCodes.BAD_REQUEST).send();
  }
  try{
    req[validationProp] = await schema[validationProp]!.validate(req[validationProp], {
        abortEarly: true,
        stripUnknown: true,
      }
    );
    next();
  } catch(error){
    let yupErrorMsg = (error as yup.ValidationError).message; 
    res.status(StatusCodes.BAD_REQUEST);
    return res.json({
      errors: {
        default: yupErrorMsg,
      }
    });     
  }

};