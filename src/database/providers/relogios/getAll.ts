import { Knex } from "../../knex";
import { IRelogio } from "../../schemas";

export const getAll = async () => {
  try{
    const [ result ] = await Knex('relogios').select();

    if (typeof result === 'object') return result;

    return new Error('Erro ao consultar todos os registros');
  } catch (error){
    return new Error('Erro ao consultar todos os registros');
  }
};

