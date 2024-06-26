import { Knex } from "../../knex";
import { IUsuario } from "../../schemas";

export const signIn = async (usuario: Omit<IUsuario,'id'>): Promise<number | Error> => {
  try{
    const [ result ] = await Knex('usuarios')
      .insert(usuario)
      .returning('id');
      
    if (typeof result === 'object') return result.id;
    if (typeof result === 'number') return result;

    return new Error('Erro ao inserir usuario');
  } catch (erro){
    return new Error('Erro ao cadastrar o usuario');
  }
};

