import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Counter.module.scss"
import { Button } from "shared/ui/Button/Button";
import { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../model/slice/CounterSlice";
import { StateSchema } from "app/providers/StoreProviders/config/StateSchema";
import { getCounterValue } from "../model/selector/getCounterValue/getCounterValue";

export interface CounterProps {
  className?: string;
}


export const Counter = (props: CounterProps) => {
    const dispatch = useDispatch()
    const counterValue = useSelector(getCounterValue)

    const increment = ()=>{
        dispatch(counterActions.increment())
}
const decrement = ()=>{
     dispatch(counterActions.decrement())
}
    const { className}= props
  return (<div className={classNames(cls.counter, {},[className])}>
    <h1 test-id="value-id">{counterValue}</h1>
    <Button onClick={increment} test-id="increment-id">increment</Button>
    <Button onClick={decrement}test-id="decrement-id">decrement</Button>
  </div>);
};