import * as addToWishList from './AddToWishList';
import * as deleteFromWishList from './DeleteFromWishList';
import * as getWishList from './GetWishList';
import * as IPessoaQParams from './IPessoa'

export const PessoasController = {
  ...addToWishList,
  ...deleteFromWishList,
  ...getWishList,
  ...IPessoaQParams
};