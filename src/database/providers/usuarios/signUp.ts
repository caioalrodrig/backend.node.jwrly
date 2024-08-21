import { Knex } from "../../knex";
import { IUsuario } from "../../schemas";

export const signUp = async (usuario: Omit<IUsuario,'id' | 'likes'>): Promise<string | Error> => {
  const [ result ] = await Knex('usuarios')
    .insert(usuario)
    .returning('name');
    
  if (typeof result === 'object') return result.name;
  if (typeof result === 'string') return result;
  return '';

};

