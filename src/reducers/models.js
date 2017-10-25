import Immutable from 'immutable';

export const User = Immutable.Record({
  id: null,
  username: null,
  name: null,
  email: null,
  nickname: null,
  phone: null,
  gender: null,
  position: null,
  lock_version: null,
  role_id: null,
  role_name: null,
  abilities: null,
  production_process_id: null,
  production_process_name: null,
});