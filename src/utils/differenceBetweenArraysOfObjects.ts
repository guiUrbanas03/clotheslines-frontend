function arrayDifference<T>(array1: T[], array2: T[], keyToCompare: keyof T) {
  return array1.filter((object1: T) => {
    return !array2.some((object2: T) => {
      return object1[keyToCompare] === object2[keyToCompare];
    });
  });
}

export function differenceBetweenArrayOfObjects<T>(
  array1: T[],
  array2: T[],
  keyToCompare: keyof T,
) {
  const difference1 = arrayDifference(array1, array2, keyToCompare);

  const difference2 = arrayDifference(array2, array1, keyToCompare);

  return [...difference1, ...difference2];
}
