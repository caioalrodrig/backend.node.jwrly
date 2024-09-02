import { PessoasProvider } from '../../database/providers';
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

const unlikeItemValidation = Middleware.validation({query: relogioId});

const unlikeItem: RequestHandler = async (req, res, next) => {

  const removed: Error | number = await PessoasProvider.deleteFromWishList(req.query);
  
  if ( removed instanceof Error ) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: removed.message
      }
    });
  }

  return res.status(StatusCodes.OK).send();
};

export { unlikeItemValidation, unlikeItem};
