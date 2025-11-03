import { classNames } from "shared/lib/classNames/classNames";

import cls from "./ArticalDetail.module.scss";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { ArticalDetailsReducer } from "entities/Articale/model/slice/ArticalDetailsSlice";
import { use } from "i18next";
import { memo, useCallback, useEffect } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchArticleById } from "entities/Articale/model/services/fetchArticalById/fetchArticalById";
import { get } from "http";
import { useSelector } from "react-redux";
import { Article, getArticleSelectorData, getArticleSelectorErorr, getArticleSelectorIsloading } from "entities/Articale";
import { Loader } from "shared/ui/Loader/Loader";
import { Text, TextSize } from "shared/ui/Text/Text";
import { AlignText } from "shared/ui/Text/Text";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { Avatar } from "shared/ui/Avatar/Avatar";
import EyeIcon from 'shared/assets/icons/eye.svg'
import CalendarIcon from 'shared/assets/icons/calendar.svg'
import { Icon } from "shared/ui/Icon/Icon";
import { ArticleBlock, ArticleBlockType } from "entities/Articale/model/types/Article";
import { ArticalImageBlockComponent } from "../ArticalImageBlockComponent/ArticalImageBlockComponent";
import { ArticalCodeBlockComponent } from "../ArticalCodeBlockComponent/ArticalCodeBlockComponent";
import { ArticalTextBlockComponent } from "../ArticalTextBlockComponent/ArticalTextBlockComponent";

interface ArticalDetailsProps {
    className?: string;
    id:string;
}

const reducers:ReducersList = {
    articalDetails: ArticalDetailsReducer,
}

export const ArticalDetail = memo((props:ArticalDetailsProps) => {
    const {className, id} = props;
    const dispatch = useAppDispatch()
    const artical = useSelector(getArticleSelectorData)
    const isLoading = useSelector(getArticleSelectorIsloading)
   
    const error = useSelector(getArticleSelectorErorr)
    useEffect(()=>{
        dispatch(fetchArticleById(id))
    },[dispatch, id])

    const renderBlock = useCallback((block:ArticleBlock)=>{
        switch(block.type){
            case ArticleBlockType.CODE:
                return <ArticalCodeBlockComponent className={cls.block} block={block}/>
            case ArticleBlockType.IMAGE:
                return <ArticalImageBlockComponent className={cls.block} block={block}/>
            case ArticleBlockType.TEXT:
                return <ArticalTextBlockComponent className={cls.block} block={block} />
            default:
                return null;
        }
    },[])

    let content;

    if(isLoading){
       content= (
       <div>
        <Skeleton className={cls.avatar} width={200} height={200} border="50%"/>
        <Skeleton className={cls.title} width={300} height={24} />
        <Skeleton className={cls.skeleton} width={600} height={24} />
        <Skeleton className={cls.skeleton} width={"100%"} height={280}/>
        <Skeleton className={cls.skeleton} width={"100%"} height={280} />
       </div>)
        
       
    }    else if(error){
        content= (<Text align={AlignText.center} title="произошла ошибка"/>)
    } else {
        content= (
            <>
            <div className={cls.avatarWrapper}>
                <Avatar size={200} src={artical?.img} className={cls.avatar}/>
            </div>
            <Text title={artical?.title} size={TextSize.l} text={artical?.subtitle} className={cls.title} />
            <div className={cls.articalInfo}>
                <Icon Svg={EyeIcon} classname={cls.icons}/>
                <Text text={String(artical?.views)}/>
            </div>
              <div className={cls.articalInfo}>
                <Icon Svg={CalendarIcon} classname={cls.icons}/>
                <Text text={artical?.createdAt}/>
            </div>
            {artical?.blocks.map(renderBlock)}
            </>)}

    return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
        <div className={classNames(cls.articalDeatail, {}, [className])}>
            {content}
            </div>
    </DynamicModuleLoader>);
})