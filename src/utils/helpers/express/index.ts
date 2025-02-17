import { removeCircularDependency } from "src/utils/helpers/json"

export const buildSuccessfulJsonResponse = <T=object,>(data: T): {data: Partial<T>} => {
  removeCircularDependency(data);
  return { data }
}

/**
 * Checks if an object contains required properties specified
 * @param obj 
 * @param keys keys of the object to verify
 * @throws BadRequestError 
 */
export const validateRequestProps = (obj: object, ...keys: (keyof object)[]) => {
  const missingKeys: string[] = [];

  keys.forEach((key: keyof object) => {
    if (!{}.hasOwnProperty.call(obj, key) || obj[key] === undefined || obj[key] === null || obj[key] === '' ) {
      missingKeys.push(key);
    }
  })

  if (missingKeys.length > 0) {

  }
}