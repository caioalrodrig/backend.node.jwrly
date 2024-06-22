import * as passwordCrypt from "./passwordCrypt";
import * as tokenJWT from "./tokenAccess";

export const Services = {
  ...passwordCrypt,
  ...tokenJWT,
}