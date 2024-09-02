import { UsuariosProvider } from '../../database/providers';
import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes'; 
import { Middleware } from '../../shared'; 
import { IPessoaQParams } from './IPessoa';
import * as yup from 'yup';

const relogioId : yup.ObjectSchema<IPessoaQParams> = yup.object().shape({
  watchId: yup.number().required(),
  userId: yup.number().required()
})
.noUnknown(); 

const likeItemValidation = Middleware.validation({query: relogioId});

const likeItem: RequestHandler = async (req, res, next) => {

  const inserted: object = await UsuariosProvider.addToWishList(req.query);
  
  if ( inserted instanceof Error ) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: inserted.message
      }
    });
  }

  return res.status(StatusCodes.CREATED).json(inserted);
};

export { likeItemValidation, likeItem};
