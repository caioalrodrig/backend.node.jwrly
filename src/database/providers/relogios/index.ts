import * as create from './create';
import * as getAll from './getAll';
import * as get from './get';

export const RelogiosProvider = {
  ...create,
  ...getAll,
  ...get,
};