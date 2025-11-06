import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Profile, ProfileValidateError } from "../../types/profile";
import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm";
import { validateProfile } from "../validateProfile/validateProfile";

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ProfileValidateError[]>
>("profile/updateProfileData", async (_, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi;
  const formData = getProfileForm(getState());

  const error = validateProfile(formData);

  if (error.length) {
    return rejectWithValue(error);
  }

  try {
    const response = await extra.api.put<Profile>("/profile/" + formData?.id, formData);

    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue([ProfileValidateError.SERVER_ERROR]);
  }
});
