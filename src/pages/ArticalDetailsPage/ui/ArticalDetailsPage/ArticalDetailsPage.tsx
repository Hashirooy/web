import { ArticalDetail } from "entities/Articale";
import { memo, useEffect } from "react";
import { classNames } from "shared/lib/classNames/classNames";

import { Text } from "shared/ui/Text/Text";

import cls from "./ArticalDetailsPage.module.scss";
import { use } from "i18next";
import { useParams } from "react-router-dom";
import { CommentList } from "entities/Comment";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

import { useDispatch, useSelector } from "react-redux";
import { get } from "http";
import { getArticalCommentsIsLoading } from "../model/selectors/comments";
import { fetchCommentByArtical } from "../model/services/fetchCommentByArtical";
import { articleDetailsCommentsReducer, getArticleComments } from "../model/slice/ArticalDetailsCommentSlice";

interface ArticalDetailsPageProps {
    className?: string;
}

const ArticalDetailsPage = (props:ArticalDetailsPageProps) => {
    const {className} = props;
    const reducers:ReducersList = {
       articleDetailsComments: articleDetailsCommentsReducer,
    }
    const {id} = useParams<{id:string}>();
    if(!id){
        return <div className={classNames(cls.articalDetailsPage, {}, [className])}>Not found article</div>
    }
    const list = useSelector(getArticleComments.selectAll)
    const isLoading = useSelector(getArticalCommentsIsLoading)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchCommentByArtical(id))
    },[])
    console.log(list, "TEEEEEEEEEEEEst")
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
        <div className={classNames(cls.articalDetailsPage, {}, [className])}>
            <ArticalDetail id={id}/>
            <Text className={cls.commnetTitle}title={"Комментарии"}/>
            <CommentList comments={list} isLoading={isLoading}/>
        </div>
        </DynamicModuleLoader>
    );
}
export default memo(ArticalDetailsPage);