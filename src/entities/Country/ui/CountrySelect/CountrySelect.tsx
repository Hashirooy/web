import { classNames, Mods } from "shared/lib/classNames/classNames"
import { Select } from "shared/ui/Select/Select"

import cls from "./CurrencySelect.module.scss"
import { Currency } from "entities/Currency/types/currency"
import { ChangeEvent } from "react"
import { Country } from "entities/Country/types/country"

interface CountrySelectProps{
    className?:string
    value?:Country
    onChange?: (value:Country)=>void
    readonly?:boolean
}

export const CountrySelect = (props:CountrySelectProps)=>{
    const {className, value, onChange, readonly} = props
      const onChangeHandler = (value:string)=>{
            onChange?.(value as Country)
        }
    const optionsList = [
                        {value:Country.Kazakhstan, content:Country.Kazakhstan},
                        {value:Country.Russia, content:Country.Russia},
                        {value:Country.Armenia, content:Country.Armenia},]
    return(<Select label='Укажите город' options={optionsList}
                         className={classNames("", {}, [className])}
                         value={value}
                         onChange={onChangeHandler}
                         readonly={readonly}/>)
}