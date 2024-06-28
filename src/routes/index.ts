import { Router } from 'express';
import { RelogiosController, UsuariosController, PessoasController } from '../controllers';
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

router.put('/usuario',
    Middleware.ensureAuthenticated,
    PessoasController.likeItemValidation,
    PessoasController.likeItem
);


export {router};
