import { Knex } from "../../knex";

export const count = async (userId: string): Promise<number | Error> => {
  try{
    const [{ count }] = await Knex('pessoa')
    .select('relogio_id')
    .where('user_id', userId)
    .count<[{ count: number }]>('* as count');
    
    if (typeof count === 'number') return count;

    return new Error('Erro ao consultar likes do usuario');
  } catch (error){
    return new Error('Erro ao consultar likes do usuario');
  }
};
