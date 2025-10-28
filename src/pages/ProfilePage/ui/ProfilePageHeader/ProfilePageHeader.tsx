import { classNames } from "shared/lib/classNames/classNames"
import cls from "./ProfilePageHeader.module.scss"
import { Button, ButtonTheme } from "shared/ui/Button/Button"
import {Text} from "shared/ui/Text/Text"

import { useTranslation } from "react-i18next"
import { getProfileReadonly, profileActions, updateProfileData } from "entities/Profile"
import { useSelector } from "react-redux"
import { useCallback } from "react"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"


export interface ProfilePageHeaderProps{
    className?:string
}
export const ProfilePageHeader = ({className}:ProfilePageHeaderProps)=>{
    const { t } = useTranslation('profile');
    const readonly = useSelector(getProfileReadonly)
    const dispatch = useAppDispatch()
    const onEdit = useCallback(()=>{
        dispatch(profileActions.setReadonly(false))
    },[dispatch])
      const onCanselEdit = useCallback(()=>{
        dispatch(profileActions.canselEdit())
    },[dispatch])

    const onSave = useCallback(()=>{
        dispatch(updateProfileData())
    },[])
    return(<div className={classNames(cls.profilepageheader,{},[className])}>
          <Text title={t('Профиль')} />
                { readonly ? (<Button
                    className={cls.editBtn}
                    theme={ButtonTheme.OUTLINE}
                    onClick={onEdit}
                >
                    {t('Редактировать')}
                </Button>)
                :
                (<>
                <Button className={cls.editBtn}
                    theme={ButtonTheme.OUTLINE_RED}
                    onClick={onCanselEdit}>
                        
                        {t('Отменить')}
                </Button>
                  <Button className={cls.saveBtn}
                    theme={ButtonTheme.OUTLINE}
                    onClick={onSave}>
                        
                        {t('Сохранить')}
                </Button>
                </>)
                }
    </div>)
}