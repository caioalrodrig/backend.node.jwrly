import { Knex } from "../../knex";

export const deleteFromWishList = async (userId: number, watchId: number): Promise<number | Error> =>{
  try{
    const pessoaLikes = {
      user_id: userId,
      relogio_id: watchId 
    }; 

    const result = await Knex('pessoa')
    .where({
      user_id: userId,
      relogio_id: watchId
    })
    .delete().returning('relogio_id');

    if (typeof result === 'number') return result;

    return new Error('Erro ao descurtir');
  } catch (erro){
    return new Error('Erro ao descurtir');
  }
};