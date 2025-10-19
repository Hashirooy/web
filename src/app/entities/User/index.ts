import { getUserAuthData } from "./model/selectors/getUserAuthData/getUserAuthData";
import { userActions, userReducer } from "./model/slice/userSlice";
import { User, userSchema } from "./model/type/user";

export { userReducer, userActions };

export { User, userSchema };

export { getUserAuthData };
