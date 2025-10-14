import { DeepPartial } from "@reduxjs/toolkit";
import { counterReducer, counterActions } from "./CounterSlice";
import { StateSchema } from "app/providers/StoreProviders/config/StateSchema";
import { CounterSchema } from "../types/counterSchema";

describe("counterSlice test", () => {
  test("decrement", () => {
    const state: CounterSchema = { value: 10 };

    expect(counterReducer(state as CounterSchema, counterActions.decrement())).toEqual({
      value: 9,
    });
  });
  test("increment", () => {
    const state: CounterSchema = { value: 10 };

    expect(counterReducer(state as CounterSchema, counterActions.increment())).toEqual({
      value: 11,
    });
  });
});
