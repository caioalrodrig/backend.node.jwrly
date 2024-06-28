import * as addToWishList from './addToWishList'
import * as deleteFromWishList from './deleteFromWishList';

export const UsuariosController = {
  ...addToWishList,
  ...deleteFromWishList,

};