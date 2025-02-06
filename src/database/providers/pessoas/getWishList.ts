import { query } from "express";
import { Knex } from "../../knex";
import pino from "pino";

export const get = async (queryParams: Record<string, any>): Promise<object> => {
  const logger = pino({ level: 'debug' });
  
  try{
    const result: object = await Knex('relogios')
    .join('pessoa', 'relogios.id', '=', 'pessoa.relogio_id')
    .join('usuarios', 'usuarios.id', '=', 'pessoa.user_id')
    .where('usuarios.id', queryParams.userId)
    .select('relogios.title','relogios.id')
    .offset((queryParams.page - 1) * queryParams.limit )
    .limit( queryParams.limit );
    
    logger.info(result);

    if (typeof result === 'object') return result;

    return new Error('Erro ao consultar likes do usuario');
  } catch (error){
    logger.info(error);

    return new Error('Erro ao consultar likes do usuario');
  }
};

