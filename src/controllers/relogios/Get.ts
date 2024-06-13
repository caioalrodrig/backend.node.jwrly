import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes'; 

const relogios = [
    { id: 1, marca: 'Rolex', preco: 5000 },
    { id: 2, marca: 'Casio', preco: 50 },
    { id: 3, marca: 'Omega', preco: 3000 }
  ];

export const getRelogios = ( req: Request, res: Response ) => {

    let resp = relogios;

    const {marca, preco} = req.query;
    if (marca){
        resp = resp.filter( relogio => relogio.marca === marca);
    }
    if (preco){
        resp = resp.filter( relogio => relogio.preco === Number(preco));
    }

    return res.status(StatusCodes.OK).json(resp);
};
