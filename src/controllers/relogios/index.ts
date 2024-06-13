import * as create from './Create';
import * as getAll from './GetAll';
import * as get from './Get';


export const RelogiosController = {
  ...create,
  ...getAll,
  ...get,
};