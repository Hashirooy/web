import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { AlignText, Text, TextTheme } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './ProfileCard.module.scss';
import { Profile } from 'entities/Profile/model/types/profile';
import { Loader } from 'shared/ui/Loader/Loader';
import { getProfileReadonly } from 'entities/Profile/model/selectors/getProfileReadonly/getProfileReadonly';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Select } from 'shared/ui/Select/Select';
import { Currency } from 'entities/Currency/types/currency';
import { CurrencySelect } from 'entities/Currency';

import { Country } from 'entities/Country/types/country';
import { CountrySelect } from 'entities/Country';

interface ProfileCardProps {
    className?: string;
    data?:Profile
    isLoading?:boolean
    error?:string
    onChangeLastname:(value:string)=>void
    onChangeFirstname:(value:string)=>void
    onChangeCity:(value:string)=>void
    onChangeAge:(value:string)=>void
    onChangeAvatar:(value:string)=>void
    onChangeUsername:(value:string)=>void
    onChangeCurrency:(currency:Currency)=>void
    onChangeCountry:(country:Country)=>void
    readonly?:boolean
}

export const ProfileCard = (props: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const { className, data, isLoading, error,onChangeFirstname, onChangeLastname,readonly,onChangeAge,onChangeCity,onChangeUsername,onChangeAvatar,onChangeCurrency,onChangeCountry } = props

    if(isLoading){
        return(
        <div className={classNames(cls.ProfileCard, {[cls.loading]:true}, [className])}>
            <Loader/>
        </div>)
    }

    if(error){
        return(<div className={classNames(cls.ProfileCard, {[cls.error]:true}, [className])}>
            <Text theme ={TextTheme.ERROR}title={"Reload page"} text={"page reload"}
            align={AlignText.center}/>
        </div>)
    }

    const mods:Mods={
        [cls.editing]:!readonly
    }

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.data}>
               {data?.avatar && 
               <div className={cls.avatarWrapper}>
                    <Avatar src={data.avatar}/>
                </div>}
                <Input
                    value={data?.first}
                    placeholder={t('Ваше имя')}
                    className={cls.input}
                    onChange={onChangeFirstname}
                    readonly={readonly}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Ваша фамилия')}
                    className={cls.input}
                    onChange={onChangeLastname}
                    readonly={readonly}
                />
                     <Input
                    value={data?.age}
                    placeholder={t('Ваша возраст')}
                    className={cls.input}
                    onChange={onChangeAge}
                    readonly={readonly}
                />
                     <Input
                    value={data?.city}
                    placeholder={t('Ваша город')}
                    className={cls.input}
                    onChange={onChangeCity}
                    readonly={readonly}
                />
          
                        <Input
                    value={data?.username}
                    placeholder={t('Ваша юзернейм')}
                    className={cls.input}
                    onChange={onChangeUsername}
                    readonly={readonly}
                />
                <CurrencySelect
                className={cls.input}
                onChange={onChangeCurrency}
                value={data?.currency}
                readonly={readonly}
                />

                <CountrySelect
                className={cls.input}
                onChange={onChangeCountry}
                value={data?.country}
                readonly={readonly}
                />
                  
             
            </div>
        </div>
    );
};
