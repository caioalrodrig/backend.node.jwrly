import * as addToWishList from '../pessoas/addToWishList';
import * as getByEmail from './getByEmail';
import * as signUp from './signUp';

export const UsuariosProvider = {
  ...addToWishList,
  ...getByEmail,
  ...signUp,
};