import * as jwt from 'jsonwebtoken';
import { createHmac } from 'crypto';
import { RequestHandler } from 'express';


const payload = { 
  id: 1,
  username: 'user',
};

const createAcces: RequestHandler = (req, res, next) => {
  if ( req ) {
    try {
      const token = jwt.sign(payload, process.env.KEY!, { expiresIn: '1h' });
        return token;
      } catch (error) {
       return {
          default: error.message 
       };
    }
    } else {
      return {
        error: 'Invalid password'
      };
    }
};

export {createAcces};