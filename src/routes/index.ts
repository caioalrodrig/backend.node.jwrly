import express from 'express'; 
import { Router } from 'express';
import { RelogiosController } from '../controllers';
import 'dotenv/config';

const router = Router();
const app = express();
const port = process.env.PORT || 3030;

app.use(express.json());
app.use(router);

// router.post('/relogios', RelogiosController.create);

// router.get('/relogios', RelogiosController.getRelogios);

app.listen(port, () => {

    console.log(`Servidor iniciado em http://localhost:${port}`);
});

router.post('/relogios',RelogiosController.create,);
