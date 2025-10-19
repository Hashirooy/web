import { classNames } from "shared/lib/classNames/classNames"
import cls from "./LoginForm.module.scss"
import { Modal } from "shared/ui/Modal/Modal"
import { useTranslation } from "react-i18next"
import { Button } from "shared/ui/Button/Button"
import { Input } from "shared/ui/Input/Input"
import { memo, useCallback, useEffect, useState } from "react"
import { useDispatch, useSelector, useStore } from "react-redux"
import { LoginActions, LoginReducer } from "feathures/AuthByUsername/model/slice/loginSlice"
import { getLoginState } from "feathures/AuthByUsername/model/selectors/getLoginState/getLoginState"
import { loginByUsername } from "feathures/AuthByUsername/model/service/loginByUsername/loginByUsername"
import { Text, TextTheme } from "shared/ui/Text/Text"
import { ReduxStoreWithManager } from "app/providers/StoreProviders"
import { getLoginUsername } from "feathures/AuthByUsername/model/selectors/getLoginState/getLoginUsername/getLoginUsername"
import { getLoginPassword } from "feathures/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword"
import { getLoginIsLoading } from "feathures/AuthByUsername/model/selectors/getLoginIsLoading/getLoginIsLoading"
import { getLoginError } from "feathures/AuthByUsername/model/selectors/getLoginError/getLoginError"
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader"

export interface LoginFormProps{
    className?:string
}

const initialReducers:ReducersList = {
    loginForm:LoginReducer
}

const LoginForm = memo((props:LoginFormProps)=>{
    const [value, setValue]= useState("")
    const dispatch = useDispatch()
    const store = useStore() as ReduxStoreWithManager
    const onChange = (value:string)=>{
        setValue(value)
    }

    const username = useSelector(getLoginUsername)
    const password = useSelector(getLoginPassword)
    const isLoading = useSelector(getLoginIsLoading)
    const error = useSelector(getLoginError)
    
    const onChangeUsername = useCallback((value:string)=>{
        dispatch(LoginActions.setUsername(value))
    },[dispatch])
     const onChangePassword= useCallback((value:string)=>{
        dispatch(LoginActions.setPassword(value))
    },[dispatch])
    const {className} = props
    const{t}= useTranslation()

    const onLoginClick = useCallback(()=>{
        dispatch(loginByUsername({username, password}))
    },[dispatch, username, password])
    return(
    <DynamicModuleLoader reducers={initialReducers}>
    <form className={classNames(cls.loginForm,{},[className])}>
        <div>
            <Text title={'Авторизация'} />
            {error&& <Text text={error} theme={TextTheme.ERROR}/>}
        </div>
        <Input type="text"  value={username }onChange={onChangeUsername} placeholder={t("Введите имя пользователя")} autoFocus={true}/>
        <Input type="password" value={password }onChange={onChangePassword} placeholder={t("Введите Пароль")}/>
        <Button onClick={onLoginClick} disabled={isLoading}>{t("Войти")}</Button>
    </form></DynamicModuleLoader>)
})

export default LoginForm;