import { Knex } from "../../knex";
import { IUsuario } from "../../schemas";

export const signUp = async (usuario: Omit<IUsuario,'id' | 'likes'>): Promise<string | Error> => {
  try{
    const [ result ] = await Knex('usuarios')
      .insert(usuario)
      .returning('name');
      
    if (typeof result === 'object') return result.name;
    if (typeof result === 'string') return result;

    return new Error('Erro ao inserir usuario');
  } catch (erro){
    return new Error('Erro ao cadastrar o usuario');
  }
};

