import { Card } from "shared/ui/Card/Card"
import cls from './ArticalPageTabs.module.scss';
import { tabItem, Tabs } from "shared/ui/Tabs/Tabs";
import { useCallback, useMemo } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { getArticlesPageType } from "pages/ArticlesPage/model/selectors/articlesPageSelectors";
import { articlesPageActions } from "pages/ArticlesPage/model/slices/articlesPageSlice";
import { ArticleType } from "entities/Article/model/types/article";

interface ArticalPageTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void;
}   

export const ArticalPageTabs = (props: ArticalPageTabsProps) => {
    const { className, value, onChangeType } = props;

    const dispatch = useAppDispatch();

    const type = useSelector(getArticlesPageType);

    const onTabClick =useCallback((tab: tabItem)=>{
        onChangeType(tab.value as ArticleType);
    },[onChangeType])

    const typeTabs = useMemo<tabItem[]>(()=>[
        {value: ArticleType.IT, content: 'IT'},
        {value: ArticleType.SCIENCE, content: 'Science'},
        {value: ArticleType.ECONOMICS, content: 'Economics'},
        {value: ArticleType.ALL, content: 'All'},
    ],[])
    return (
     
                
                <Tabs className={cls.tabs} tabs={typeTabs} value={type} onTabClick={onTabClick} />
        
    )
}