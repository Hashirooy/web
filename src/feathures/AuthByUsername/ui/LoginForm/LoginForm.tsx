import { classNames } from "shared/lib/classNames/classNames"
import cls from "./LoginForm.module.scss"
import { Modal } from "shared/ui/Modal/Modal"
import { useTranslation } from "react-i18next"
import { Button } from "shared/ui/Button/Button"
import { Input } from "shared/ui/Input/Input"
import { useState } from "react"

export interface LoginFormProps{
    className?:string
}

export const LoginForm = (props:LoginFormProps)=>{
    const [value, setValue]= useState("")
    const onChange = (value:string)=>{
        setValue(value)
    }
    const {className} = props
    const{t}= useTranslation()
    return(<form className={classNames(cls.loginForm,{},[className])}>
        
        <Input type="text"  value={value }onChange={onChange} placeholder={t("Введите имя пользователя")} autoFocus={true}/>
        <Input type="text" value={value }onChange={onChange} placeholder={t("Введите Пароль")}/>
        <Button>{t("Войти")}</Button>
    </form>)
}