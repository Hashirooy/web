import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { fetchProfileData, getProfileForm, getProfileReadonly, getProfileValidateErrors, profileActions, ProfileCard, profileReducer } from 'entities/Profile';
import { useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { Currency } from 'entities/Currency/types/currency';
import { Country } from 'entities/Country';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Theme } from 'app/providers/ThemeProvider';


const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
        const form = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const errors = useSelector(getProfileValidateErrors)
    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);
    const onChangeFirstname = useCallback((value?:string)=>{
        dispatch(profileActions.updateProfile({first:value||""}))
    },[dispatch])
     const onChangeLastname = useCallback((value?:string)=>{
        dispatch(profileActions.updateProfile({lastname:value||""}))
    },[dispatch])
      const onChangeAge = useCallback((value?:string)=>{
        dispatch(profileActions.updateProfile({age:Number(value)||0}))
    },[dispatch])
      const onChangeCity = useCallback((value?:string)=>{
        dispatch(profileActions.updateProfile({city:value||""}))
    },[dispatch])
      const onChangeAvatar = useCallback((value?:string)=>{
        dispatch(profileActions.updateProfile({avatar:value||""}))
    },[dispatch])
      const onChangeUsername = useCallback((value?:string)=>{
        dispatch(profileActions.updateProfile({username:value||""}))
    },[dispatch])
     const onChangeCurrency = useCallback((currency?:Currency)=>{
        dispatch(profileActions.updateProfile({currency}))
    },[dispatch])
    const onChangeCountry = useCallback((country?:Country)=>{
        dispatch(profileActions.updateProfile({country}))
    },[dispatch])
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfilePageHeader/>
                {errors && errors.map((error, key)=>{
                    return <Text theme={TextTheme.ERROR} text={error}/>
                })}
                <ProfileCard data={form}
                 isLoading={isLoading}
                  error={error}
                   onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    readonly={readonly}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                    />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
