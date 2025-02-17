import { removeCircularDependency } from ".."

export const buildSuccessfulJsonResponse = <T=object,>(data: T): {data: Partial<T>} => {
  removeCircularDependency(data);
  return { data }
}