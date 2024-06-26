import { Knex } from "../../knex";
import { IRelogio } from "../../schemas";

export const create = async (relogio: Omit<IRelogio,'id'>): Promise<number | Error> => {
  try{
    const [ result ] = await Knex('relogios')
      .insert(relogio)
      .returning('id');
      
    if (typeof result === 'object') return result.id;
    if (typeof result === 'number') return result;

    return new Error('Erro ao inserir registro');
  } catch (erro){
    return new Error('Erro ao cadastrar o registro');
  }
};

