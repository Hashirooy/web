import { classNames } from "shared/lib/classNames/classNames";

import cls from './ArticleDetailsPageHeader.module.scss';
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { t } from "i18next";
import { useCallback } from "react";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
import { getArticleDetailsData } from "entities/Article/model/selectors/articleDetails";
import { getCanEditArticle } from "pages/ArticleDetailsPage/model/selectors/article";

interface ArticleDetailsPageHeaderProps {
    className?: string;

}

export const ArticleDetailsPageHeader = (props: ArticleDetailsPageHeaderProps) => {
    const { className } = props;
    const navigate = useNavigate();
    const userData = useSelector(getUserAuthData);
    const article = useSelector(getArticleDetailsData);
    const canEdit = useSelector(getCanEditArticle);
    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);
    const onEditArticle = useCallback(() => {
        navigate(RoutePath.articles + '/' + article?.id + '/edit');
    }, [navigate, article?.id]);
    return(<div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
            <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
                    {t('Назад к списку')}
                </Button>
                {canEdit && <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE} onClick={onEditArticle}>
                    {t('редактировать')}
                </Button>}
        </div>
    );
};

