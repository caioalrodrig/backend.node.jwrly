import { Request, Response, RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes'; 
import * as yup from 'yup';

const Relogio : yup.ObjectSchema<IRelogio> = yup.object().shape({
  id : yup.number().defined(),
  marca: yup.string().defined(),
  preco: yup.number().optional().min(50),
}); 


interface IRelogio {
  id: number;
  marca: string;
  preco?: number;
}

export const create = async (req: Request<{}, {}, IRelogio>, res: Response) => {
  
  let validatedData: IRelogio | undefined = undefined;

  try{
    validatedData = await Relogio.validate(req.body); 
  } catch(error){

    let yupErrorMsg = (error as yup.ValidationError).message; 
    return res.json({
      errors: {
        default: yupErrorMsg,
      }
    });    
    
  }
  return res.status(StatusCodes.OK).send('Create!');    
};