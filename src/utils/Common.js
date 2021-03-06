import Immutable from 'immutable';

export function convertArrayToRecordMap(arr, Def, key = 'id') {
  return arr && arr.reduce(
     (acc, item) => acc.set(item[key], new Def(item)), Immutable.OrderedMap()
   );
}