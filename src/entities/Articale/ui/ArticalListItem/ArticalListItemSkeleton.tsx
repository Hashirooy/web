import { Skeleton } from "shared/ui/Skeleton/Skeleton"
import cls from "./ArticalListitemSkeleton.module.scss"
import { classNames } from "shared/lib/classNames/classNames";
import { Card } from "shared/ui/Card/Card";
import { ArticleView } from "entities/Articale/model/types/Article";

interface ArticalListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticalListItemSkeleton = (props: ArticalListItemSkeletonProps) => {
    const { className, view} = props;

    if(view === ArticleView.LIST){
    
        return (
            <div className={classNames(cls.articalListItem, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                       <Skeleton border="50%" width={30} height={30} />
                       <Skeleton width={30} height={30} />
                       <Skeleton width={30} height={30} />
                    </div>
                    <Skeleton width={230} height={30} />
                    <Skeleton width={30} height={230} />
                    
                    <div className={cls.footer}>
                    <Skeleton width={36} height={30} />
                    </div>
                </Card>
            </div>
        );
    }



    return (
        <div className={classNames(cls.articalListItem, {}, [className, cls[view]])}>
            <Card className={cls.card} >
                <div className={cls.imageWrapper}>
                    <Skeleton  width={200} height={200}   />
                
                </div>
                <div>
                    <div className={cls.infoWrapper}>   
                        <Skeleton  width={100} height={16} className={cls.types}/>
                    </div>
                    <Skeleton width={150} height={24} className={cls.title}/>
                </div>
            </Card>
        </div>
    );
}