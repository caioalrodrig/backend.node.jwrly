import 'dotenv/config';
import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import * as jwt from 'jsonwebtoken';
import { Shared } from '../../shared';

interface IUsuario{
  id?: number;
  email: string;
  password: string;
};

interface IBodyValidation extends Omit<IUsuario, 'id'> {};

const usuario: yup.ObjectSchema<IBodyValidation> = yup.object().shape({
  email: yup.string().email().defined(),
  password: yup.string().defined(),
}); 

const validateSignIn = Shared.validation({body: usuario});

const signIn: RequestHandler = async (req, res, next) => {
  const hashedPassword: string = await Shared.hashPassword(req.body.password);
  const verifiedPassword = await Shared.verifyPassword(hashedPassword);

  if (verifiedPassword){
    const token = jwt.sign(
      { email: req.body.email },
      process.env.KEY!,
      { expiresIn: '20min' }
    );
    return res.status(StatusCodes.OK).json({
      message: 'Authenticated successfully',
      signature: token
    });
  } else{
    return res.status(StatusCodes.UNAUTHORIZED).json({
      errors: {
        default: 'Email ou senha são inválidos'
      }
    });
  }

};

export { validateSignIn, signIn }