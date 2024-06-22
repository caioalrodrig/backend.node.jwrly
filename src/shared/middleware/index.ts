import * as Validation from './Validation';
import * as Authorization from './Authorization';

export const Middleware = {
  ...Validation,
  ...Authorization,
}