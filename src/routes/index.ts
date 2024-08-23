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
    // Middleware.ensureAuthenticated,
    RelogiosController.getValidationQuery,
    RelogiosController.getRelogios,
    RelogiosController.getAllRelogios
);

router.get('/relogios-title',
    // Middleware.ensureAuthenticated,
    RelogiosController.getValidation,
    RelogiosController.getRelogiosByTitle,
);

router.post('/pessoas',
    Middleware.ensureAuthenticated,
    PessoasController.likeItemValidation,
    PessoasController.likeItem
);

router.get('/pessoas',
    Middleware.ensureAuthenticated,
    PessoasController.validateGetWishList,
    PessoasController.getWishlist
);

router.delete('/pessoas',
    Middleware.ensureAuthenticated,
    PessoasController.unlikeItemValidation,
    PessoasController.unlikeItem
);

export {router};
