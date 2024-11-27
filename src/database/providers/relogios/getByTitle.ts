import { Knex } from "../../knex";

type TParam = Record<string, any>;

export const getByTitle = async (queryParams: TParam) => {

  try{
    const result = await Knex('relogios')
      .select('title','id')
      .where('title', 'like', `%${queryParams.title}%`)
      .limit(queryParams.limit);
    
    if (typeof result === 'object') return result;

    return new Error('Erro ao consultar registro por parametro');
  } catch (error){
    return new Error('Erro ao consultar registro por parametro');
  }
};

