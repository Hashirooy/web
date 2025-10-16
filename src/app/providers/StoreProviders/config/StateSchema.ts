import { CounterSchema } from "app/entities/Counter";
import { userSchema } from "app/entities/User";

export interface StateSchema {
  counter: CounterSchema;
  user: userSchema;
}
