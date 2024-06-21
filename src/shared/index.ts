import * as middleware from './middleware';
import * as services from './services';

export const Shared = {
  ...middleware,
  ...services
}