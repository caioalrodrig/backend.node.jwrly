import { PessoasProvider } from '../../database/providers';
import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes'; 
import { Middleware } from '../../shared'; 
import * as yup from 'yup';
interface IFilterParam{
  id: number;
};

const relogioId : yup.ObjectSchema<IFilterParam> = yup.object().shape({
  id: yup.number().required()
})
.noUnknown(); 

const unlikeItemValidation = Middleware.validation({query: relogioId});

const unlikeItem: RequestHandler = async (req, res, next) => {

  const userId = parseInt(req.headers.uid as string, 10);
  const relogioId = parseInt(req.query.id as string, 10);
  if( !userId ){
    return res.status(StatusCodes.UNAUTHORIZED)
    .json({error: "Acesso negado" });
  } 

  const removed: Error | number = await PessoasProvider.deleteFromWishList(userId, relogioId);
  
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
