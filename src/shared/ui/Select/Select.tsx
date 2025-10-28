import { classNames, Mods } from "shared/lib/classNames/classNames"
import cls from "./Select.module.scss"
import { ChangeEvent, useMemo } from "react"


type SelectOptions = {
    value:string,
    content:string
}

interface SelectProps{
    className?:string
    label?:string
    options?:SelectOptions[]
    value?:string
    onChange?:(str:string)=> void
    readonly?:boolean
}

export const Select = (props:SelectProps, )=>{
    const{className,label,options, value, onChange,readonly}=props

   const optionsList = useMemo(() => options?.map((opt) => (
        <option
            className={cls.option}
            value={opt.value}
            key={opt.value}
        >
            {opt.content}
        </option>
    )), [options]);

    const onChangeHandler = (e:ChangeEvent<HTMLSelectElement>)=>{
        onChange?.(e.target.value)
    }

    const mods:Mods={
        
    }
    return (<div className={classNames(cls.wrapper, mods,[className])}>
            {label &&<span className={cls.label}>{`${label}>`}</span>}
            <select disabled={readonly}value={value}name="" id="" className={cls.select} onChange={onChangeHandler}>
            {optionsList}
            </select>
        </div>)
}