export const isBlank = (value: string): boolean => {

  if (value.trim() === '') {
    return false;
  }

  return true;
};
