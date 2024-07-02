
import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import { IUsuario } from '../../database/schemas';
import * as yup from 'yup';
import { Middleware, Services } from '../../shared';
import { UsuariosProvider } from '../../database/providers';

interface IBodyValidation extends Omit<IUsuario, 'id'| 'likes'| 'name'> {};

const usuario: yup.ObjectSchema<IBodyValidation> = yup.object().shape({
  email: yup.string().email().defined(),
  password: yup.string().defined(),
}); 

const validateSignIn = Middleware.validation( {body: usuario} );

const signIn: RequestHandler = async (req, res, next) => {

  const userPassword = await UsuariosProvider.getByEmail(req.body.email, 'password');

  if (userPassword instanceof Error || !userPassword ){
    return res.status(StatusCodes.UNAUTHORIZED).json({
      errors: {default: 'Email ou senha são inválidos'}
    });
  }
  const verifiedPassword = await Services
    .verifyPassword( req.body.password, userPassword as string );

  if (verifiedPassword){
    const userId = await UsuariosProvider.getByEmail(req.body.email, 'id');
    
    res.header({
      uid: userId,
      bearer: Services.signJWT( { id: userId } )
    });

    return res.status(StatusCodes.OK).send();
  } else{
    return res.status(StatusCodes.UNAUTHORIZED).json({
      errors: { default: 'Email ou senha são inválidos'}
    });
  }
};

export { validateSignIn, signIn }
