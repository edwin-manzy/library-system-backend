export const removeCircularDependency =
  <T = object,>(obj: T, seen: Map<any, boolean> = new Map<any, boolean>()): Partial<T> => {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  seen.set(obj, true);
  const entries = Object.entries(obj);
  entries.forEach(([key, value]): void => {
    if (typeof value !== 'object') {
      return;
    }

    if (seen.has(value)) {
      delete obj[key as keyof T];
      return;
    }

    seen.set(value, true);
    removeCircularDependency(value, seen)
  })

  return obj;
}