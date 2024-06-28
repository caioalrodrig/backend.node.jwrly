import { Knex } from "../../knex";

export const getByEmail = async (email: string, field: string): Promise<string | number | Error> =>{
  try{
    const [ result ] = await Knex('usuarios')
      .select(field)
      .where('email', email);
    
    if (typeof result === 'object') return result[field];
    if (typeof result === 'number' || typeof result === 'string') return result;

    return new Error('Erro de login');
  } catch (erro){
    return new Error('Erro de login');
  }
};
