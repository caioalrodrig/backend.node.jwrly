import { Router } from 'express';
import { RelogiosController, UsuariosController } from '../controllers';
import { Middleware } from '../shared';

const router = Router();

router.post('/signup',
    UsuariosController.validateSignUp,
    UsuariosController.signUp
);

router.post('/signin',
    UsuariosController.validateSignIn,
    UsuariosController.signIn
);

router.post('/relogios',
    Middleware.ensureAuthenticated,
    RelogiosController.createValidation, 
    RelogiosController.create
);

router.get('/relogios',
    Middleware.ensureAuthenticated,
    RelogiosController.getValidation!,
    RelogiosController.getRelogios,
    RelogiosController.getAllRelogios
);

router.put('/relogios',
    Middleware.ensureAuthenticated,
    RelogiosController.updateQueryValidation,
    RelogiosController.updateBodyValidation,
    RelogiosController.updateRelogios
);


export {router};


