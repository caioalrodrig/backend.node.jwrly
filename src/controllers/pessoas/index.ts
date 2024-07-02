import * as addToWishList from './AddToWishList';
import * as deleteFromWishList from './DeleteFromWishList';
import * as getWishList from './GetWishList';


export const PessoasController = {
  ...addToWishList,
  ...deleteFromWishList,
  ...getWishList,
};