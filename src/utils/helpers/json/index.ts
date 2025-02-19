export const removeCircularDependency =
  <T extends PropertyKey | object = object,>(obj: T, seen: Map<PropertyKey | object, boolean> = new Map<PropertyKey | object, boolean>()): Partial<T> => {
    if (!obj || typeof obj !== 'object') {
      return obj;
    }

    seen.set(obj, true);
    const entries = Object.entries(obj);
    entries.forEach(([key, value]): void => {
      if (typeof value !== 'object') {
        return;
      }

      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      if (seen.has(value)) {
        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
        delete obj[key as keyof T];
        return;
      }

      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      seen.set(value, true);
      removeCircularDependency(value, seen);
    });

    return obj;
  };
