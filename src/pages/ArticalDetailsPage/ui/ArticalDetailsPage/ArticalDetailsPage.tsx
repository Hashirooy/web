import { ArticalDetail } from "entities/Articale";
import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";

import cls from "./ArticalDetailsPage.module.scss";
import { use } from "i18next";
import { useParams } from "react-router-dom";

interface ArticalDetailsPageProps {
    className?: string;
}

const ArticalDetailsPage = (props:ArticalDetailsPageProps) => {
    const {className} = props;
    const {id} = useParams<{id:string}>();
    if(!id){
        return <div className={classNames(cls.articalDetailsPage, {}, [className])}>Not found article</div>
    }

    return (
        <div className={classNames(cls.articalDetailsPage, {}, [className])}><ArticalDetail id={id}/></div>
    );
}
export default memo(ArticalDetailsPage);