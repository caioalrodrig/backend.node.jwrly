import { query, Request, RequestHandler, Response } from 'express';
import { StatusCodes } from 'http-status-codes'; 
import {relogios} from '../../database/';

export const getAllRelogios: RequestHandler = ( req, res, next ) => {

  // console.log("Hey");

  //return res.status(StatusCodes.OK).json(relogios); 
};