import * as create from './create';
import * as getAll from './getAll';
import * as get from './get';
import * as count from './count';

export const RelogiosProvider = {
  ...create,
  ...getAll,
  ...get,
  ...count,
};