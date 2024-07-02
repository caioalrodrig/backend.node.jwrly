import { query } from "express";
import { Knex } from "../../knex";
import { IRelogio } from "../../schemas";

export const get = async (userId: number): Promise<object> => {
  try{
    const result: object = await Knex('pessoa')
    .select('relogio_id')
    .where('user_id',userId);
    
    if (typeof result === 'object') return result;

    return new Error('Erro ao consultar likes do usuario');
  } catch (error){
    return new Error('Erro ao consultar likes do usuario');
  }
};

