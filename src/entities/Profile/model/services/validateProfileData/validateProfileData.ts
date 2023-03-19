import { type Profile, ValidateProfileError } from '../../types/profile';

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [ValidateProfileError.NO_DATA];
  }

  const { first, lastname } = profile;
  const errors: ValidateProfileError[] = [];

  if (!first || !lastname) {
    errors.push(ValidateProfileError.INCORRECT_USER_DATA);
  }

  return errors;
};
