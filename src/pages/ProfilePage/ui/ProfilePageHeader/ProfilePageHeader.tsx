import { classNames } from "shared/lib/classNames/classNames"
import cls from "./ProfilePageHeader.module.scss"
import { Button, ButtonTheme } from "shared/ui/Button/Button"
import {Text} from "shared/ui/Text/Text"

import { useTranslation } from "react-i18next"
import { getProfileReadonly, profileActions, updateProfileData } from "entities/Profile"
import { useSelector } from "react-redux"
import { useCallback } from "react"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import { getUserAuthData } from "entities/User"
import { getProfileData } from "entities/Profile/model/selectors/getProfileData/getProfileData"
import { useParams } from "react-router-dom"


export interface ProfilePageHeaderProps{
    className?:string
}
export const ProfilePageHeader = ({className}:ProfilePageHeaderProps)=>{
    const { t } = useTranslation('profile');
    const readonly = useSelector(getProfileReadonly)
    const dispatch = useAppDispatch()
    const {id} = useParams<{id:string}>()
    const onEdit = useCallback(()=>{
        dispatch(profileActions.setReadonly(false))
    },[dispatch])
      const onCanselEdit = useCallback(()=>{
        dispatch(profileActions.canselEdit())
    },[dispatch])
    const auth = useSelector(getUserAuthData)
    const profile = useSelector(getProfileData)
    const canEdith = auth?.id === profile?.id
    const onSave = useCallback(()=>{
        dispatch(updateProfileData())
    },[])
    return(<div className={classNames(cls.profilepageheader,{},[className])}>
          <Text title={t('Профиль')} />
          {canEdith &&(
            <div className={cls.buttons}>
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
            </div>
          )}
     
    </div>)
}