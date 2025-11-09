import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticalListItem.module.scss";
import { Article, ArticleBlock, ArticleBlockType, ArticleTextBlock, ArticleView } from "entities/Articale/model/types/Article";
import { Text } from "shared/ui/Text/Text";
import { Icon } from "shared/ui/Icon/Icon";
import EyeIcon from 'shared/assets/icons/eye.svg'
import { Card } from "shared/ui/Card/Card";
import { useHover } from "shared/lib/hooks/useHover/useHover";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { ArticalTextBlockComponent } from "../ArticalTextBlockComponent/ArticalTextBlockComponent";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { useCallback } from "react";

interface ArticalListItemProps {
    className?: string;
    article: Article;
    view?: ArticleView;
}

export const ArticalListItem = (props: ArticalListItemProps) => {
    const { className, article, view = ArticleView.TILE } = props;
    const navigate = useNavigate();

    const onOpenArticle = useCallback(()=>{
        navigate(RoutePath.artical_details + article.id);
    },[article.id, navigate])
    

    if(view === ArticleView.LIST){
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;
        console.log(textBlock);
        return (
            <div className={classNames(cls.articalListItem, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar}/>
                        <Text text={article.user.username} className={cls.username}/>
                        <Text text={article.createdAt} className={cls.date}/>
                    </div>
                    <Text title={article.title} className={cls.title}/>
                    <Text text={article.subtitle} className={cls.subtitle}/>
                    <Text text={article.type.join(', ')} className={cls.types}/>
                    <img src={article.img} className={cls.img} alt="" />
                    {textBlock && (<ArticalTextBlockComponent block={textBlock} className={cls.textBlock}/>)}
                    <div className={cls.footer}>
                        <Button theme={ButtonTheme.OUTLINE} onClick={onOpenArticle}>Читать далее</Button>
                        <Text text={String(article.views)} className={cls.views}/>
                    </div>
                </Card>
            </div>
        );
    }
    return (
        <div className={classNames(cls.articalListItem, {}, [className, cls[view]])}>
            <Card className={cls.card} onClick={onOpenArticle}>
                <div className={cls.imageWrapper}>
                    <img src={article.img} className={cls.img} alt="" />
                    <Text text={article.createdAt} className={cls.date}></Text>
                </div>
                <div>
                    <div className={cls.infoWrapper}>
                        <Text className={cls.types} text={article.type.join(', ')}/>
                        <Text className={cls.views} text={String(article.views)}/>
                        <Icon Svg={EyeIcon} classname={cls.icons}/>
                    </div>
                    <Text title={article.title} className={cls.title}/>
                </div>
            </Card>
        </div>
    );
}

function useCAllBack(arg0: () => void) {
    throw new Error("Function not implemented.");
}
