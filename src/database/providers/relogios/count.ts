import { Knex } from "../../knex";
import { IRelogio } from "../../schemas";

export const count = async (queryParams: Record<string, any>) => {
  const params = Object.entries(queryParams);
  let queryBuilder = Knex('relogios');
  let priceMin; 
  let priceMax;

  params.forEach(([key, value]) => {
    if( key === 'price' || key === 'brand' || key === 'model' ){
      queryBuilder = queryBuilder.where(key, value);
    }
    if( key === 'priceMin' ) priceMin = value;
    if( key === 'priceMax' ) priceMax = value;   
  });

  if ( !priceMax ) priceMax = 999999; 
  if ( !priceMin ) priceMin = 0;  

  queryBuilder = queryBuilder.whereBetween('price', [priceMin, priceMax]);
  
  try{
    const [{ count }] = await queryBuilder
     .count<[{ count: number }]>('* as count');
    
    if (typeof count === 'number') return count;

    return new Error('Erro ao consultar registro por parametro');
  } catch (error){
    return new Error('Erro ao consultar registro por parametro');
  }
};

