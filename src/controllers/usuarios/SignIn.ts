
import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import { IUsuario } from '../../database/schemas';
import * as yup from 'yup';
import { Middleware, Services } from '../../shared';
import { UsuariosProvider } from '../../database/providers';

interface IBodyValidation extends Omit<IUsuario, 'id' | 'name'> {};

const usuario: yup.ObjectSchema<IBodyValidation> = yup.object().shape({
  email: yup.string().email().defined(),
  password: yup.string().defined(),
}); 

const validateSignIn = Middleware.validation( {body: usuario} );

const signIn: RequestHandler = async (req, res, next) => {

  const userInfo = await UsuariosProvider.getByEmail(req.body.email);

  if (userInfo instanceof Error || !userInfo ){
    return res.status(StatusCodes.UNAUTHORIZED).json({
      errors: {default: 'Email ou senha são inválidos'}
    });
  }
  
  const verifiedPassword = await Services
    .verifyPassword( req.body.password, userInfo.password as string );

  if (verifiedPassword){
 
    return res.status(StatusCodes.OK).send({  
      userId: userInfo.id,
      name: userInfo.name,
      bearer: Services.signJWT({ id: userInfo.id })
    });

  } else{
    return res.status(StatusCodes.UNAUTHORIZED).json({
      errors: { default: 'Email ou senha são inválidos'}
    });
  }
};

export { validateSignIn, signIn }
