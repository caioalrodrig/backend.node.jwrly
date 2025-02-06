import { Knex } from "../../knex";
import pino from "pino";

export const addToWishList = async (likeInfo: any): Promise<object | Error> =>{
  const logger = pino({ level: 'debug' });

  try{
    const pessoaLikes = {
      user_id: likeInfo.userId,
      relogio_id: likeInfo.watchId 
    }; 

    const result = await Knex('pessoa')
    .insert(pessoaLikes)
    .returning(['user_id','relogio_id']);

    if (typeof result === 'object') return result;

    return new Error('Erro ao curtir');
  } catch (erro){
    logger.error(erro);

    return new Error('Erro ao curtir');
  }
};