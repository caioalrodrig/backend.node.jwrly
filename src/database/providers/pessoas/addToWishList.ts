import { Knex } from "../../knex";

export const addToWishList = async (userId: number, watchId: number): Promise<object | Error> =>{
  try{
    console.log(userId);
    console.log(watchId);

    const result = Knex('usuarios')
    .insert({likes: watchId})
    .where('id', userId);

    if (typeof result === 'object') return result;

    return new Error('Erro ao curtir');
  } catch (erro){
    return new Error('Erro ao curtir');
  }
};