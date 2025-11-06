
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./AddCommentForm.module.scss"
import { Input } from "shared/ui/Input/Input"
import { Button, ButtonTheme } from "shared/ui/Button/Button"
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"
import { getCommentFormError, getCommentFormLoading, getCommentFormText } from "features/addNewComment/model/selector/getCommentForm"
import { useSelector } from "react-redux"
import { useCallback } from "react"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import { addCommentSliceActions, addCommentSliceReducer } from "features/addNewComment/model/slice/addCommentSlice"


interface AddCommentFormProps {
    classname?:string
    onSendComment: (text:string)=>void
}



const AddCommentForm = (props:AddCommentFormProps)=>{
    const {classname , onSendComment} = props
    const text = useSelector(getCommentFormText)
    const loading = useSelector(getCommentFormLoading)
    const error = useSelector(getCommentFormError)
    const dispatch = useAppDispatch();

    const redusers:ReducersList={
        addCommentForm:addCommentSliceReducer
    }
    const onCommentChange = useCallback((value:string)=>{
                dispatch(addCommentSliceActions.setText(value))
    },[dispatch])
    const onSendCommentHandler = useCallback(()=>{
         onSendComment(text || "")
         dispatch(addCommentSliceActions.setText(""))
    },[dispatch,onSendComment,text])
    return(
    <DynamicModuleLoader reducers={redusers} removeAfterUnmount>
    <div className={classNames(cls.addCommentForm, {}, [classname])}>
        <Input className={cls.input}placeholder="Введите комментарий" value={text} onChange={onCommentChange}/>
        <Button theme={ButtonTheme.OUTLINE} onClick={onSendCommentHandler}>Отправить</Button>
    </div>
    </DynamicModuleLoader>)
}

export default AddCommentForm