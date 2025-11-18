import { Input } from "shared/ui/Input/Input"
import cls from './ArticalPageFilter.module.scss';
import { classNames } from "shared/lib/classNames/classNames";
import { ArticleView, ArticleViewSelector } from "entities/Article";
import { useSelector } from "react-redux";
import { getArticlesPageError, getArticlesPageOrder, getArticlesPageSearch, getArticlesPageSort, getArticlesPageType, getArticlesPageView } from "pages/ArticlesPage/model/selectors/articlesPageSelectors";
import { useCallback, useMemo } from "react";
import { articlesPageActions } from "pages/ArticlesPage/model/slices/articlesPageSlice";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Select } from "shared/ui/Select/Select";
import { Card } from "shared/ui/Card/Card";
import { ArticalSortSelector } from "entities/Article/ui/ArticalSortSelector/ArticalSortSelector";
import { ArticleSortField, ArticleType } from "entities/Article/model/types/article";
import { SortOrder } from "shared/types";
import { fetchArticlesList } from "pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList";
import { useDebounce } from "shared/lib/hooks/useDebounce/useDebounce";
import { tabItem, Tabs } from "shared/ui/Tabs/Tabs";

interface ArticlePageFilterProps {
    className?: string;
}

export const ArticalPageFilter = (props:ArticlePageFilterProps) => {
    const {className} = props;
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesPageView);

    const sort = useSelector(getArticlesPageSort);
    const order = useSelector(getArticlesPageOrder);
    const search = useSelector(getArticlesPageSearch);
    const type = useSelector(getArticlesPageType);

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({replace: true}));
    }, [dispatch]);

    const debouncedFetchData = useDebounce(fetchData, 500);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);
    const onChangeOrder = useCallback((newOrder: SortOrder) => {
        dispatch(articlesPageActions.setOrder(newOrder));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);
    const onChangeSort = useCallback((newSort: ArticleSortField) => {
        dispatch(articlesPageActions.setSort(newSort));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);
    const onChangeSearch = useCallback((newSearch: string) => {
        dispatch(articlesPageActions.setSearch(newSearch));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, debouncedFetchData]);

    const typeTabs = useMemo<tabItem[]>(()=>[
        {value: ArticleType.IT, content: 'IT'},
        {value: ArticleType.SCIENCE, content: 'Science'},
        {value: ArticleType.ECONOMICS, content: 'Economics'},
        {value: ArticleType.ALL, content: 'All'},
    ],[])
    
    const onChangeType =useCallback((tab: tabItem)=>{
        dispatch(articlesPageActions.setType(tab.value as ArticleType));
        dispatch(articlesPageActions.setPage(1));
        debouncedFetchData();
    },[dispatch, debouncedFetchData])
    return (
        <div className={classNames(cls.ArticlePageFilter, {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticalSortSelector sort={sort} order={order} onChangeOrder={onChangeOrder} onChangeSort={onChangeSort} />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </div>
            <Card className={cls.search}>
                <Input onChange={onChangeSearch} value={search} placeholder="Поиск" />
                <Tabs tabs={typeTabs} value={type} onTabClick={onChangeType} />
            </Card>
        </div>
    )
}

