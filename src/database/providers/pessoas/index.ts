import * as addToWishList from './addToWishList'
import * as deleteFromWishList from './deleteFromWishList';
import * as getWishList from './getWishList';
import * as count from './count';


export const PessoasProvider = {
  ...addToWishList,
  ...deleteFromWishList,
  ...getWishList,
  ...count,

};