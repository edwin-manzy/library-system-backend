/**
  * Check if the email is valid
  * @param {string} userEmail - The email to validate
  * @returns {boolean} - Returns boolean if the email is valid
 */

export const isEmail = (userEmail: string): boolean => {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(userEmail);
};
