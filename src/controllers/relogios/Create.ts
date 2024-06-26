import { RelogiosProvider } from '../../database/providers';
import { IRelogio } from '../../database/schemas';
import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes'; 
import { Middleware } from '../../shared'; 
import * as yup from 'yup';

const Relogio : yup.ObjectSchema<Omit<IRelogio,'id'>> = yup.object().shape({
  brand: yup.string().defined(),
  model: yup.string().defined(),
  price: yup.number().defined(),
  strapMaterial: yup.string().optional(),
  caseMaterial: yup.string().optional(),
}); 

const createValidation = Middleware.validation({body: Relogio});


const create: RequestHandler = async (req, res, next) => {
  const register = req.body;
  const inserted: Error | number = await RelogiosProvider.create(register);
  
  if (inserted instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: inserted.message
      }
    });
  }

  return res.status(StatusCodes.CREATED).json(inserted);
};

export {createValidation, create};