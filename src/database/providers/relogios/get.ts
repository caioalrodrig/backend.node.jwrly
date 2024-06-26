import { query } from "express";
import { Knex } from "../../knex";
import { IRelogio } from "../../schemas";

export const get = async (queryParams: Record<string, any>) => {
  const params = Object.entries(queryParams);
  let queryBuilder = Knex('relogios');
  params.forEach(([key, value]) => {
    queryBuilder = queryBuilder
      .where(key, value);
  });

  try{
    const result = await queryBuilder; 

    if (typeof result === 'object') return result;

    return new Error('Erro ao consultar registro por parametro');
  } catch (error){
    return new Error('Erro ao consultar registro por parametro');
  }
};

