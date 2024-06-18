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
};

const createValidation: RequestHandler = async (req, res, next) => {
  let validatedData: IRelogio | undefined = undefined;

  try{
    validatedData = await Relogio.validate(req.body); 
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

const create = async (req: Request<{}, {}, IRelogio>, res: Response) => {
  
  console.log(req.body);  
  const id: number = req.body.id; 
  
  return res.status(StatusCodes.CREATED).json(`Item com id ${id} inserido com sucesso`);    
};

export {createValidation, create};