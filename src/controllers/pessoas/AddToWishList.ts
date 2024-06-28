import { UsuariosProvider } from '../../database/providers';
import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes'; 
import { Middleware } from '../../shared'; 
import { Services } from '../../shared';
import * as yup from 'yup';

interface IFilterParam{
  id: number;
};

const relogioId : yup.ObjectSchema<IFilterParam> = yup.object().shape({
  id: yup.number().required()
})
.noUnknown(); 

const likeItemValidation = Middleware.validation({query: relogioId});

const likeItem: RequestHandler = async (req, res, next) => {

  const userId = parseInt(req.headers.userid as string, 10);
  const relogioId = parseInt(req.query.id as string, 10);
  if(!userId ) return;

  const inserted: object = await UsuariosProvider.addToWishList(userId, relogioId);
  
  if (inserted instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: inserted.message
      }
    });
  }

  return res.status(StatusCodes.CREATED).json(inserted);
};

export { likeItemValidation, likeItem};
