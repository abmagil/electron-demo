//@flow

import entries from 'lodash/entries';
import isNumber from 'lodash/isNumber';
import merge from 'lodash/merge';
import tail from 'lodash/tail';

// (k, v) => {k: v|{}}
type CategorySpendingType = ObjectOf<number|CategorySpendingType>

const nestObject = (key: string, value: ObjectOf<number>): CategorySpendingType => {
  const splitKey = key.split(/\./);

  if(tail(splitKey).length == 0) {
    return {
      [splitKey[0]]: value,
    };
  } else {
    return {
      [splitKey[0]]: nestObject(
        tail(splitKey).join('.'),
        value
      ),
    };
  }
};

export const flatToNested = (flatStructure: ObjectOf<number>): CategorySpendingType => {
  const listOfObjects = entries(flatStructure).map((entry) => {
    return nestObject(entry[0], entry[1]);
  });
  return merge({}, ...listOfObjects);
};

const flattenObject = (into, keyArr, value) => {
  if(isNumber(value)) {
    const key = keyArr.join('.');
    into[key] = value;
  } else {
    entries(value).forEach(([k,v]) => {
      flattenObject(into, [...keyArr, k], v);
    });
  }
};

export const nestedToFlat = (nestedStructure: CategorySpendingType): ObjectOf<number> => {
  let built = {};

  entries(nestedStructure).forEach(([key, value]) => {
    flattenObject(built, [key], value);
  });
  return built;
};
