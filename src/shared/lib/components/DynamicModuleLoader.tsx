import { classNames } from "shared/lib/classNames/classNames";
import cls from "./DynamicModuleLoader.module.scss"
import { FC, ReactNode, useEffect } from "react";
import { useDispatch, useStore } from "react-redux";
import { ReduxStoreWithManager, StateSchema } from "app/providers/StoreProviders";
import { LoginReducer } from "feathures/AuthByUsername/model/slice/loginSlice";
import { StateSchemaKey } from "app/providers/StoreProviders/config/StateSchema";
import { Reducer } from "@reduxjs/toolkit";

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer
}
export interface DynamicModuleLoaderprops {
 
  reducers: ReducersList;
  children:ReactNode;
  removeAfterUnmount?:boolean
}

type ReducerListEntry = [StateSchemaKey, Reducer]


export const DynamicModuleLoader:FC<DynamicModuleLoaderprops> = (props: DynamicModuleLoaderprops) => {
  const {children, reducers, removeAfterUnmount = false }= props
  const dispatch = useDispatch()
      useEffect(()=>{
          const store = useStore() as ReduxStoreWithManager
      Object.entries(reducers).forEach(([name, reducer]:ReducerListEntry)=>{
        store.reducerManager.add(name, reducer)
      })
          return ()=>{
            if(removeAfterUnmount){
              Object.entries(reducers).forEach(([name, reducer]:ReducerListEntry)=>{
       store.reducerManager.remove(name)
      })
              }
              
          }
      },[])
  return(<>{children}</>)
};
