import { classNames } from "shared/lib/classNames/classNames"
import cls from "./LoginModal.module.scss"
import { Modal } from "shared/ui/Modal/Modal"
import { LoginForm } from "../LoginForm/LoginForm"
import { useTranslation } from "react-i18next"

export interface LoginModalProps{
    className?:string
    isOpen:boolean
    onClose:()=>void
}

export const LoginModal = (props:LoginModalProps)=>{
    const {className, onClose, isOpen} = props
    return(<Modal className={classNames(cls.loginModal,{},[className])} onClose={onClose} isOpen={isOpen} lazy>
        <LoginForm/>
    </Modal>)
}