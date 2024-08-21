import { Knex } from "../../knex";
import { IRelogio } from "../../schemas";

type TParam = Record<string, any>;

export const get = async (queryParams: TParam) => {
  const params = Object.entries(queryParams);
  let queryBuilder = Knex('relogios');
  let priceMin; 
  let priceMax;

  params.forEach(([key, value]) => {
    if( key === 'model' || key === 'brand' || key === 'price' ){
      queryBuilder = queryBuilder.where(key, value);
    }
    if( key === 'priceMin' ) priceMin = value;
    if( key === 'priceMax' ) priceMax = value;   
  });

  if ( !priceMax ) priceMax = 999999; 
  if ( !priceMin ) priceMin = 0;  

  queryBuilder = queryBuilder.whereBetween('price', [priceMin, priceMax]);
  
  try{
    const page = queryParams.page;
    const limit = queryParams.limit;
    const result = await queryBuilder
    .offset((page - 1) * limit)
    .limit(limit);
    
    if (typeof result === 'object') return result;

    return new Error('Erro ao consultar registro por parametro');
  } catch (error){
    return new Error('Erro ao consultar registro por parametro');
  }
};

