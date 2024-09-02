import { Knex } from "../../knex";

export const addToWishList = async (likeInfo: any): Promise<object | Error> =>{
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
    return new Error('Erro ao curtir');
  }
};