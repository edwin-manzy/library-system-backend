import { removeCircularDependency } from "src/utils/json"

export const buildSuccessfulJsonResponse = <T=object,>(data: T): {data: Partial<T>} => {
  removeCircularDependency(data);
  return { data }
}