import { classNames, Mods } from "shared/lib/classNames/classNames"
import { Select } from "shared/ui/Select/Select"

import cls from "./CurrencySelect.module.scss"
import { Currency } from "entities/Currency/types/currency"
import { ChangeEvent } from "react"

interface CurrencySelectProps{
    className?:string
    value?:Currency
    onChange?: (value:Currency)=>void
    readonly?:boolean
}

export const CurrencySelect = (props:CurrencySelectProps)=>{
    const {className, value, onChange, readonly} = props
      const onChangeHandler = (value:string)=>{
            onChange?.(value as Currency)
        }
    const optionsList = [
                        {value:Currency.RUB, content:Currency.RUB},
                        {value:Currency.EUR, content:Currency.EUR},
                        {value:Currency.USD, content:Currency.USD},]
    return(<Select label='Укажите Валюту' options={optionsList}
                         className={classNames("", {}, [className])}
                         value={value}
                         onChange={onChangeHandler}
                         readonly={readonly}/>
                         )
}