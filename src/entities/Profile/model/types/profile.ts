import { Currency } from "entities/Currency/types/currency";
import { Country } from "entities/Country/types/country";

export enum ProfileValidateError {
  INCORRECT_USER_DATA = "INCORRECT_USER_DATA",
  INCORRECT_AGE = "INCORRECT_AGE",
  INCORRECT_COUNTRY = "INCORRECT_COUNTRY",
  INCORRECT_NO_DATA = "INCORRECT_NO_DATA",
  SERVER_ERROR = "SERVER_ERROR",
}

export interface Profile {
  id?:string
  first?: string;
  lastname?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
}

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
  validateError?: ProfileValidateError[];
}
