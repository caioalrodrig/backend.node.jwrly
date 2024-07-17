
import { Knex } from "../../knex";
import { IRelogio } from "../../schemas";

export const getAll = async (bodyParams: Record<string, any>) => {
  try{
    const result = await Knex('relogios')
    .select()
    .offset((bodyParams.page - 1) * bodyParams.limit)
    .limit(bodyParams.limit);

    if (typeof result === 'object') return result;

    return new Error('Erro ao consultar todos os registros');
  } catch (error){
    return new Error('Erro ao consultar todos os registros');
  }
};