import * as create from './create';
import * as getAll from './getAll';
import * as get from './get';
import * as count from './count';
import * as getByTitle from './getByTitle';

export const RelogiosProvider = {
  ...create,
  ...getAll,
  ...get,
  ...count,
  ...getByTitle,
};