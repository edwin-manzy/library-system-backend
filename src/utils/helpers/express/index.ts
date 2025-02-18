import { BadRequestError } from "src/utils/errors/request/bad-request";
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
export const validateRequestProps = <T extends Record<PropertyKey, any> = object, K extends PropertyKey = keyof T>(obj: T, ...keys: K[]) => {
  const missingKeys: (string | number | symbol)[] = [];

  keys.forEach((key) => {
    if (!{}.hasOwnProperty.call(obj, key) || obj[key] === undefined || obj[key] === null || obj[key] === '' ) {
      missingKeys.push(key);
    }
  })

  if (missingKeys.length > 0) {
    throw new BadRequestError('The request has missing or invalid data.');
  }
}

export const signToken = <T extends object>(data: T): T => {

}