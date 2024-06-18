import { Router } from 'express';
import { RelogiosController } from '../controllers';

const router = Router();

router.post('/relogios',
    RelogiosController.createValidation, 
    RelogiosController.create);

router.get('/relogios',
    RelogiosController.getValidation!,
    RelogiosController.getRelogios,
    RelogiosController.getAllRelogios);

router.put('/relogios',
    RelogiosController.updateValidation,
    RelogiosController.updateRelogios
);

export {router};


