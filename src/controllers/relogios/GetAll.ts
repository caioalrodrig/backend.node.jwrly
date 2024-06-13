import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes'; 

const relogios = [
    { id: 1, marca: 'Rolex', preco: 5000 },
    { id: 2, marca: 'Casio', preco: 50 },
    { id: 3, marca: 'Omega', preco: 3000 }
  ];

export const getAllRelogios = ( req: Request<Array<string>>, res: Response ) => {

  return res.status(StatusCodes.OK).json(relogios); 
};