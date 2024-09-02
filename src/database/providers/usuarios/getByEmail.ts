import { Knex } from "../../knex";
import { IUsuario } from '../../schemas';

export const getByEmail = async (email: string): Promise<IUsuario | Error> =>{
  try{
    const [ result ] = await Knex('usuarios')
      .where('email', email);
    
    if (typeof result === 'object') return result;
    
    return new Error('Erro de login');
  } catch (erro){
    return new Error('Erro de login');
  }
};
