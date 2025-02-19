type MirrorArray<T extends readonly string[]> = {
  [K in T[number]]: K;
};

export const createMirror = <T extends readonly string[]>(arr: T): MirrorArray<T> => {
  return Object.fromEntries(arr.map(key => [key, key])) as MirrorArray<T>;
};
