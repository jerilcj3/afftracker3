//This deep clones a given object
import { RawNodeDatum } from 'react-d3-tree/lib/types/common';


export function structuredClones(objectToClone: RawNodeDatum | RawNodeDatum[]) {
  const stringified = JSON.stringify(objectToClone);
  const parsed = JSON.parse(stringified);
  return parsed;
}
