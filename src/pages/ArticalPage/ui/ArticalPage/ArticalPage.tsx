import { memo, useCallback, useEffect } from "react";
import cls from "./ArticalPage.module.scss"
import { ArticalList } from "entities/Articale/ui/ArticalList/ArticalList";
import { Article, ArticleView } from "entities/Articale";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articalPageSliceActions, articalPageSliceReducer, getArticalPage } from "pages/ArticalPage/model/slice/articalePageSlice";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchArticalPage } from "pages/ArticalPage/model/services/fetchArticalPage";
import { useSelector } from "react-redux";
import { getArticleIsLoading } from "pages/ArticalPage/model/selectors/getArticleIsLoading/getArticleIsLoading";
import { getArticleErrorSelector } from "pages/ArticalPage/model/selectors/getArticleError/getArticleErrorSeletor";
import { getArticleViewSelector } from "pages/ArticalPage/model/selectors/getArticleView/getArticleViewSelector";
import { ArticleViewSelector } from "entities/Articale/ui/ArticalViewSelectors/ArticalViewSelectors";


  const reducers:ReducersList = {
    articlesPage: articalPageSliceReducer,
  }

const ArticalPage = () => {

  const dispatch = useAppDispatch()
  const isLoading = useSelector(getArticleIsLoading)
  const articles = useSelector(getArticalPage.selectAll)
  const error = useSelector(getArticleErrorSelector)
  const view = useSelector(getArticleViewSelector)

  const onViewClick = useCallback((newView:ArticleView)=>{
    dispatch(articalPageSliceActions.setView(newView))
  },[dispatch])

  useEffect(()=>{
    dispatch(fetchArticalPage())
    dispatch(articalPageSliceActions.initState())
  },[dispatch])
  
    return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
        <div className={cls.ArticalPage}>
          <ArticleViewSelector view={view} onViewClick={onViewClick}/>
            <ArticalList
             articles={articles}
             isLoading={isLoading}
             view={view}
            />
        </div>
      </DynamicModuleLoader>
    );
}
export default memo(ArticalPage);