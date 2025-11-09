import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticalList.module.scss";
import { ArticalListItem } from "../ArticalListItem/ArticalListItem";
import { Article, ArticleView } from "entities/Articale/model/types/Article";
import { ArticalListItemSkeleton } from "../ArticalListItem/ArticalListItemSkeleton";
interface ArticalListProps {
    articles: Article[];
    className?: string;
    isLoading?: boolean;
    view?: ArticleView;
}
export const ArticalList = (props: ArticalListProps) => {
    const { className, articles, isLoading, view = ArticleView.TILE } = props;

    if(isLoading){
        return (
            <div className={classNames(cls.articalList, {}, [className, cls[view]])}>
                <ArticalListItemSkeleton view={view} className={cls.card}/>
            </div>
        )
    }

    const renderArticleItem = (article: Article) => {
        return (<ArticalListItem key={article.id} article={article} view={view} className={cls.card}/>)
    }
    return (
        <div className={classNames(cls.articalList, {}, [className, cls[view]])}>
            {articles.length > 0 ? articles.map(renderArticleItem) : null}
        </div>
    );
}