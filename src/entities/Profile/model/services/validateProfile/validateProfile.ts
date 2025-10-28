import { ProfileValidateError } from "../../types/profile";

import { Profile } from "entities/Profile";

export const validateProfile = (profile?: Profile) => {
  if (!profile) {
    return [ProfileValidateError.INCORRECT_NO_DATA];
  }
  const { first, lastname, age, country } = profile;
  const error: ProfileValidateError[] = [];
  if (!first || !lastname) {
    error.push(ProfileValidateError.INCORRECT_USER_DATA);
  }

  if (!age || !Number.isInteger(age)) {
    error.push(ProfileValidateError.INCORRECT_AGE);
  }
  if (!country) {
    error.push(ProfileValidateError.INCORRECT_COUNTRY);
  }

  return error;
};
