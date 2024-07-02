import { Knex } from "../../knex";

export const addToWishList = async (userId: number, watchId: number): Promise<object | Error> =>{
  try{
    const pessoaLikes = {
      user_id: userId,
      relogio_id: watchId 
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