import { RequestHandler} from 'express';
import { StatusCodes } from 'http-status-codes'; 
import { RelogiosProvider } from '../../database/providers';

export const getAllRelogios: RequestHandler = async ( req, res, next ) => {

  const allRelogios = await RelogiosProvider.getAll();

  if (allRelogios instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: { default: allRelogios.message }
    });
  }
  return res.status(StatusCodes.OK).json(allRelogios);
};