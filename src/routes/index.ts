import express, { Request, Response } from 'express'; //controller
import { Router } from 'express';
import { StatusCodes } from 'http-status-codes'; //controller
import { RelogiosController } from '../controllers';
import 'dotenv/config';
import { create } from '../controllers/relogios/Create';

const router = Router();
const app = express();
const port = process.env.PORT || 3030;

const relogios = [
    { id: 1, marca: 'Rolex', preco: 5000 },
    { id: 2, marca: 'Casio', preco: 50 },
    { id: 3, marca: 'Omega', preco: 3000 }
];
app.use(express.json());

app.get('/relogios', ( req: Request, res: Response ) => {

    let resp = relogios;

    const {marca, preco} = req.query;
    if (marca){
        resp = resp.filter( relogio => relogio.marca === marca);
    }
    if (preco){
        resp = resp.filter( relogio => relogio.preco === Number(preco));
    }

    res.status(StatusCodes.OK).json(resp);
});

app.post('/relogios', ( req: Request, res: Response ) => {

    res.json(relogios); 
});

app.get('/relogios', ( req: Request<Array<string>>, res: Response ) => {

    res.json(relogios); 
});

//abordagem alternativa + modularidade
router.post('/cidades', RelogiosController.create);

app.listen(port, () => {

    console.log(`Servidor iniciado em http://localhost:${port}`);
});

