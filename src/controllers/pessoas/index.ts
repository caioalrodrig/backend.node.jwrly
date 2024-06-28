import * as create from './Create';
import * as getAll from './GetAll';
import * as get from './Get';
import * as updateById from './Update';
import * as addToWishList from './AddToWishList';


export const PessoasController = {
  ...create,
  ...getAll,
  ...get,
  ...updateById,
  ...addToWishList,
};