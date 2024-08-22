import * as create from './Create';
import * as getAll from './GetAll';
import * as get from './Get';
import * as updateById from './Update';
import * as getByTitle from './GetByTitle'

export const RelogiosController = {
  ...create,
  ...getAll,
  ...get,
  ...updateById,
  ...getByTitle,
};