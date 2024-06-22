import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { Middleware, Services } from '../../shared';

interface IUsuario{
  id?: number;
  email: string;
  password: string;
};

const credential = {
  id: 70,
  email: "joseph@gmail.com",
  password: "1234567890"
};

interface IBodyValidation extends Omit<IUsuario, 'id'> {};

const usuario: yup.ObjectSchema<IBodyValidation> = yup.object().shape({
  email: yup.string().email().defined(),
  password: yup.string().defined(),
}); 

const validateSignIn = Middleware.validation( {body: usuario} );

const signIn: RequestHandler = async (req, res, next) => {
  if (req.body.email !== credential.email){
    return res.status(StatusCodes.UNAUTHORIZED).json({
      errors: {default: 'Email ou senha são inválidos'}
    });
  }
  const hashedPassword: string = await Services.hashPassword(req.body.password);
  const verifiedPassword = await Services.verifyPassword( hashedPassword, credential.password );

  if (verifiedPassword){
    res.header({
      bearer: Services.signJWT( {id: req.body.id} )
    });

    return res.status(StatusCodes.OK).send();
  } else{
    return res.status(StatusCodes.UNAUTHORIZED).json({
      errors: { default: 'Email ou senha são inválidos'}
    });
  }
};

export { validateSignIn, signIn }