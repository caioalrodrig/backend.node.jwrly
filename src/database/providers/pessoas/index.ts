import * as addToWishList from './addToWishList'
import * as deleteFromWishList from './deleteFromWishList';
import * as getWishList from './getWishList';


export const PessoasProvider = {
  ...addToWishList,
  ...deleteFromWishList,
  ...getWishList,

};