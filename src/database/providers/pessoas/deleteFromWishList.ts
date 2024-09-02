import { Knex } from "../../knex";

export const deleteFromWishList = async (likeInfo: any): Promise<number | Error> =>{
  try{

    const result = await Knex('pessoa')
    .where({
      user_id: likeInfo.userId,
      relogio_id: likeInfo.watchId 
    })
    .delete().returning('relogio_id');

    if (typeof result === 'number') return result;

    return new Error('Erro ao descurtir');
  } catch (erro){
    return new Error('Erro ao descurtir');
  }
};