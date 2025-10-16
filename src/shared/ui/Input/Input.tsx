import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Input.module.scss"
import { InputHTMLAttributes, memo, useEffect, useRef, useState } from "react"

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">

interface inputProps extends HTMLInputProps  {
    className?:string
    value?:string
    onChange:(value:string)=>void
    type?:string
    autoFocus?:boolean
}
export const Input = memo((props:inputProps)=>{
    const {className, value, onChange, type="text", placeholder, autoFocus }=props
    const [isFocus, setIsFocus] = useState(false)
    const [caretPosition, setCaretPosition] = useState(0)
    const ref = useRef<HTMLInputElement>(null)
    const onBlur = ()=>{
        setIsFocus(false)
    }

    const onFocus = ()=>{
        setIsFocus(true)
    }
    const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
    onChange?.(e.target.value)
    setCaretPosition(e.target.value.length)
}

const onSelect = (e:any)=>{
    setCaretPosition(e?.target?.selectionStart || 0)
}

useEffect(()=>{
    if(autoFocus){
        setIsFocus(true)
        ref.current?.focus()
    }
},[autoFocus])
    return <div className={classNames(cls.inputWrapper, {}, [className])}>
        {placeholder &&<div className={cls.placeholder}>{placeholder + ">"}</div>}
        <div className={cls.caretWrapper}>
              <input className={cls.input}type={type} value={value} onChange={onChangeHandler} onFocus={onFocus} onBlur={onBlur} onSelect={onSelect} ref={ref}/>
              {isFocus && <span className={cls.caret} style={{
                left: `${caretPosition*9}px`
              }}></span>}
        </div>
        </div>
})